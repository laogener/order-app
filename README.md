React+dvaJS+Antd实战-点餐系统(商品管理/购物车/数据请求/路由)  

1.路由以数组形式动态配置  
2.models文件夹存放数据状态，在routers.js下RouteConfig数组的model属性注入组件  
3.路由守卫：router.js 中isAuthority 和models下global.js里面存放的用户信息 为开关，在SubRoutes,js中设置拦截  
4.二级路由在About文件夹下的index.js,三级路由在About文件夹下的Contact.js  


5.重写全局样式pages/User/account.scss 文件中

备注:
webpackrc.js 或者.webpackrc 文件是 roadhog 的 webpack 部分功能配置文件  
dva-cli 又是基于 roadhog 实现的  
webpack.config.js就是标准的webpack配置文件  

6..webpackrc.js中配置路径别名  