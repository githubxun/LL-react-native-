/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('../styles/main-style');
var SlideView = require('../view/slide-view');
var AnimateView = require('../view/animate-view');

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

var Frame = React.createClass({
  statics: {
  },
  propTypes: {
    leftView: PropTypes.element,  //左侧栏
    rightView: PropTypes.element, //右侧栏

    position: PropTypes.object,//{leftView: {}, rightView: {}}布局定位
    slideOption: PropTypes.object
  },
  getDefaultProps() {
    return {
      /*position: {},
      slideOption: {},*/
    }
  },
  getInitialState: function() {
    return {
      leftView: this.props.leftView,
      rightView: this.props.rightView,
      view: this.props.children,
    	popups: [],  //弹出框缓存器
    };
  },
  componentWillMount() {},
  componentDidMount() {},
  componentWillReceiveProps(nextProps) {},
  render: function() {
    var full_page = {
      width: deviceWidth, 
      height: deviceHeight
    }

    var len = this.state.popups.length, components = [];
    for(var i=0; i<len; i++){
      var up = this.state.popups[i];
      var key = 'animate_'+i;
      components.push(<AnimateView ref={key} {...up.options}>{up.view}</AnimateView>);
    }
    return (
    	<View ref='_frame' style={full_page}>
        <View style={[full_page, {position: 'absolute', backgroundColor: 'blue', width: deviceWidth/2}]}>
          {this.state.leftView}
        </View>
        <View style={[full_page, {position: 'absolute', backgroundColor: 'blue', width: deviceWidth/2, left: deviceWidth/2}]}>
          {this.state.rightView}
        </View>
        <SlideView ref='slide' style={[full_page, {position: 'absolute', top: 0, left: 0, backgroundColor: '#fff'}]} {...this.props.slideOption}>
          {this.state.view}
        </SlideView>
        {components}
      </View>
    ); 
  },
  //interface
  //打开左侧
  toggleLeft(){
    if(this.refs['slide'].state.open == "close"){
      this.refs['slide'].moveLeft();
    }
    else{
      this.refs['slide'].closeSlide();
    }
  },
  //关闭左或者右边侧栏
  closeSlide(){
    this.refs['slide'].closeSlide();  
  },
  //打开右侧
  toggleRight(){
    if(this.refs['slide'].state.open == "close"){
      this.refs['slide'].moveRight();
    }
    else{
      this.refs['slide'].closeSlide();
    }
  },
  //直接渲染主内容
  renderView(view){
    this.setState({view: view});
  },
  //直接渲染左侧内容
  renderLeft(view){
    this.setState({leftView: view});
  },
  //直接渲染右侧内容
  renderRight(view){
    this.setState({leftView: view});
  },
  //弹出一个新的页面
  popup(view, options){
    var _popups = this.state.popups;
    //var popup = <AnimateView {...options}>{view}</AnimateView>
    _popups.push({view: view, options: options});
    this.setState({popups: _popups});
  },
  //关闭最顶层的弹出页面[有动画效果]
  close(){
    var len = this.state.popups.length-1;
    if(len>=0){
      this.refs['animate_'+len].hide();
      this.state.popups.pop();
    }
  },
  //关闭所有的弹出页面[无动画效果]
  closeAll(){
    this.setState({popups: []});
  },
});

module.exports = Frame;