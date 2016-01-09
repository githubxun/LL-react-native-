/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
	PropTypes,
	View,
	PanResponder,
	Dimensions,
  StyleSheet,
	Animated,
  TouchableOpacity,
  Image,
	Text
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var Setting = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
  },
  getDefaultProps() {
    return {
      onPress: function(){}
    }
  },
  getInitialState: function() {
    var state = this.props;
    return state;
  },
  render(){
    return (
        <Text style={[]}>附近</Text>
    );
  }
});

var styles = StyleSheet.create({
  
});

module.exports = Setting;
