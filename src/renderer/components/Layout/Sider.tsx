import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'hmcore';
import {config} from 'utils';
import styles from './Layout.less';
import Menus from './Menu';

const Sider = ({siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu}) => {
  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
  };
  return (
    <div>
      <div className={styles.logo}>
        {siderFold ? <Image alt={'logo'} src={config.logoSmall}/> : <Image alt={'logo'} src={config.logoBig}/>}
        {/* {siderFold ? '' : <span>{config.name}</span>} */}
      </div>
      <Menus {...menusProps} />
      {/* {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />Switch Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div> : ''} */}
    </div>
  );
};

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  location: PropTypes.object,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
};

export default Sider;
