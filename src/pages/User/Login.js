import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import style from './account.scss'
import Request from "../../utils/Request";
import {connect} from "dva";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
@connect()
class Login extends Component {
    onFinish = values => {
        // console.log('Success:', values);
        const {email,password} = values;
        Request('/api/users',{
            method:'post',
            data:{email, password}
        }).then(res=>{

            if (res.data) {
                console.log(res.data)
                localStorage.setItem('email',res.data.email);
                localStorage.setItem('id',res.data.id);
                this.props.dispatch({
                    type: 'global/setUserInfo',
                    payload:res.data
                }).then(()=>{

                    this.props.history.push('/')
                })
            }
        })
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <div className={style.account}>
                <img src={require('@/logo.gif')} alt="" className={style.logo}/>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    className='account-form'
                    initialValues={{
                        email: '11@qq.com',
                        password: '1',
                    }}
                >
                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules={[{ type: 'email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;