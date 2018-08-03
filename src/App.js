import React from "react";

// 引入 CitySelect 组件
import CitySelect from '../lib/index';

export default class APP extends React.Component {

  constructor() {
    super();
    this.state = {
      // config: {}
    }
  }

  // 选中城市回调
  handleSelectCity(cityData) {
    console.log('选中数据项:', cityData);
  }

  render() {
    return (
      // 注册组件
      <CitySelect
        config={this.state.config}
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect>
    )
  }

}