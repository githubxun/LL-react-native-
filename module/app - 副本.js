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
		var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
		var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
		var defaultView = <SimpleView nav={nav} view={<Neighbor/>} menu={menu}/>;
		return {
			nav: nav,
			menu: menu,
			view: defaultView
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
				{this.state.view}
			</Frame>
		);		
	},
	menuPress: function(item){
		if(item.text == '邻居'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
			var neighbor = <SimpleView nav={this.state.nav} view={<Neighbor/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(neighbor);
		}
		else if(item.text == '消息'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var message = <SimpleView nav={this.state.nav} view={<Message/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(message);
		}
		else if(item.text == '附近'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var owner = <SimpleView nav={this.state.nav} view={<Owner/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(owner);
		}
		else if(item.text == '我的'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var setting = <SimpleView nav={this.state.nav} view={<Setting/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(setting);
		}
		
	}
});


module.exports = App;'use strict';

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
		var nav = <NavBar 
			leftPress={this.openLeft}
			left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} 
			middle={<Text>邻居</Text>} 
			right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
		var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
		var defaultView = <SimpleView nav={nav} view={<Neighbor/>} menu={menu}/>;
		return {
			nav: nav,
			menu: menu,
			view: defaultView
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
				{this.state.view}
			</Frame>
		);		
	},
	openLeft(){
		this.refs['frame'].toggleLeft();
	},
	menuPress: function(item){
		if(item.text == '邻居'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '附近', logo: ''},{text: '我的', logo: ''}]}/>;
			var neighbor = <SimpleView nav={this.state.nav} view={<Neighbor/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(neighbor);
		}
		else if(item.text == '消息'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var message = <SimpleView nav={this.state.nav} view={<Message/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(message);
		}
		else if(item.text == '附近'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var owner = <SimpleView nav={this.state.nav} view={<Owner/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(owner);
		}
		else if(item.text == '我的'){
			//var nav = <NavBar left={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>} middle={<Text>邻居</Text>} right={<Image style={{width:25, height: 25}} source={{uri: 'http://linlimen.com/img/desk/bottom-nav-setting.png'}}/>}/>;
			//var menu = <Menu onPress={this.menuPress} logo = 'top' items={[{text: '邻居', logo: ''},{text: '消息', logo: ''},{text: '我的', logo: ''},{text: '设置', logo: ''}]}/>;
			var setting = <SimpleView nav={this.state.nav} view={<Setting/>} menu={this.state.menu}/>;
			this.refs['frame'].renderView(setting);
		}
		
	}
});


module.exports = App;