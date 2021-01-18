import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from '../styles/index.less';



const Login  = (props) => {
  //登录功能
  const onFinish = (values: any) => {
    props.dispatch({
      type:'login/login',
      payload:values
    });
  };   
  return (
    <div className={styles.container}>
    <div className={styles.login}>
      <div className={styles.left}>
        <p className={styles.title}>欢迎登录</p>
      </div>
      <div className={styles.right}>
        <h1 className={styles.logo}>
          前端监控平台
        </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: '邮箱不能为空！', },
            {pattern:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,message:'输入的邮箱不合法'}
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '密码不能为空！' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submit}>
             登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
  )
}

export default connect(({ login }) => ({ login }))(Login);


