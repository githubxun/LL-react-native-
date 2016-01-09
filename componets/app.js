'use strict';

var React = require('react-native');
var Welcome = require('./welcome/welcome-slider');
var Frame = require('./main/frame');
var Menu = require('./view/menu');
var NavBar = require('./view/nav-bar');
var SimpleView = require('./view/simple-view');

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
		  //isLoop: false,
		}
	},
	getInitialState: function() {
		return {
		  number: 0,
		};
	},
	render: function(){
		/*return (
			<PopView
				nav={<Text>基础设置</Text>}
				view={<Text>基础设置</Text>}
				menu={<Text>基础设置</Text>}
				/>
		)*/

		/*return (
			<NavBar
				left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}
				middle={<Text>基础设置</Text>}
				right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}
			/>
		);*/
		var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>基础设置</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
		var menu = <Menu onPress={this._onPress} logo = 'top' items={[{text: '消息', logo: ''},{text: '邻居', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
		return (
			<Frame 
				ref='frame'
				slideOption={{lock:'none', left: 0.2}}
				leftView = {<Text>左侧</Text>}
				rightView = {<Text>右侧</Text>}
				>
				<SimpleView 
					nav={nav} 
					view={<Text>基础设置</Text>} 
					menu={menu}/>
			</Frame>
		);		


		/*return (
			<Frame 
				ref='frame'
				slideOption={{lock:'none', left: 0.2}}
				leftView = {<Text>左侧</Text>}
				rightView = {<Text>右侧</Text>}
				>
				<View style={{width: deviceWidth, height: deviceHeight}}>
					<View style={{width: deviceWidth, height: deviceHeight-80, borderColor: 'red', borderWidth: 0}}>
						<Text style={{color: 'red'}}>中间提</Text>
					</View>
					<Menu 
						onPress={this._onPress}
						logo = 'top'
						items={[{text: '首页', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}
					/>	
				</View>
			</Frame>
		);		

		if(this.state.number == 0){
			return (<Welcome ref='slider' onPress={this._onPress} onChangePage={(number)=>{console.log(number)}}/>);
		}
		else{
			return (<Frame />);
		}*/
	},
	_onPress: function(item){
		var close = ()=>{
			this.refs['frame'].close();
		}
		var text = <SimpleView
				nav={<Text>基础设置</Text>}
				view={<Text>基础设置</Text>}
				menu={<Text onPress={()=>{this.refs['frame'].close();}}>基础设置</Text>}/>;
		if(item.text == '消息'){
			this.refs['frame'].popup(text, {style: {height: deviceHeight}, animate: 'fade-in-right'});
		}
		else if(item.text == '首页'){
			this.refs['frame'].popup(text, {style: {height: 200}, animate: 'fade-in-bottom'});
		}
		else if(item.text == '我的'){
			this.refs['frame'].closeAll();
		}else{
			this.refs['frame'].close();
		}
	}
});


module.exports = App;