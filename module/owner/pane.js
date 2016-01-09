/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');
var NavBar = require('../../componets/view/nav-bar');
var SimpleView = require('../../componets/view/simple-view');

var {
	PropTypes,
  View,
  PanResponder,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  ScrollView,
  Image,
	Text
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var Owner = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
  },
  getDefaultProps() {
    return {
      onPress: function(){},
      popup: function(){},
      close: function(){}
    }
  },
  getInitialState: function() {
    return {
      list: [],
      dataSource: ds.cloneWithRows([]),
    };
  },
  render(){
    return (
        <View style={[{flex: 1}, styles.scroll]}>
          <ScrollView
            alwaysBounceVertical ={true}
            //automaticallyAdjustContentInsets={false}
            onScroll={() => { console.log('onScroll!'); }}>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View style={[styles.user_info]}>
                <Image style={[styles.user_logo]} source={require('image!photo_icon')}/>
                <View style={[styles.user_detail]}>
                  <Text>杨巡 男</Text>
                  <Text>北岸江山</Text>
                </View>
                <Image style={[styles.left_slide, {top: 10}]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>发布动态</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>私有订阅</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View>
                <Text>更换小区</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>修改密码</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View>
                <Text>基础设置</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>关于我们</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View>
                <Text>意见反馈</Text>
                <Image style={[styles.left_slide]} source={require('image!left_slide')}/>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#C20505'}
              style={[styles.item, {backgroundColor: 'darkred'}]}>
              <View style={[{alignItems: 'center'}]}>
                <Text style={[{color: '#fff'}]}>安全退出</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
    );
  },
  onPress(rowData, rowID){
    var bar = <NavBar 
      leftPress={()=>{this.props.close();}}
      left={<Image style={{width:25, height: 25}} source={require('image!right_slide')}/>} 
      middle={<Text>测试</Text>}/>;

    var view = <SimpleView nav={bar} view={<Text>this is just a test page !</Text>}/> 
    if(this.props.popup){
      this.props.popup(view);
    }
  },
  reachedEnd(){

  }
});

module.exports = Owner;
