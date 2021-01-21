/* global window */
import { ConfigProvider } from 'antd';
import classnames from 'classnames';
import { Layout,Loader } from '@/components';
// import { Layout,Loader} from '../components'
// import { Layout, Loader } from '../components';
import { routerRedux } from 'dva/router'
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import NProgress from 'nprogress';
import React from 'react';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import './app.less';



const { Header, Bread, Footer, Sider, styles, SwitchBusinessUnit } = Layout;
let lastHref;

const App = ({ children, dispatch, app, loading, location }) => {
  const {
    employeeInfo,
    siderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    menu,
    permissions,
    pageTitle,
    pageSuperstratum,
    switchBusinessUnitVisible,
    unit,
  } = app; //darkTheme //取消自定义主题风格
  let { pathname } = location;
  pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  //const current = menu.filter(item => pathToRegexp(item.route || '').exec(pathname));
  //const hasPermission = current.length ? permissions.visit.includes(current[0].id) : false;
  const href = window.location.href;

  if (lastHref !== href) {
    NProgress.start();
    if (!loading.global) {
      NProgress.done();
      lastHref = href;
    }
  }

  const darkTheme = true; //强制设置菜单风格为黑色风格
  const headerProps = {
    menu,
    employeeInfo,
    location,
    siderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({ type: 'app/switchMenuPopver' });
    },
    logout() {
      dispatch({ type: 'app/logout' });
    },
    switchSider() {
      dispatch({ type: 'app/switchSider' });
    },
    changeOpenKeys(openKeys) {
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: { navOpenKeys: openKeys },
      });
    },
    //切换账套窗口是否显示
    switchBusinessUnit() {
      dispatch({ type: 'app/switchUnitModalState', payload: {} });
    },
    //确认选择账套事件
    confirmBusinessUnit(unitId: Number) {
      // setBusinessUnitCookie(unitId);
      // window.location.href = location.pathname;
      dispatch(routerRedux.push('/productplan'));
    },
    //跳转到修改密码页面
    changePassword() {
      // console.log('changePassword');
      // location.href = "/changePassword";
      dispatch(routerRedux.push('/changePassword'));
      // dispatch({ type: 'app/redirectChangePassword', payload: {  } });
    },
  };

  const siderProps = {
    menu,
    location,
    siderFold,
    darkTheme,
    navOpenKeys,
    changeTheme() {
      dispatch({ type: 'app/switchTheme' });
    },
    changeOpenKeys(openKeys) {
      window.localStorage.setItem(
        `navOpenKeys`,
        JSON.stringify(openKeys),
      );
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: { navOpenKeys: openKeys },
      });
    },
  };

  const breadProps = {
    menu,
    location,
    pageTitle,
    pageSuperstratum,
  };

  // if (openPages && openPages.includes(pathname)) {
  //   return (
  //     <div>
  //       <Loader fullScreen spinning={loading.effects['app/query']} />
  //       {children}
  //     </div>
  //   );
  // }
  return (
    <IntlProvider locale="zh-Hans">
      <ConfigProvider>
        <div>
          <Loader fullScreen spinning={loading.effects['app/query']} />
          <Helmet>
            <title>前端监控平台</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="shortcut icon" href={icon} type="image/x-icon" />
            {iconFontJS && <script src={iconFontJS} />}
            {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
          </Helmet>
          <div
            className={classnames(
              styles.layout,
              { [styles.fold]: isNavbar ? false : siderFold },
              { [styles.withnavbar]: isNavbar },
            )}
          >
            {!isNavbar ? (
              <aside
                className={classnames(styles.sider, {
                  [styles.light]: !darkTheme,
                })}
              >
                {siderProps.menu.length === 0 ? null : (
                  <Sider {...siderProps} />
                )}
              </aside>
            ) : (
              ''
            )}
            <div className={styles.main} id="main">
              <Header {...headerProps} />
              <Bread {...breadProps} />
              <div className={styles.container}>
                <div className={styles.content}>
                  {!loading.effects['app/query'] && children}{' '}
                  {/* {hasPermission ? children : <Error />} */}
                </div>
              </div>
              {/* <Footer /> */}
              {switchBusinessUnitVisible && (
                <SwitchBusinessUnit
                  unitList={unit}
                  onCancel={headerProps.switchBusinessUnit}
                  onOk={headerProps.confirmBusinessUnit}
                />
              )}
            </div>
          </div>
        </div>
      </ConfigProvider>
    </IntlProvider>
  );
};

export default withRouter(
  connect(({ app, loading }) => ({ app, loading }))(App),
);
