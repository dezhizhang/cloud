import { connect } from 'dva';
import React, { Component } from 'react';
import yay from '@/assets/yay.jpg';

interface IIndexProps {
  global;
}
@connect(global => global)
export default class Index extends Component<IIndexProps> {
  static defaultProps: IIndexProps = {};

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Yay! Welcome to umi-electron-typescript!</h1>
        {this.props.global.name}
        <img src={yay} alt="ya" />
      </div>
    );
  }
}
