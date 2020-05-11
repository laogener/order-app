import React, {Component} from 'react';
import { Form, Input, Button } from 'antd';
import Request from '../../utils/Request'
import style from './account.scss'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
class Register extends Component {
    state = {
        email: '123@qq.com'
    }
    onFinish = values => {
        // console.log('Success:', values);
        const {email,password} = values;
        Request('/api/users',{
            method:'post',
            data:{email, password}
        }).then(res=>{
            res.data && this.props.history.push('/login')
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
                        email: this.state.email,
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
                    <Form.Item
                        label="确认密码"
                        name="password2"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Register;