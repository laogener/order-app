import React from 'react';
import { Router, Switch } from 'dva/router';

import SubRoutes from './utils/SubRoutes';

// 私有路由开关
const isAuthority = true;


const RouteConfig = [
    {
        path:'/',
        component:()=>import('./pages/IndexPage'),
        model:[],
        routes:[
            {
                path:'/home',
                component: ()=>import('./pages/Home'),
                redirect:true,
                model:[import('./models/home')],
                isAuthority
            },
            {
                path:'/about',
                component: ()=>import('./pages/About'),
                model:[],
                isAuthority,
                routes:[
                    {
                        path:'/about/contact',
                        component: ()=>import('./pages/About/Contact'),
                        model:[],
                        routes:[
                            {
                                path:'/about/contact/phone',
                                component: ()=>import('./pages/About/Phone'),
                                model:[],
                            },
                            {
                                path:'/about/contact/address',
                                component: ()=>import('./pages/About/Address'),
                                model:[],
                            }
                        ]
                    },
                    {
                        path:'/about/delivery',
                        component: ()=>import('./pages/About/Delivery'),
                        model:[],
                    },
                    {
                        path:'/about/history',
                        component: ()=>import('./pages/About/History'),
                        model:[],
                    },
                    {
                        path:'/about/orderingguide',
                        component: ()=>import('./pages/About/OrderingGuide'),
                        model:[],
                    }
                ]
            },
            {
                path:'/admin',
                component: ()=>import('./pages/Admin'),
                model:[],
                isAuthority
            },
            {
                path:'/menus',
                component: ()=>import('./pages/Menus'),
                model:[],
                isAuthority
            },
            {
                path:'/login',
                component: ()=>import('./pages/User/Login'),
                model:[],
            },
            {
                path:'/register',
                component: ()=>import('./pages/User/Register'),
                model:[],
            }
        ]
    }
];

function RouterConfig({ history,app }) {
    // console.log(app)
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/"  component={IndexPage} />*/}
        {/*调用封装的路由组件*/}
          {RouteConfig.map((route, i) =>(
              <SubRoutes key={i} {...route} app={app}/>
          ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
