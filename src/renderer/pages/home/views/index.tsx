import { connect } from 'dva';
import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from '../styles/index.less'
import FileSearch from '../components/fileSearch'

const { Header, Content,Sider } = Layout;

export default class Index extends Component<any,any> {
  

  render() {
    return (
        <Layout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Sider className={styles.sider}>
            <FileSearch title={"hello"} onFileSearch={() => {}}/>
          </Sider>
          <Content className={styles.content}>Content</Content>
        </Layout>
      </Layout>
    );
  }
}
