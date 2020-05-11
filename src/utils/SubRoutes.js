import React from 'react';
import {Redirect, Route} from "dva/router";

import NoMatch from '../components/NoMatch/index'

import dynamic from 'dva/dynamic';
import {connect} from "dva";


// const SubRoutes = (route) => {
//     console.log(route)
//     return (
//         <Route render={props => <route.component {...props} routes={route.routes}/>}/>
//     );
// };

// 动态加载路由组件
const dynamicCom = (app,models,component,routes,isAuthority,userInfo) =>dynamic({
    app,
    models: ()=>models,
    component: () => component().then(res => {
        // console.log(res)
        if (isAuthority && !userInfo.id){
            return ()=><Redirect to='/login'/>
        }
        const Component = res.default || res;
        return props => <Component {...props} app={app} routes={routes}/>
    }),
});

 function SubRoutes ({routes,component,app, model,isAuthority,userInfo}) {
    // console.log(isAuthority)
    // console.log(userInfo)

    return (
        <Route component={dynamicCom(app,model,component,routes,isAuthority,userInfo)}/>
    );
};

 // 重定向组件
export  function RedirectRoute  ({routes, from, exact}) {
   const routeR = routes.filter(item => {
       return item.redirect;
   })
    const to = routeR.length ? routeR[0].path : routes[0].path;
   return <Redirect exact={exact} from={from} to={to}/>
};

// 404组件
export  function NoMatchRoute  ({status = 404}) {
    return (
        <Route render={props => <NoMatch {...props} status={status}/>}/>
    );
};

export default connect(({global})=>({userInfo:global.userInfo}))(SubRoutes)