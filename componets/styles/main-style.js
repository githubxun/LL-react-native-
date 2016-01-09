var React = require('react-native');
var Config = require('../../config/config');
var {
  StyleSheet,
} = React;
var {width, height} = Config.DEVICE;

var styles = StyleSheet.create({
	full_page: {
		width: width,
		height: height,
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: '#fff'
	},
	border: {
		borderColor: 'red',
		borderWidth: 1
	}
});

module.exports = styles;