/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('../styles/main-style');

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

var Item = React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired,  //渲染菜单
    onPress: PropTypes.func,
    active: PropTypes.bool,
  },
  getDefaultProps() {
    return {
      onPress: function(){},
      active: false
    }
  },
  getInitialState: function() {
    var state = this.props;
    return state;
  },
  render(){
    var style = {};
    if(this.props.active == true){
      style = {color: 'green'};
    }

    return (
      <TouchableOpacity 
        onPress={()=>{this.props.onPress(this.state.data)}} 
        activeOpacity={0.5}
         style={[styles.menu_item]}>
          <Image style={[styles.icon]} source={this.state.data.logo}/>
          <Text style={[styles.text, style]}>{this.state.data.text}</Text>
      </TouchableOpacity>
    );
  }
});

var Menu = React.createClass({
  statics: {
  },
  propTypes: {
    onPress: PropTypes.func, //菜单点击
    //change: PropTypes.func, //菜单change事件

    items: PropTypes.array, //菜单项[{key: '', text:'', logo: ''}]
    logo: PropTypes.string, //none,top,bottom,left,right   是否有图片或者图片的位置
  },
  getDefaultProps() {
    return {
      logo: 'none',
      items: []
    }
  },
  getInitialState: function() {
    return {
      active: this.props.items[0],
    };
  },
  componentWillMount() {},
  componentDidMount() {},
  componentWillReceiveProps(nextProps) {},
  render: function() {
    var menus = [], len = this.props.items.length, that = this;
    var createItem = (item) => {
      return <Item data={item} active={item.text==that.state.active.text} onPress={this._onPress}/>
    }

    for(var i=0, len = this.props.items.length; i<len; i++){
      menus.push(createItem(that.props.items[i]));    
    }

    return (
    	<View style={[styles.menu_container, this.props.style]} >
        {menus}
      </View>
    ); 
  }, 
  _onPress(item){
    /*var items = this.state.items;    
    for(var i=0, len = this.props.items.length; i<len; i++){
      if(this.props.items[i].text == item.text){
        items.splice(i, 1);
        this.setState({items: items});
        break;
      }
    }*/
    this.setState({active: item});
    //this.state.active = item;
    if(this.props.onPress){
      this.props.onPress(item);
    }
  },
  //interface
  show(){

  },
  //隐藏指定key的菜单项[key不指定，全部都隐藏]
  hide(key){

  },
});

var styles = StyleSheet.create({
  menu_container: {
    width: deviceWidth, 
    height: 55, 
    flex: 3, 
    backgroundColor: '#fff',
    bottom: 0,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute',
    borderColor: '#ececec',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  menu_item: {
    flex: 1,
    height: 55,
    alignItems: 'center', 
    //justifyContent: 'center',
    //position: 'relative',
    //borderColor: '#ccc',
    //borderRightWidth: 1
  },
  item_active: {
    color: 'green'
  },
  icon: {
    width: 25,
    height: 25,
    marginTop:7,
    marginBottom: 2
  },
  text: {
    fontSize: 10
  }
});

module.exports = Menu;
