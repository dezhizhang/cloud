import { connect } from 'dva';
import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from '../styles/index.less'

const { Header, Content, Footer, Sider } = Layout;

export default class Index extends Component<any,any> {
  

  render() {
    return (
        <Layout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Sider className={styles.sider}>Sider</Sider>
          <Content className={styles.content}>Content</Content>
        </Layout>
        {/* <Footer className={styles.footer}>Footer</Footer> */}
      </Layout>
    );
  }
}
