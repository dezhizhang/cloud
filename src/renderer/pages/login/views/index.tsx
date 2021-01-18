import React, { Component } from 'react';
import { connect } from 'dva'
import { Link } from 'dva/router';
import { Form, Input, Button } from 'antd';
import styles from '../styles/index.less';



const Login  = () => {
  return (
    <div className={styles.container}>
    <div className={styles.login}>
      <div className={styles.left}>
        <p className={styles.title}>欢迎登录</p>
      </div>
      <div className={styles.right}>
        <p className={styles.logo}>
          {/* <a><img alt='前端临控平台' src={require('../../../assets/loginlogo.png')} /></a> */}
        </p>
        {/* <Form onSubmit={this.handleSubmit} className={styles.loginFrom}>
          <Form.Item>
            {getFieldDecorator('loginName', {
              rules: [{ required: true, message: '请输入账号!' }],
            })(
              <Input addonBefore={<img alt='' src={require('../../../assets/user.png')} className={styles.prefixIcon} />} placeholder="输入系统账号" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input addonBefore={<img alt='' src={require('../../../assets/lock.png')} theme="filled" className={styles.prefixIcon} />} type="password" placeholder="输入登录密码" />
            )}
            {
              this.props.login.msg === "" || this.props.login.msg === undefined ?
                null
                :
                <div className='ant-form-explain' style={{ position: 'absolute', color: '#f5222d', zIndex: '12', backgroundColor: '#fff', top: '30px' }}>{this.props.login.msg}</div>
            }
          </Form.Item>
          <Form.Item>
            <Button disabled={this.state.buttonStatus} htmlType="submit" className={styles.submit} size="large">
              登录
           </Button>
          </Form.Item>
        </Form> */}
      </div>

    </div>
  </div>
  )
}

export default Login;


// interface LoginProps {
//   form:any;
//   dispatch:any;

// }

// interface LoginState{
//   buttonStatus:boolean;
// }

// class Login extends Component<LoginProps,LoginState> {
//   state = {
//     buttonStatus: false
//   }

//   handleSubmit = (e) => {
//     const { dispatch } = this.props
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         this.setState({
//           buttonStatus: true
//         })
//         dispatch({ type: 'login/login', payload: values })
//         setTimeout(() => {
//           this.setState({
//             buttonStatus: false
//           })
//         }, 3000)
//       }
//     });
//   }

//   render() {
//     // const { getFieldDecorator } = this.props.form;
//     return (
      // <div className={styles.container}>
      //   <div className={styles.login}>
      //     <div className={styles.left}>
      //       <p className={styles.title}>欢迎登录</p>
      //     </div>
      //     <div className={styles.right}>
      //       <p className={styles.logo}>
      //         <a><img alt='前端临控平台' src={require('../../../assets/loginlogo.png')} /></a>
      //       </p>
      //       {/* <Form onSubmit={this.handleSubmit} className={styles.loginFrom}>
      //         <Form.Item>
      //           {getFieldDecorator('loginName', {
      //             rules: [{ required: true, message: '请输入账号!' }],
      //           })(
      //             <Input addonBefore={<img alt='' src={require('../../../assets/user.png')} className={styles.prefixIcon} />} placeholder="输入系统账号" />
      //           )}
      //         </Form.Item>
      //         <Form.Item>
      //           {getFieldDecorator('password', {
      //             rules: [{ required: true, message: '请输入密码!' }],
      //           })(
      //             <Input addonBefore={<img alt='' src={require('../../../assets/lock.png')} theme="filled" className={styles.prefixIcon} />} type="password" placeholder="输入登录密码" />
      //           )}
      //           {
      //             this.props.login.msg === "" || this.props.login.msg === undefined ?
      //               null
      //               :
      //               <div className='ant-form-explain' style={{ position: 'absolute', color: '#f5222d', zIndex: '12', backgroundColor: '#fff', top: '30px' }}>{this.props.login.msg}</div>
      //           }
      //         </Form.Item>
      //         <Form.Item>
      //           <Button disabled={this.state.buttonStatus} htmlType="submit" className={styles.submit} size="large">
      //             登录
      //          </Button>
      //         </Form.Item>
      //       </Form> */}
      //     </div>

      //   </div>
      // </div>

//     );
//   }
// }

// export default connect(Login);


// export default Form.create()(Login);

// export default connect(({ login }) => ({ login }))();
