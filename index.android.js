/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var App = require('./module/app');
var Wecome = require('./componets/welcome/welcome-slider');
var BaiduMap =require('./componets/view/baidumap-view');

var {
	StyleSheet,
	View,
	Text,
  	AppRegistry,
  	DeviceEventEmitter,
} = React;

var { NativeModules } = require('react-native');
var HuanxinModule = NativeModules.HuanxinModule;

var guy_app = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	render: function() {
		return <BaiduMap style={{flex: 1}}/>
		//return (<App />); 
	},
	componentDidMount: function() {
		HuanxinModule.show('xunge ni hao ! i‘m come from android Toast', HuanxinModule.LONG);

		HuanxinModule.showByCallback('xun', function(str){
			HuanxinModule.show(str, HuanxinModule.LONG);
		}, function(str){
			HuanxinModule.show(str, HuanxinModule.LONG);
		});

		//event
		DeviceEventEmitter.addListener('myEvent', function(e, params) {
			HuanxinModule.show('yes', HuanxinModule.LONG);
		    // handle event.
		});
		HuanxinModule.triggerEvent('myEvent');
	},	
});

AppRegistry.registerComponent('guy_app', () => guy_app);
