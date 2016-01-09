'use strict';

var React = require('react-native');
var Welcome = require('../componets/welcome/welcome-slider');
var Frame = require('../componets/main/frame');
var Menu = require('../componets/view/menu');
var NavBar = require('../componets/view/nav-bar');
var SimpleView = require('../componets/view/simple-view');
var AnimateView = require('../componets/view/animate-view');
var Neighbor = require('./neighbor/pane');
var Message = require('./message/pane');
var Nearby = require('./nearby/pane');
var Owner = require('./owner/pane');
var Left = require('./left/pane');

var {
  	StyleSheet,
  	PropTypes,
  	Text,
  	View,
  	Image,
  	Dimensions
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var App = React.createClass({
	statics: {
		//DataSource: ViewPagerDataSource
	},
	propTypes: {
		//renderPage: PropTypes.func.isRequired,
		onChangePage: PropTypes.func,
		onPress: PropTypes.func,
	},
	getDefaultProps() {
		return {
		}
	},
	getInitialState: function() {
		return {
			index: 0,
			menus: [
				{text: '邻居', logo: require('image!menu_neighbor'), index: 0},
				{text: '消息', logo: require('image!menu_message'), index: 1},
				//{text: '附近', logo: require('image!menu_nearby'), index: 2},
				{text: '我的', logo: require('image!menu_owner'), index: 2}
			]
		};
	},
	render: function(){
		var neighborBar = <NavBar 
			leftPress={this.openLeft}
			left={<Image style={{width:25, height: 25}} source={require('image!photo_icon')}/>} 
			right={<Image style={{width:22, height: 22}} source={require('image!menu_home')}/>} 
			middle={<Text>邻居</Text>} />;
		var messageBar = <NavBar 
			leftPress={this.openLeft}
			left={<Image style={{width:25, height: 25}} source={require('image!photo_icon')}/>} 
			right={<Image style={{width:22, height: 22}} source={require('image!menu_home')}/>} 
			middle={<Text>消息</Text>} />;
		/*var nearbyBar = <NavBar 
			leftPress={this.openLeft}
			left={<Image style={{width:25, height: 25}} source={require('image!photo_icon')}/>} 
			right={<Image style={{width:22, height: 22}} source={require('image!menu_home')}/>} 
			middle={<Text>附近</Text>} />;
		<SimpleView nav={nearbyBar} view={<Nearby popup={this.popup}/>} height={deviceHeight-55}/>
			*/
		var ownerBar = <NavBar 
			leftPress={this.openLeft}
			left={<Image style={{width:25, height: 25}} source={require('image!photo_icon')}/>} 
			right={<Image style={{width:22, height: 22}} source={require('image!menu_home')}/>} 
			middle={<Text>我的</Text>}/>;

		return (
			<Frame 
				ref='frame'
				slideOption={{lock:'both', left: 0.5}}
				leftView = {<Left popup={this.popup}>左侧</Left>}
				rightView = {<Text>右侧</Text>}
				>
				<AnimateView ref='pane' lock='both' fade
					style={[{width: this.state.menus.length*deviceWidth, height: deviceHeight-80}]}>
					<SimpleView nav={neighborBar} view={<Neighbor popup={this.popup}/>} height={deviceHeight-55}/>
					<SimpleView nav={messageBar} view={<Message popup={this.popup}/>} height={deviceHeight-55}/>
					<SimpleView nav={ownerBar} view={<Owner close={this.close} popup={this.popup}/>} height={deviceHeight-55}/>
				</AnimateView>
				<Menu 
					style={[{bottom: 25}]}
					onPress={this.menuPress} 
					items={this.state.menus}
					logo = 'top'/>
			</Frame>
		);		
	},
	popup(view, options){
		this.refs['frame'].popup(view, options);
	},
	close(view, options){
		this.refs['frame'].close();
	},
	openLeft(){
		this.refs['frame'].toggleLeft();
	},
	menuPress: function(item){
		this.refs['pane'].goTo({x: -item.index*deviceWidth, y:0})
	}
});


module.exports = App;