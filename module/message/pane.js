/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');

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

var Message = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
  },
  getDefaultProps() {
    return {
    }
  },
  componentDidMount() {
    var that = this;
    setTimeout(function(){
      that.setState({dataSource: ds.cloneWithRows([
        'xun','xun','xun','xun','xun','xun',
        'xun','xun','xun','xun','xun','xun',
        'xun','xun','xun','xun','xun','xun',
        'xun','xun','xun','xun','xun','xun',
        'xun','xun','xun','xun','xun','xun',
        'xun','xun','xun','xun','xun','xun'
      ])});
    },3000)
  },
  getInitialState: function() {
    return {
      list: [],
      dataSource: ds.cloneWithRows([]),
    };
  },
  render(){
    return (
      <ListView
        style={[styles.list]}
        renderSectionHeader ={this._renderHeader}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}/>
    );
  },
  _renderHeader(){
    return (
      <ScrollView style={[styles.nav_scroll]} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text, styles.nav_active]}>全部</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>活动</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>段子</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>周边</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>求助</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>求租</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text style={[styles.nav_text]}>出租</Text>
          </TouchableOpacity>
      </ScrollView>
      );
  },
  _renderRow(rowData: string, sectionID: number, rowID: number){
    return (
      <Item/>
    );
  }
});


var Item = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
    data: PropTypes.object,
    rowNumber: PropTypes.string,
  },
  getDefaultProps() {
    return {
      onPress: function(){},
      data: {}
    }
  },
  getInitialState: function() {
    return {
    };
  },
  componentDidMount() {
  },
  render(){
    return (
      <View style={[styles.item]}>
        <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
          <View style={[styles.item_header]}>
            <Image style={[styles.item_nav_logo]} source={require('image!photo_icon')}/>
            <View style={[styles.item_nav_info]}>
              <Text style={[{color: '#666', fontSize: 18, fontWeight: 'blod'}]}>xunxun</Text>
              <Text style={[{color: '#666', fontSize: 12}]}>今天 12:01</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.item_content]}>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Text>今天是一个好日子，好多野狗、家狗都出来溜圈圈了！笑死我了</Text>
          </TouchableOpacity>
          <View style={[styles.item_content_imgs]}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
              <Image style={[styles.item_content_img]} source={require('image!photo_icon')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
              <Image style={[styles.item_content_img]} source={require('image!photo_icon')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
              <Image style={[styles.item_content_img]} source={require('image!photo_icon')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
              <Image style={[styles.item_content_img]} source={require('image!photo_icon')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.item_handle]}>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Image style={[styles.item_handle_btn,styles.item_handle_good]} source={require('image!good')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}} activeOpacity={0.6}>
            <Image style={[styles.item_handle_btn,styles.item_handle_reply]} source={require('image!reply')}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.praise_list]}>
          <Text>赞:巡巡,求求</Text>
        </View>
        <View style={[styles.reply_list]}>
          <Text>求求:感觉很好啊</Text>
          <Text>求求:感觉很好啊</Text>
          <Text>求求:感觉很好啊</Text>
        </View>
      </View>
    );
  },
  onPress: function(){
    if(this.props.onPress){
      //this.props.onPress(this.props.data, this.props.rowNumber);
    }
  }
});

module.exports = Message;
