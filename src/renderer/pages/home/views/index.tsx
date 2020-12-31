import { connect } from 'dva';
import React, { Component } from 'react';
import { Layout } from 'antd';
import styles from '../styles/index.less'
import FileSearch from '../components/fileSearch';
import TabList from '../components/fileList';

const { Header, Content,Sider } = Layout;

export default class Index extends Component<any,any> {
  

  render() {
    const files = [
      { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
    ];
    return (
        <Layout className={styles.layout}>
        <Header className={styles.header}>Header</Header>
        <Layout>
          <Sider className={styles.sider}>
            <FileSearch title={"hello"} onFileSearch={() => {}}/>
          </Sider>
          <Content className={styles.content}>
            <TabList files={files} onFileClick={() => {}} onSaveEdit={()=> {}} unsaveIds={[]}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
