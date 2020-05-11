import React, {Component} from 'react';
import {Link,Switch} from "dva/router";
import SubRoutes, {RedirectRoute} from "../../utils/SubRoutes";
import style from './tabPane.scss'
class Contact extends Component {
    render() {
        const {routes,app} = this.props;
        return (
            <div className={style.tabPane}>
                <p>联系我们</p>
                <div className={style.tabContent}>
                    <Link to="/about/contact/phone">电话</Link>
                    <Link to="/about/contact/address">地址</Link>
                </div>
                <div className={style.info}>
                    {/*三级路由*/}
                    <Switch>
                        {routes.map((route, i) =>(
                            <SubRoutes key={i} {...route} app={app}/>
                        ))}

                        <RedirectRoute exact={true} from={'/about/contact'} routes={routes}/>

                    </Switch>
                </div>
            </div>
        );
    }
}

export default Contact;