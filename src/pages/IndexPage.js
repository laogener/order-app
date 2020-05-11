import React from 'react';
import { connect } from 'dva';

import styles from './IndexPage.scss';

// 路由
import {Switch} from 'dva/router'

import NavBar from './NavBar'

import { Layout } from 'antd';
import SubRoutes,{RedirectRoute,NoMatchRoute} from "../utils/SubRoutes";

const { Header, Content } = Layout;
function IndexPage(props) {
    // console.log(props)
    const {routes,app} = props;
  return (
      <Layout className={styles.layout}>
          <Header className={styles.header}>
              <NavBar {...props}></NavBar>
          </Header>
          <Content className={styles.content}>
              {/*一级路由*/}
              <Switch>
                  {routes.map((route, i) =>(
                      <SubRoutes key={i} {...route} app={app}/>
                  ))}
                  {/*
                    重定向方式：
                    如果路由配置中没有redirect:true（通过循环重定向）
                    默认第一个路由为重定向路由
                    <Redirect exact from={'/'} to={routes[0].path}/>
                  */}
                  {/*<Redirect to='/home'/>*/}
                  <RedirectRoute exact={true} from={'/'} routes={routes}/>
                  {/*输入的链接不存在时，跳转到NoMatch组件中*/}
                  <NoMatchRoute/>
              </Switch>
          </Content>
      </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
