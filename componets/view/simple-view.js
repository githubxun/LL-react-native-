'use strict';

var React = require('react-native');

var {
  	StyleSheet,
  	PropTypes,
  	View,
  	TouchableOpacity,
  	Dimensions
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


var PopView = React.createClass({
	statics: {
	},
	propTypes: {
		nav: PropTypes.element,	//点击左侧的按钮事件
		menu: PropTypes.element,	//点击右侧的按钮事件
		view: PropTypes.element.isRequired,	//左侧element
		width: PropTypes.number,
		height: PropTypes.number,
	},
	getDefaultProps() {
		return {
			width: deviceWidth,
			height: deviceHeight
		  //isLoop: false,
		}
	},
	getInitialState: function() {
		return {
		};
	},
	render: function(){
		var nav = {}, view = {height: this.props.height-130}, menu = {};
		if(!this.props.nav){
			nav.height = 0;
			view.height += 50;
		}
		if(!this.props.menu){
			view.height += 55;
			menu.height = 0;
		}

		return (
			<View style={styles.container}>
				<View style={[styles.nav, nav]}>{this.props.nav}</View>
				<View style={[styles.view, view]}>{this.props.view}</View>
				<View style={[styles.menu, menu]}>{this.props.menu}</View>
			</View>
		);		
	},
});

var styles = StyleSheet.create({
  container: {
    width: deviceWidth, 
    height: deviceHeight, 
    flex: 1, 
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  nav:{
  	width: deviceWidth,
  	height: 50,
  },
  view:{
  	width: deviceWidth,
  	height: deviceHeight-130,
    //backgroundColor: 'blue',
  },
  menu:{
  	width: deviceWidth,
  	height: 55,
  },
});


module.exports = PopView;