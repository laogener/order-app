import React from 'react';
import {connect} from "dva";
import style from './index.scss'

const Index = (props) => {
    return (
        <div className={style.home}>
            <div className={style.bg}>
                <h1>欢迎来到美味pizza！</h1>
                <h3>这里有各色pizza，欢迎大家品尝！</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
};
// 关联models 下的home.js 和当前的index.js（home组件）
export default connect(({home}) =>({...home}))(Index);