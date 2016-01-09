var React = require('react-native');
var {
  Dimensions
} = React;
var {width, height} = Dimensions.get('window');

module.exports = {
	//设备信息相关
	DEVICE: {
		width: width,
		height: height
	},
	//欢迎界面的图片
	WELCOME_SLIDER: {
		IMGS: [
			'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
			'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg',
			'http://img0.bdstatic.com/img/image/2043d07892fc42f2350bebb36c4b72ce1409212020.jpg'
		]
	}
}