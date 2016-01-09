/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//var ViewPagerAndroid = require('./componets/ViewPager/ViewPagerAndroid.android');
//var ViewPagerAndroid = require('./node_modules/react-native-viewpager/Sample/MainScreen');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Navigator,
} = React;
var ViewPager = require('react-native-viewpager');

var deviceWidth = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var IMGS = [
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
  'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg'
];

var guy_app = React.createClass({
  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
 
    return {
      dataSource: dataSource.cloneWithPages(IMGS),
    };
  },
  render: function() {
    var that = this;
    setTimeout(function(){
      //ViewPager.jumpTo();
      var d = that;
      that.refs['vp'].movePage(1);
    },2000);
    var d = 1;
    return (<ViewPager
        ref = "vp"
        style={[styles.border, {flex: 1, height: height, width: deviceWidth}]}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={()=>{}}
        isLoop={true}
        label={true}
        locked={false}
        autoPlay={false}/>
      ); 
  },
  _renderPage: function(
    data: Object,
    pageID: number | string,) {
    var colors = ['red', 'black', 'yellow', 'blue', 'red','black', 'blue'];
    return (
      /*<View style={{backgroundColor: colors[pageID], width: deviceWidth, height: height}}>
      </View>*/
      <Image
        source={{uri: data}}
        style={[styles.page, styles.border]} />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  border:{
    borderColor: 'red',
    borderWidth: 1
  },
  page: {
    height: height,
    width: deviceWidth,
  },
});

AppRegistry.registerComponent('guy_app', () => guy_app);
