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
        // 传入数据
        data={this.state.citysData}
        // 传入配置
        config={this.state.config}
        // 传入回调
        onSelectItem={this.handleSelectCity.bind(this)}>
      </CitySelect>
    )
  }
}
```
### props 参数 

属性 | 值 | 说明
---|---|---
data | 必填；对象；| 城市组件数据JSON对象
config | 可选；对象；| 配置或覆盖某个 key 下的值，详情见下表
onSelectItem | 必填；函数；| 点击单元格数据回调

### config 参数



属性 | 值 | 说明
---|---|---
config['sec-key']['title'] | 可选；字符串；| 索引标题
config['sec-key']['key'] | 可选；字符串；| 游标标题
config['sec-key']['icon'] | 可选；字符串；| 游标图标（替代标题）
config['sec-key']['style'] | 可选；字符串；(line或grid) | 数据项展示方式

sec-key : 对象key


### data 数据格式

```JSON
   
// 定位数据项
"pos": [{
  "id": "110100",
  "name": "北京"
}],
// 热门数据项
"hot": [{
    "id": "110100",
    "name": "北京"
  },
  {
    "id": "120100",
    "name": "天津"
  },
  {
    "id": "130100",
    "name": "石家庄"
  }
],
// 字母数据项
"A": [{
    "id": "152900",
    "name": "阿拉善盟"
  },
  {
    "id": "210300",
    "name": "鞍山"
  }
],
"B": [{
    "id": "110100",
    "name": "北京"
  },
  {
    "id": "130600",
    "name": "保定"
  }
]
...
```



