import React from 'react';
import { connect } from 'dva';
import styles from './app.less';
import { Layout } from 'antd';
import HeaderPage from './layout/header';
import SidePage from './layout/side';
import FooterPage from './layout/side'
const {  Sider, Content } = Layout;


interface AppProps{
  dispatch:any;
}

interface AppState{
  collapsed:boolean;
}


class AppPage extends React.Component<AppProps,AppState> {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    };
  }

  componentDidMount(){
    if(window.localStorage.getItem('userId')){
      this.props.dispatch({type:'menu/getMenu',payload:{userName:window.localStorage.getItem('userId')}});
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (<div className={styles.wrapper}>
      <Layout>
        <HeaderPage collapsed={this.state.collapsible} toggle={this.toggle} />
        <Content>
          <Layout>
            <Sider
              className={styles.side}
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              width={170}
              collapsedWidth={32}
            >
              <SidePage collapsed={this.state.collapsed} />
            </Sider>
            <Layout>
              <Content className={styles.content}>
                {this.props.children}
              </Content>
              <FooterPage />
            </Layout>
          </Layout>
        </Content>
      </Layout>
    </div>)
  }
}

export default connect()(AppPage);
