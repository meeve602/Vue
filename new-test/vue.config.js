//const path = require('path');
//
//module.exports = {
//	devServer: {
//		proxy:{
//			'/api':{
//				target:'http://localhost:8081',
//				pathRewrite:{
//					'^api':'/mock'
//				}
//			}
//		}
//	},
//	chainWebpack:(config) => {
//		config.resolve.alias
//			.set('styles', path.join(__dirname,'./src/assets/styles/'
//			.set('@', path.join(__dirname,'./src/'))
//			.set('common', path.join(__dirname,'./src/common/'))
//			))
//	}
//}自定义配置项
