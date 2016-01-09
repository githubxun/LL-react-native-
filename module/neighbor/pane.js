/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var styles = require('./styles');
var neighborService = require('../service/neighbor-service');

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
  Image,
	Text
} = React;
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var Neighbor = React.createClass({
  statics: {
    d: 1
  },
  propTypes: {
    onPress: PropTypes.func,
    popup: PropTypes.func,
  },
  getDefaultProps() {
    return {
      onPress: function(){}
    }
  },
  getInitialState: function() {
    return {
      list: [],
      dataSource: ds.cloneWithRows([]),
    };
  },
  componentWillMount() {
  },
  componentDidMount() {
    var that = this;
    setTimeout(function(){
      neighborService.loadNeighbor(function(result){
        var list = that.state.list;
        list = list.concat(result.list);
        that.setState({dataSource: ds.cloneWithRows(result.list)});
      });
    },1000)
  },
  render(){
    return (
        <ListView
          initialListSize ={15}
          onEndReachedThreshold ={10}
          removeClippedSubviews ={true}
          onEndReached={this._reachedEnd}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={[styles.list]}/>
    );
  },
  _renderRow(rowData: string, sectionID: number, rowID: number){
      return <Item
        onPress={this.onPress}
        rowNumber={rowID}
        data={rowData}/>
  },
  onPress(rowData, rowID){
    var popup = <Text>this is just a test page !</Text>
    if(this.props.popup){
      this.props.popup(popup);
    }
  },
  reachedEnd(){

  }
});

var Item = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
    data: PropTypes.string,
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
    var online = {};
    if(this.props.rowNumber<5){
      online = {
        color: 'green'
      }
    }

    return (
      <TouchableHighlight 
        onPress={this.onPress} 
        activeOpacity={1} 
        underlayColor={'#E3E3E3'}
        style={[styles.item]}>
        <View style={[styles.item_content]}>
          <Image style={[styles.logo_image]} source={require('image!photo_icon')}/>
          <View style={[styles.item_text]}>
            <Text style={[styles.item_name, online]}>{this.props.data}</Text>
            <Text numberOfLines={1} style={[styles.item_remark, online]}>{'[在线]我是一个好孩子，是一个好孩子，是一个好孩子，是一个好孩子，是一个好孩子，是一个好孩子，你们呢？你你你们呢？你们呢？'}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },
  onPress: function(){
    if(this.props.onPress){
      //this.props.onPress(this.props.data, this.props.rowNumber);
    }
  }
});

module.exports = Neighbor;
