var React = require('react-native');

var {
	Dimensions,
	StyleSheet,
} = React;
var {width, height} = Dimensions.get('window');

var Styles = StyleSheet.create({
  list: {
    flex:1,
    backgroundColor: '#ececec',
  },
  nav_scroll: {
    height: 30,
    backgroundColor: '#ececec',
    position: 'relative'
  },
  nav_text: {
    fontSize: 12,
    marginHorizontal: 10,
    height: 30,
    alignSelf: 'center',
    position: 'relative',
    marginTop: 6
  },
  nav_active: {
    borderColor: 'green',
    borderBottomWidth : 2,
    color: 'green'
  },

  item: {
    backgroundColor: '#fff',
    width: width,
    flex: 1,
    padding: 10,
    marginBottom: 5,
  },
  item_header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_nav_logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  item_nav_info: {
    flex: 1
  },
  item_content: {
    paddingVertical: 12,
    flex: 1
  },
  item_content_imgs: {
    flex: 1,
    flexDirection: 'row',
  },
  item_content_img: {

  },
  item_handle: {
    paddingTop: 5,
    flex: 1,
    flexDirection: 'row',
  },
  item_handle_btn: {
    width: 23,
    height: 23
  },
  item_handle_good: {
    marginRight: 30,
  },
  item_handle_reply: {

  },
  praise_list: {
    paddingVertical: 5,
  },
  reply_list:{

  }
});


module.exports = Styles;