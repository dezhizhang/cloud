import { connect } from 'dva';
import React, { Component } from 'react';
import { Button } from 'antd';

export default class Index extends Component<any,any> {
  

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Button type="primary">按钮</Button>
      </div>
    );
  }
}
