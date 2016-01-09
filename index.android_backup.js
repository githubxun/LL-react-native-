/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var App = require('./module/app');
var Wecome = require('./componets/welcome/welcome-slider');
var {
  AppRegistry,
} = React;

var guy_app = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (<App />); 
  },
  
});

AppRegistry.registerComponent('guy_app', () => guy_app);
