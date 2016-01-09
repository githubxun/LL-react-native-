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

var Left = React.createClass({
  propTypes: {
    onPress: PropTypes.func,
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
  render(){
    return (
        <View style={[{flex: 1}, styles.scroll]}>
          <ScrollView
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
                  <Text>北岸江山</Text>
                  <Text style={{fontSize: 12, marginTop: 3}}>活跃度：☆☆☆</Text>
                </View>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>加入第：100天</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View>
                <Text>我发布：13条</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>今发布：103条</Text>
              </View>
            </TouchableHighlight> 
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>共发布：103条</Text>
              </View>
            </TouchableHighlight> 
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>新邻居：10人(本周)</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item]}>
              <View>
                <Text>总人员：134人</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, styles.bottom_divide]}>
              <View>
                <Text>私有群：14个</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, {alignItems: 'center'}]}>
              <View>
                <Text>今日推荐</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              onPress={this.onPress} 
              activeOpacity={1} 
              underlayColor={'#E3E3E3'}
              style={[styles.item, {alignItems: 'center'}]}>
              <View>
                <Text>地图位置</Text>
              </View>
            </TouchableHighlight>
          </ScrollView>
        </View>
    );
  },
  onPress(rowData, rowID){

  },
  reachedEnd(){

  }
});

module.exports = Left;
