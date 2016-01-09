'use strict';

var React = require('react-native');
var Welcome = require('../componets/welcome/welcome-slider');
var Frame = require('../componets/main/frame');
var Menu = require('../componets/view/menu');
var NavBar = require('../componets/view/nav-bar');
var SimpleView = require('../componets/view/simple-view');
var Neighbor = require('./neighbor/pane');
var Message = require('./message/pane');
var Owner = require('./owner/pane');
var Setting = require('./Setting/pane');
var ViewPager = require('react-native-viewpager');

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
		dataSource : new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,})
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
		//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
		var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
		//var defaultView = <SimpleView nav={nav} view={<Neighbor/>} menu={menu}/>;
		//var data = [{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}];
		var data = ['邻居', '消息', '附近', '我的'];
		var ds = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2,});
		var dataSource = ds.cloneWithPages(data);
		return {
			menu: menu,
			dataSource: dataSource
		};
	},
	render: function(){
		return (
			<Frame 
				ref='frame'
				slideOption={{lock:'both', left: 0.5}}
				leftView = {<Text>左侧</Text>}
				rightView = {<Text>右侧</Text>}
				>
				<ViewPager
			        ref = "vp"
			        style={[{flex: 1, height: deviceHeight, width: deviceWidth}]}
			        dataSource={this.state.dataSource}
			        renderPage={this._renderPage}
			        onChangePage={this._onChangePage}
			        isLoop={false}
			        label={false}
			        locked={false}
			        autoPlay={false}/>
			</Frame>
		);		
	},
	_renderPage(data: Object, pageID: number | string){
		if(data == '邻居'){
			var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
			var neighbor = <SimpleView nav={nav} view={<Neighbor/>} menu={this.state.menu}/>;
			return neighbor;
		}
		else if(data == '消息'){
			var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			var message = <SimpleView nav={nav} view={<Message/>} menu={this.state.menu}/>;
			return message;
		}
		else if(data == '附近'){
			var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			var owner = <SimpleView nav={nav} view={<Owner/>} menu={this.state.menu}/>;
			return owner;
		}
		else if(data == '我的'){
			var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			var setting = <SimpleView nav={nav} view={<Setting/>} menu={this.state.menu}/>;
			return setting;
		}
	},
	menuPress: function(item){
		if(item.text == '邻居'){
			this.refs['vp'].movePage(-1);
		}
		else if(item.text == '消息'){
			this.refs['vp'].movePage(1);
		}
		else if(item.text == '附近'){
			this.refs['vp'].movePage(1);
		}
		else if(item.text == '我的'){
			this.refs['vp'].movePage(1);
		}
		
	}
});


module.exports = App;