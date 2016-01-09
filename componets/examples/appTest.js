'use strict';

var React = require('react-native');
var App = require('../app');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;


var AppTest = React.createClass({
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <App />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = AppTest;