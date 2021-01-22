// @ts-nocheck
import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Menu } from 'antd';
import {  routerRedux } from 'dva/router'
import classNames from 'classnames'

const SubMenu = Menu.SubMenu;

class SidePage extends React.Component {

  createMenu = (list, url) => {
    let that = this;
    return list.map((item, index) => {
      if (item.childMenus && item.childMenus.length !== 0) {
        return (
          <SubMenu key={item.menuName}
            title={<span>{
              item.menuIcon !== null && item.menuIcon !== undefined ?
                <img alt={item.menuName} src={require(`../../assets/${item.menuIcon}.png`)} type={item.menuIcon} style={{ marginRight: 10 }} />
                : null
            }<span>{item.menuName}</span></span>}
          >
            {
              that.createMenu(item.childMenus, `${url}/${item.menuUrl}`)
            }
          </SubMenu>
        )
      }
      let indexclass = classNames({
        'indexclass': item.menuName === '首页'
      })
      return (<Menu.Item key={item.menuName} url={`${url}/${item.menuUrl}`} className={indexclass}>
        {
          item.menuIcon !== null && item.menuIcon !== undefined ? <img alt={item.menuName} src={require(`../../assets/${item.menuIcon}.png`)} type={item.menuIcon} style={{ marginRight: 10 }} /> : null
        }
        <span >{item.menuName}</span>
      </Menu.Item>)
    })
  }

  topage = ({ item, key, keyPath }) => {
    const url = item.props.url;
    // console.dir(url)
    if (url === window.location.hash.split('#')[1]) {
      return;
    }
    // if (url === '/agreement/rzxy') {
    //   let win = window.open(`/#${url}`, '_blank');
    //   win.focus();
    //   return 
    // }
    this.props.dispatch(routerRedux.push({
      pathname: url,
    }));
  }

  render() {
    const { list } = this.props;
    // console.dir(list)
    
    return (
      <div className={styles.wrapper}>
        {/* <div className={styles.logo}>
          <a><img src={require('../../assets/menulogo.png')} /></a>
        </div> */}
        <Menu
          mode='inline'
          style={{ background: '#4F5469', fontSize: '14px', color: '#C0C9D8' }}
          className={styles.menu}
          inlineCollapsed={this.props.collapsed}
          inlineIndent={41}
          onClick={this.topage}
        // defaultSelectedKeys={['首页']}
        >
          {/* {
            this.createMenu(list, '')
          } */}
        </Menu>
      </div>
    )
  }
}







export default connect()(SidePage);
