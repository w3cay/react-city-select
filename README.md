# react-city-select
基于 React 的可配置化城市选择组件

示例： https://chelun-h5.github.io/react-city-select/example/

使用：

```javascript
...
// 引入 CitySelect 组件
import CitySelect from 'react-city-select';

// 引入数据
import data from './data.json';

// 引入图标路径
import iconSrc from './location_icon@2x.png';

export default class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 结构化城市列表数据
      citysData: data.indexCitys, 
      // 对某项数据定制化配置
      config: {
        pos: {
          icon: iconSrc, // 游标图标
          title: '定位城市',
        },
        hot: {
          title: '热门城市',
          key: '热门',
          style: 'grid', // 展示形式（ line || grid）
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
```