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

var AnimateView = React.createClass({
  statics: {
    /*
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      
      //renderPage: PropTypes.func.isRequired,
    */
  },
  propTypes: {
    ...View.propTypes,
    beforeEnter: PropTypes.func,
    afterEnter: PropTypes.func,
    beforeLeave: PropTypes.func,
    afterLeave: PropTypes.func,
    show: PropTypes.func,
    hide: PropTypes.func,

    lock: PropTypes.string,
    sensitivity: PropTypes.number,
    gestureDistance: PropTypes.number,
    animate: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    auto: PropTypes.bool,
    from: PropTypes.object,//{x: deviceWidth,y: 0},//滑动块的初始位置
    to: PropTypes.object//{x: 0,y: 0},//滑动块的最终位置
  },
  getDefaultProps() {
    return {
      lock: 'none', //none,both,left,right 锁定后不能向该方向滑动
      sensitivity: 0.8,  //移动速度小于多少时触发动画
      gestureDistance: 0.2,//移动的距离达到多少比例时触发动画
      animate: 'fade-in-right',  //fade-in-right,fade-in-left,fade-in-top,fade-in-bottom  容器从那边进入
      auto: true, 
    }
  },
  getInitialState: function() {
    var state = {
      fling: false,   //当前是否正在处于滑动过程中
      init: false,
      scrollValue: new Animated.ValueXY(),
    };
    var from = this.props.form;
    state.to = this.props.to || {x: 0, y: 0};

    if(this.props.animate == 'fade-in-right'){
      state.from = from || {x: deviceWidth, y: 0};
    }
    else if(this.props.animate == 'fade-in-left'){
      state.from = from || {x: -deviceWidth, y: 0};
    }
    else if(this.props.animate == 'fade-in-top'){
      state.from = from || {x: 0, y: -deviceHeight};
    }
    else if(this.props.animate == 'fade-in-bottom'){
      state.from = from || {x: 0, y: deviceHeight};
    }
    else{
      state.from = from || {x: deviceWidth, y: 0};
    }

    return state;
  },
  componentWillReceiveProps(nextProps) {},
  //
  componentWillMount() {
  	var release = (e, gestureState) => {
      var dsx = Math.abs((gestureState.dx) / deviceWidth) ,
          vx = gestureState.vx,
          dsy = Math.abs((gestureState.dy) / deviceHeight),
          vy = gestureState.vy; 
      if((this.props.animate == 'fade-in-left'||this.props.animate == 'fade-in-right') && 
        dsx>this.props.gestureDistance && vx<this.props.sensitivity){
        this.hide();
      }
      else if((this.props.animate == 'fade-in-top' || this.props.animate == 'fade-in-bottom') &&
        dsy>this.props.gestureDistance && vy<this.props.sensitivity){
        this.hide();
      }
      else{
        this.show();
      }
    }

    //this._panResponder = PanResponder.create({
    this._panResponder = PanResponder.create({
      // Claim responder if it's a horizontal pan
      onMoveShouldSetPanResponder: (e, gestureState) => {
        //禁止滑动
        if(this.props.lock != 'none' || 
          //this.state.fling || 
          Math.abs(gestureState.vx)>this.props.sensitivity || 
          Math.abs(gestureState.vy)>this.props.sensitivity){
          return false;
        }
        //this.props.hasTouch && this.props.hasTouch(true);

        var dx = gestureState.dx, dy = gestureState.dy;
        if(this.props.animate == 'fade-in-left' && dx<0){
            return true;
        }
        else if(this.props.animate == 'fade-in-right' && dx>0){
            return true;
        }
        else if(this.props.animate == 'fade-in-top' && dy<0){
            return true;
        }
        else if(this.props.animate == 'fade-in-bottom' && dy>0){
            return true;
        }
        else if(this.props.animate == 'both'){
          return true;
        }
        else{
          return false;
        }
      },

      // Touch is released, scroll to the one that you're closest to
      onPanResponderRelease: release,
      onPanResponderTerminate: release,

      // Dragging, move the view with the touch
      onPanResponderMove: (e, gestureState) => {
        //禁止滑动
        if(this.props.lock != 'none' || 
          Math.abs(gestureState.vx)>this.props.sensitivity || 
          Math.abs(gestureState.vy)>this.props.sensitivity){
          return;
        }

        var dx = gestureState.dx, dy = gestureState.dy;
        if(this.props.animate == 'fade-in-left' && dx<0){
            this.state.scrollValue.setValue({x: dx, y: 0});
        }
        else if(this.props.animate == 'fade-in-right' && dx>0){
            this.state.scrollValue.setValue({x: dx, y: 0});
        }
        else if(this.props.animate == 'fade-in-top' && dy<0){
            this.state.scrollValue.setValue({x: 0, y: dy});
        }
        else if(this.props.animate == 'fade-in-bottom' && dy>0){
            this.state.scrollValue.setValue({x: 0, y: dy});
        }
        else if(this.props.animate == 'both'){
          this.state.scrollValue.setValue({x: dx, y: dy});
        }
      },
    });
  },
  componentDidMount() {
    this.setState({init: true});
    if(this.props.auto == true)
      this.show();
  },
  
  render: function() {
    var transform = this.state.scrollValue.getTranslateTransform();
  	var sceneContainerStyle = {
      width: deviceWidth,
      height: deviceHeight,
      backgroundColor: '#fff',
      position: 'absolute',
      flex: 1,
      flexDirection: 'row',
      //borderColor: 'red',
      //borderWidth: 1
    }
    if(this.state.init == false)
      this.state.scrollValue.setValue(this.state.from)
    return (
      <Animated.View ref='_animate' style={[sceneContainerStyle, this.props.style, this.state.scrollValue.getLayout()]}
      //<Animated.View style={[sceneContainerStyle, {transform: transform}, this.props.style]}
      	{...this._panResponder.panHandlers}>
        {this.props.children}          
      </Animated.View>
    ); 
  },
  //进入
  show(){
    this.state.fling = true;
    if(this.props.beforeMove){
      this.props.beforeEnter(this);
    }
    //this.state.scrollValue.setValue(this.state.from)
    Animated.spring(
       this.state.scrollValue,         // Auto-multiplexed
       {toValue: this.state.to, tension: 40, friction: 10} // Back to zero
     ).start((event) => {
        if (event.finished) {
          this.state.fling = false;
          if(this.props.afterEnter){
            this.props.afterEnter(this);
          }
        }
      });
  },
  showWithOutAnimate(){
    if(this.props.beforeMove){
      this.props.beforeEnter(this);
    }
    this.state.scrollValue.setValue(this.state.to);
    if(this.props.afterEnter){
      this.props.afterEnter(this);
    }
  },
  //退出
  hide(){
    this.state.fling = true;
    if(this.props.beforeLeave){
      this.props.beforeLeave(this);
    }
    //this.state.scrollValue.setValue(this.state.to)
    Animated.spring(
       this.state.scrollValue,         // Auto-multiplexed
       {toValue: this.state.from, tension: 20, friction: 10} // Back to zero
     ).start((event) => {
        if (event.finished) {
          this.state.fling = false;
          if(this.props.afterLeave){
            this.props.afterLeave(this);
          }
        }
      });
  },
  moveTo: function(position){
    this.state.fling = true;
    Animated.spring(
     this.state.scrollValue,         // Auto-multiplexed
     {toValue: position, tension: 40, friction: 10} // Back to zero
   ).start((event) => {
      if (event.finished) {
        this.state.fling = false;
        if(this.props.after){
          this.props.after(this);
        }
      }
    });
  },
  goTo: function(position){
    this.state.scrollValue.setValue({x: position.x, y: position.y});
  },
  isFling: function(){
    return this.state.fling;
  }
});

module.exports = AnimateView;