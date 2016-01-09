/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Config = require('../../config/config');
var ViewPager = require('react-native-viewpager');
var {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PropTypes,
  Navigator,
  TouchableOpacity
} = React;
var {width, height} = Config.DEVICE;
var IMGS = Config.WELCOME_SLIDER.IMGS;


var WelcomeSlider = React.createClass({
  statics: {
    //DataSource: ViewPagerDataSource
  },
  propTypes: {
    //renderPage: PropTypes.func.isRequired,
    onChangePage: PropTypes.func,
    onPress: PropTypes.func,
  },
  getDefaultProps() {
    return {
      //isLoop: false,
    }
  },
  getInitialState: function() {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });
 
    return {
      number: 0,
      dataSource: dataSource.cloneWithPages(IMGS),
    };
  },
  render: function() {
    return (<ViewPager
        ref = "vp"
        style={[{flex: 1, height: height, width: width}]}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        isLoop={true}
        label={true}
        locked={false}
        autoPlay={false}/>
      ); 
  },
  _renderPage: function(data: Object, pageID: number | string,) {
    var colors = ['red', 'black', 'yellow', 'blue', 'red','black', 'blue'];
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this._onPress} style={[styles.page]}>
        <Image source={{uri: data}} style={[styles.page]} />
      </TouchableOpacity>
    );
  },
  _onChangePage(number){
    this.setState({number: number});
    this.props.onChangePage && this.props.onChangePage(number);
  },
  _onPress(){
     this.props.onPress && this.props.onPress(this.state.number); 
  }
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
    width: width,
  },
});

module.exports = WelcomeSlider;
