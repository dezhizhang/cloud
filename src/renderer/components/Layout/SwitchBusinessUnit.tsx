import React from 'react';
import {Modal, Radio,} from 'antd';
import styles from './SwitchBusinessUnit.less';
import {Button} from 'core';
// import { getBusinessUnitCookie } from "utils";

const RadioGroup = Radio.Group;

class SwitchBusinessUnit extends React.Component<{
  unitList: any[];
  onOk: (value: any) => void;
  onCancel: () => void;
}, {
  value?: any;
  visible: boolean;
  unitList: any[]
}> {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      // value: getBusinessUnitCookie(),
      unitList: this.props.unitList,
    };

  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });

    if (this.state.value != null) {
      if (this.props.onOk != null) {
        this.props.onOk(this.state.value);
      }
    }
  };

  handleCancel = (e) => {
    if (this.props.onCancel != null) {
      this.props.onCancel();
    }
    this.setState({
      visible: false,
    });
  };


  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };


  render() {

    let radioGroup = this.state.unitList.map((unit, i) => {
      return (<Radio className={styles.radioStyle} key={unit.id} value={unit.id}>{unit.name}</Radio>);
    });

    return (<Modal
        title="切换账套"
        width={300}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[]}
      >
        <div align="center">
          <p>请选择账套</p>
          <RadioGroup onChange={this.onChange} value={this.state.value}>
            {radioGroup}
          </RadioGroup>
          <p><Button type="primary" style={{width: 100, marginTop: 30}} onClick={this.handleOk}>确认</Button></p>
        </div>
      </Modal>
    )

  }

}


export default SwitchBusinessUnit;
