var React = require('react-native');

var {
  Dimensions,
  StyleSheet,
} = React;
var {width, height} = Dimensions.get('window');

var Styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#ececec',
    borderColor: '#ececec',
    borderRightWidth: 1,
    height: height
  },
  item: {
    width: width/2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 1,
    backgroundColor: '#fff'
  },
  bottom_divide: {
    marginBottom: 15
  },
  user_info: {
    flex: 1,
    flexDirection: 'row'
  },  
  user_logo: {
    width: 50,
    height: 50
  },
  user_detail: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  left_slide:{
    position: 'absolute',
    right: 0,
    top: -6,
    width: 30,
    height: 30
    /*justifyContent: 'center',
    alignSelf: 'flex-end',*/
  }
});


module.exports = Styles;