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


var NavBar = React.createClass({
	statics: {
	},
	propTypes: {
		//renderPage: PropTypes.func.isRequired,
		leftPress: PropTypes.func,	//点击左侧的按钮事件
		rightPress: PropTypes.func,	//点击右侧的按钮事件
		middlePress: PropTypes.func,	//点击右侧的按钮事件
		left: PropTypes.element,	//左侧element
		middle: PropTypes.element.isRequired,	//中间element
		right: PropTypes.element,	//右侧element
	},
	getDefaultProps() {
		return {
		  //isLoop: false,
		}
	},
	getInitialState: function() {
		return {
		};
	},
	render: function(){
		return (
			<View style={styles.nav_container}>
				<TouchableOpacity 
			        onPress={this._leftPress} 
			        activeOpacity={0.5}
			         style={[styles.left_nav]}>
			         {this.props.left}
			    </TouchableOpacity>
			    <TouchableOpacity 
			        onPress={this._middlePress} 
			        activeOpacity={0.5}
			         style={[styles.middle_nav]}>
			         {this.props.middle}
			    </TouchableOpacity>
				<TouchableOpacity 
			        onPress={this._rightPress} 
			        activeOpacity={0.5}
			         style={[styles.right_nav]}>
			         {this.props.right}
			    </TouchableOpacity>
			</View>
		);		
	},
	_leftPress: function(){
		if(this.props.leftPress){
			this.props.leftPress();
		}
	},
	_rightPress: function(){
		if(this.props.rightPress){
			this.props.rightPress();
		}
	},
	_middlePress: function(){
		if(this.props.middlePress){
			this.props.middlePress();
		}
	},
});

var styles = StyleSheet.create({
  nav_container: {
    width: deviceWidth, 
    height: 50, 
    flex: 1, 
    backgroundColor: '#fff',
    top: 0,
    flexDirection: 'row', 
    
    position: 'absolute',
    borderColor: '#ececec',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  left_nav:{
  	flex: 1,
  	width: 50,
  	height: 50,
  	alignItems: 'flex-start', 
    justifyContent: 'center',
  },
  middle_nav:{
  	flex: 1,
  	width: deviceWidth-100,
  	height: 50,
  	alignItems: 'center', 
    justifyContent: 'center',
  },
  right_nav:{
  	flex: 1,
  	width: 50,
  	height: 50,
  	alignItems: 'flex-end', 
    justifyContent: 'center',
  },
});


module.exports = NavBar;