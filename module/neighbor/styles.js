var React = require('react-native');

var {
	Dimensions,
	StyleSheet,
} = React;
var {width, height} = Dimensions.get('window');

var Styles = StyleSheet.create({
	list: {
		//backgroundColor: '#ececec'
	},
  	item: {
  		width: width,
  		flex: 1,
  		//height: 10,
  		//paddingBottom: 10,
  		paddingTop: 7,
  		paddingBottom: 7,
  		paddingLeft: 10,
  		paddingRight: 10,
  		marginBottom: 2,
  		//backgroundColor: '#ececec'
  	},
  	item_content:{
  		flex: 1,
  		flexDirection: 'row',
  		justifyContent: 'center'
  	},
  	logo_image: {
  		width: 40,
  		height: 40,
  		borderRadius: 40,
  		marginRight: 10
  	},
  	item_text: {
  		flex: 1,
  		height: 40,
  		borderBottomWidth: 1,
  		borderBottomColor: '#ececec',
  		paddingBottom: 2,
  		paddingTop: 2
  	},
  	item_name: {
  		fontWeight: 'bold',
  		paddingBottom: 2,
  	},
  	item_remark: {
  		fontSize: 10
  	}
});


module.exports = Styles;