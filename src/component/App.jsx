import React from "react";
import { data } from '../data';
// 引入 CitySelect 组件
import CitySelect from './CitySelect';

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citysData: data.indexCitys, // 结构化城市列表数据
    };
  }

  // 选中城市回调
  handleSelectCity(cityData) {
    console.log('选中数据项:', cityData);
  }

  render() {
    return (
      <CitySelect
        data={this.state.citysData}
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect>
    )
  }

}