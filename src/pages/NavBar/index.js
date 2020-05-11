import React, {Component} from 'react';

import style from './index.scss'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import {Link} from "dva/router";

const menus = [
    {
        key: 'home',
        path: '/home',
        name: '主页'
    },
    {
        key: 'menus',
        path: '/menus',
        name: '菜单'
    },
    {
        key: 'admin',
        path: '/admin',
        name: '管理'
    },
    {
        key: 'about',
        path: '/about',
        name: '关于我们'
    },
    {
        key: 'login',
        path: '/login',
        name: '登录',
        className: style.login,
        isAuthority:true
    },
    {
        key: 'register',
        path: '/register',
        name: '注册',
        className: style.register,
        isAuthority:true
    }
];
class Index extends Component {
    constructor(props){
        // console.log(props)
        super(props);
        this.state = {
            selectedKeys:[]
        }
    }
    handleSelectedKeys(pathname){
        const temp = pathname.split('/');
        const  key = temp && temp.length < 2 ? 'home' : temp[1];
        this.setState({
            selectedKeys:[key]
        })
    }
    // 当页面刷新时，组件会重新加载，会执行componentDidMount(cdm) 狗子函数
    // 为解决刷新页面菜单与路由不同步问题，解决方法放在cdm狗子函数执行
    componentDidMount() {
        this.handleSelectedKeys(this.props.location.pathname)
    }

    UNSAFE_componentWillReceiveProps (nextProps, nextContext) {
        const {pathname} = this.props.location.pathname;
        // 当路由发生变化时，改变当前菜单选中key值
        nextProps.location.pathname !== pathname && this.handleSelectedKeys(nextProps.location.pathname)
    }
    handleClickMenu =({key}) =>{
        if (key === 'logout'){
            window.localStorage.clear();
            this.props.history.push('/');
        }
    }
    menu = (
        <Menu onClick={this.handleClickMenu}>
            <Menu.Item key='logout'>
                <span>退出</span>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <nav className={style.header}>
                <a className={style.logo} href="/">
                    <img src={require("@/logo.gif")} alt=""/>
                </a>
                <Menu className={style['menu-left']} mode='horizontal' defaultSelectedKeys={['home']} selectedKeys={this.state.selectedKeys}>
                    {
                        menus.filter(({isAuthority}) => !isAuthority).map(({key, path, name, className}) =>
                            <Menu.Item className={className} key={key}><Link to={path}>{name}</Link></Menu.Item>
                        )
                    }
                </Menu>
                {
                    localStorage.email && localStorage.id && (
                        <Dropdown overlay={this.menu} className={style['dropdown-menu']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <span className={style.email}>{localStorage.email}</span>
                                <DownOutlined className={style.icon}/>
                            </a>
                        </Dropdown>
                    )
                }
            </nav>
        );
    }
}

export default Index;