// @ts-nocheck
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Layout, Icon, Badge, Divider, Modal } from 'antd';
import { routerRedux } from 'dva/router';



const { Header } = Layout;

const confirm = Modal.confirm

class HeaderPage extends React.Component {

  state = {
    collapsed: false
  }

  loginOut = () => {
    let that = this;
    confirm({
      title: '确定退出吗?',
      cancelText: '取消',
      okText: "确定",
      okButtonProps: { size: 'small', style: { height: 26, width: 50, background: '#EA6356', borderColor: '#D0473A' } },
      cancelButtonProps: { size: 'small', style: { marginLeft: 8, height: 26, width: 50, color: '#5e5e5e', borderColor: "#C7C8CC" } },
      onOk() {
        that.props.dispatch({
          type: 'login/logout'
        })
      },
      onCancel() {
      },
    });
  }
  toAccount() {
    this.props.dispatch(routerRedux.push({
      pathname: '/account/accountagreement'
    }))
  }
  render() {
    return (
      <Header className={styles.header}>
        <div className={styles.logo}>
          {/* <img className={styles.logoImage} src={require('../../assets/contentLogo.png')} alt='小智金融科技云平台' /> */}
          <Divider type="vertical" className={styles.divider} />
          <Icon className={styles.icon} onClick={this.props.toggle} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <div className={styles.placeholder}></div>
        <div className={styles.user}>
          <div className={styles.userInfo}>
            <span className={styles.title}>
              你好！小智
                <Icon type='down' />
            </span>
            <img onClick={this.toAccount.bind(this)} className={styles.image} src={require('../../assets/avatar.jfif')} alt="" />
          </div>
          <div className={styles.download} onClick={this.loginOut}>
            <img className={styles.image} src={require('../../assets/download.png')} alt="" />
          </div>
        </div>
      </Header>
    )
  }
}




export default connect()(HeaderPage);
