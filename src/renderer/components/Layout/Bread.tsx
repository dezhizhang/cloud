import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { queryArray } from 'utils';
import styles from './Bread.less';

const Bread = ({ menu, location, pageTitle, pageSuperstratum }) => {
  // 匹配当前路由
  let pathArray = [];
  let current;
  for (let index in menu) {
    if (
      menu[index].route &&
      pathToRegexp(menu[index].route).exec(location.pathname)
    ) {
      current = menu[index];
      break;
    }
  }

  const getPathArray = item => {
    if (item.name) {
      // 如果没有定义名称的，也就是运行时由数据决定，则不加入面包屑
      pathArray.unshift(item);
    }
    if (item.bpid) {
      getPathArray(queryArray(menu, item.bpid, 'id'));
    }
  };

  let paramMap = {};
  if (!current) {
    return <span></span>;
  } else {
    getPathArray(current);

    let keys = [];
    let values = pathToRegexp(current.route, keys).exec(
      location.pathname.replace('#', ''),
    );

    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return;
        }
        paramMap[currentValue.name] = values[index + 1];
      });
    }
  }

  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>
        {/* {item.icon
        ? <Icon type={item.icon} style={{ marginRight: 4 }} />
        : ''} */}
        {item.name}
      </span>
    );
    return (
      <Breadcrumb.Item key={key}>
        {pageTitle || pathArray.length - 1 !== key ? (
          <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>
            {content}
          </Link>
        ) : (
          content
        )}
      </Breadcrumb.Item>
    );
  });
  return (
    <div className={styles.bread}>
      <h3 className={styles.title}>
        {pathArray && !pageTitle
          ? pathArray[pathArray.length - 1].name
          : undefined}
        {pageTitle ? `${pageTitle}` : undefined}
      </h3>
      <Breadcrumb separator="/">
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        {breads}
        {pageSuperstratum ? (
          <Breadcrumb.Item>{`${pageSuperstratum}`}</Breadcrumb.Item>
        ) : (
          undefined
        )}
        {pageTitle ? <Breadcrumb.Item>{pageTitle}</Breadcrumb.Item> : undefined}
      </Breadcrumb>
    </div>
  );
};

Bread.propTypes = {
  menu: PropTypes.array,
  location: PropTypes.object,
  suffix: PropTypes.string,
};

export default Bread;
