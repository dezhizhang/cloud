import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Icon, Menu, Popover} from 'antd';
import classnames from 'classnames';
import styles from './Header.less';
import Menus from './Menu';

const SubMenu = Menu.SubMenu;

const Header = ({employeeInfo, logout, changePassword, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, changeOpenKeys, menu}) => {
  let handleClickMenu = (e) => {
    e.key === 'logout' && logout();
    if (e.key === 'changePassword') changePassword();
  };

  const menusProps = {
    menu,
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    changeOpenKeys,
  };
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible}
                   overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars"/>
          </div>
        </Popover>
        : <div
          className={styles.button}
          onClick={switchSider}
        >
          <Icon type={classnames({'menu-unfold': siderFold, 'menu-fold': !siderFold})}/>
        </div>}
      <div className={styles.rightWarpper}>
        <div className={styles.unitName}>
          {/* <Icon type="mail" /> */}
          {employeeInfo.businessUnitName}
        </div>
        <Menu mode="horizontal" onClick={handleClickMenu}>
          <SubMenu
            style={{
              float: 'right',
            }}
            title={<span>
               <Avatar size="small" className={styles.avatar} icon="user"/>
              {employeeInfo.realName}
            </span>}
          >
            <Menu.Item key="changePassword">
              修改密码
            </Menu.Item>
            <Menu.Item key="logout">
              注销
            </Menu.Item>

          </SubMenu>
        </Menu>
      </div>
    </div>
  );
};

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
};

export default Header;
