import React from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { Layout,  } from 'antd';



const { Footer } = Layout;


class FooterPage extends React.Component{
  render(){
    return (
          <Footer className={styles.footer}>
              <p className={styles.text}>Copyright 2019 smartdata360 Inc. 粤ICP备14003701号</p>
          </Footer>
        )
  }
}

export default connect()(FooterPage);
