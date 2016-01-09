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
	Animated,
	Text
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var SliderView = React.createClass({
  statics: {
    //DataSource: ViewPagerDataSource
  },
  propTypes: {
    //renderPage: PropTypes.func.isRequired,
    beforeMove: PropTypes.func,
    movedRight: PropTypes.func,
    movedLeft: PropTypes.func,
    lock: PropTypes.string,
    left: PropTypes.number,
    right: PropTypes.number,
    duration: PropTypes.number,
    sensitivity: PropTypes.number,
    gestureDistance: PropTypes.number
  },
  getDefaultProps() {
    return {
      lock: 'none', //none,both,left,right 锁定后不能向该方向滑动
      left: 0.5,//滑动的距离
      right: 0.5,//滑动的距离
      duration: 300,//动画速度
      sensitivity: 0.3,  //移动速度大于多少时触发动画
      gestureDistance: 0.2,  //移动距离大于多少时触发动画
    }
  },
  getInitialState: function() {
    return {
      open: 'close', //close,left,right
    	scrollWidth: 0,	//当前左右滑动的距离
    	scrollValue: new Animated.Value(0)
    }
  },
  //
  componentWillMount() {
  	var release = (e, gestureState) => {
      var vx = gestureState.vx, dx = gestureState.dx;
      //手向右滑
      if(dx>0){
        //尝试打开左侧栏
        if(this.props.lock != 'both'&&this.props.lock!='left'&&this.state.open != 'right'){
          var relativeGestureDistance = dx / (deviceWidth*this.props.left);
          //速度够快或者移动的距离够远
          if(Math.abs(relativeGestureDistance) > this.props.gestureDistance|| Math.abs(vx)>this.props.sensitivity){
            this.moveLeft();
          } else{
            this.closeSlide();
          }
        }
        //尝试关闭右侧栏
        else if(this.state.open == 'right'){
          var relativeGestureDistance = dx / (deviceWidth*this.props.right);
          //速度够快或者移动的距离够远
          if(Math.abs(relativeGestureDistance) > this.props.gestureDistance|| Math.abs(vx)>this.props.sensitivity){
            this.closeSlide();
          } else{
            this._reset();
          }
        }    
      }
      //手向左滑
      else{
        //尝试打开右侧栏
        if(this.props.lock != 'both'&&this.props.lock!='right'&&this.state.open != 'left'){
          var relativeGestureDistance = dx / (deviceWidth*this.props.right);
          //速度够快或者移动的距离够远
          if(Math.abs(relativeGestureDistance) > this.props.gestureDistance|| Math.abs(vx)>this.props.sensitivity){
            this.moveRight();
          } else{
            this.closeSlide();
          }
        }
        //尝试关闭左侧栏
        else if(this.state.open =='left'){
          var relativeGestureDistance = dx / (deviceWidth*this.props.left);
          //速度够快或者移动的距离够远
          if(Math.abs(relativeGestureDistance) > this.props.gestureDistance|| Math.abs(vx)>this.props.sensitivity){
            this.closeSlide();
          } else{
            this._reset();
          }
        }    
      }
    }

    this._panResponder = PanResponder.create({
      // Claim responder if it's a horizontal pan
      onMoveShouldSetPanResponder: (e, gestureState) => {
        if (this.props.locked == 'both') {
            return false;
        }
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
            return true;
        }
      },

      // Touch is released, scroll to the one that you're closest to
      onPanResponderRelease: release,
      onPanResponderTerminate: release,

      // Dragging, move the view with the touch
      onPanResponderMove: (e, gestureState) => {
        var dx = gestureState.dx, vx = gestureState.vx;
        if(Math.abs(vx)>this.props.sensitivity){
          return;
        }
        var offsetX = dx/deviceWidth;//+this.state.scrollWidth;
        //手向右滑
        if(dx>0){
          //尝试打开左侧栏
          if(this.props.lock != 'both'&&this.props.lock!='left'&&this.state.open != 'right'&&Math.abs(offsetX+this.state.scrollWidth) <= this.props.left){
            this.state.scrollValue.setValue(-offsetX+this.state.scrollWidth);
          }
          //尝试关闭右侧栏
          else if(this.state.open =='right'&&Math.abs(offsetX-this.state.scrollWidth) <= this.props.right){
            this.state.scrollValue.setValue(-offsetX+this.state.scrollWidth);
          }    
        }
        //手向左滑
        else{
          //尝试打开右侧栏
          if(this.props.lock != 'both'&&this.props.lock!='right'&&this.state.open != 'left'&&Math.abs(offsetX) <= this.props.right){
            this.state.scrollValue.setValue(-offsetX);
          }
          //尝试关闭左侧栏
          else if(this.state.open =='left'&&Math.abs(-offsetX+this.state.scrollWidth) <= this.props.left){
            this.state.scrollValue.setValue(-offsetX+this.state.scrollWidth);
          }    
        }
      },
    });
  },
  componentDidMount() {},
  componentWillReceiveProps(nextProps) {},
  render: function() {
  	var translateX = this.state.scrollValue.interpolate({
        inputRange: [0, 1], outputRange: [0, -deviceWidth]
      });
  	var sceneContainerStyle = {
      width: deviceWidth,
      height: deviceHeight,
      flex: 1,
    }
    return (
      <Animated.View style={[sceneContainerStyle, {transform: [{translateX}]}, this.props.style]}
      	{...this._panResponder.panHandlers}>
        {this.props.children}
      </Animated.View>
    ); 
  },
  _reset(){
    Animated.timing(       // Uses easing functions
      this.state.scrollValue, // The value to drive
      {
        toValue: this.state.scrollWidth,        // Target
        duration: this.props.duration,    // Configuration
      },
    ).start((event) => {
      if (event.finished) {
        //this.state.scrollWidth = 0;
      }
    }); 
  },
  closeSlide(){
    Animated.timing(       // Uses easing functions
      this.state.scrollValue, // The value to drive
      {
        toValue: 0,        // Target
        duration: this.props.duration,    // Configuration
      },
    ).start((event) => {
      if (event.finished) {
        this.state.open = 'close';
        this.state.scrollWidth = 0;
      }
    }); 
  },
  //移动左边
  moveLeft(){
    if(this.props.beforeMove){
      this.props.beforeMove();
    }
    Animated.timing(       // Uses easing functions
      this.state.scrollValue, // The value to drive
      {
        toValue: -this.props.left,        // Target
        duration: this.props.duration,    // Configuration
      },
    ).start((event) => {
      if (event.finished) {
        if(this.props.movedLeft){
          this.props.movedLeft(this);
        }
        this.state.open = 'left';
        this.state.scrollWidth = -this.props.left;
      }
    });   
  },
  //移动右边
  moveRight(){
    Animated.timing(       // Uses easing functions
      this.state.scrollValue, // The value to drive
      {
        toValue: this.props.right,        // Target
        duration: this.props.duration,    // Configuration
      },
    ).start((event) => {
      if (event.finished) {
        if(this.props.movedRight){
          this.props.movedRight(this);
        }
        this.state.open = 'right';
        this.state.scrollWidth = this.props.right; 
      }
    });  
  },
});

module.exports = SliderView;