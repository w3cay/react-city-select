import React from "react";
import data from './data.json';
// 引入 CitySelect 组件
import CitySelect from '../lib/index';
import iconSrc from './location_icon@2x.png';

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citysData: data.indexCitys, // 结构化城市列表数据
      config: {
        pos: {
          icon: iconSrc,
          title: '定位城市',
        },
        hot: {
          title: '热门城市',
          key: '热门',
          style: 'grid',
        }
      }
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
        config={this.state.config}
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect>
    )
  }

}