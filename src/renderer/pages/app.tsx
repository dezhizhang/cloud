import { connect } from 'dva';
import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from './app.less';

const { Header, Content,Sider } = Layout;

export default class Index extends Component<any,any> {
  render() {
    return (
        <Layout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
      </Layout>
    );
  }
}