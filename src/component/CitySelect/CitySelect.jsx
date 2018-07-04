import React from "react";
// 引入定位图标
import locationIconImg from "./img/location_icon@2x.png";
// 引入组件样式
import './CitySelect.scss';

export default class CitySelect extends React.Component {
  constructor(props) {
    super(props);

    // 根据数据项 键值 或 label属性 提取标识
    const noniusKeys = Object.keys(this.props.data).map((secKey, secIndex) => {
      return this.props.data[secKey].label || secKey;
    })

    this.state = {
      onSelectText: '',  // 当前滑动位置标识文案
      isShowSelectText: false,  // 是否展示文案
      noniusKeys: noniusKeys || [], 
    };
    // 当前滑动字母位置    
    this.onScrollIndex = 0; 
    // 列表元素 DOM
    this.listTitleDom = [];
    // 检索区域总高度
    this.noniusEleHeight = 0;
    // 检索区域具体顶部高度
    this.noniusEleTop = 0;
  }

  componentDidMount() {
    if (this.props.data) {
      const noniusEle = document.querySelector('#cl-search-container  #nonius');
      const noniusEleChild = document.querySelector('#cl-search-container  #nonius > .keys-item');
      this.listTitleDom = document.querySelectorAll('#cl-search-container .section > .title');

      this.noniusEleTop = noniusEle.getClientRects()[0].top;
      this.noniusEleHeight = noniusEleChild.clientHeight;

      // 单独声明 touchmove 事件，解决页面滚动问题
      document.querySelector('#cl-search-container  #nonius').addEventListener("touchmove", (e) => {
        this.sidebarTouchMove(e)
      }, {
          passive: false // react 绑定事件默认为 true
        })
    }
  }

  // 开始滑动字母检索区域
  sidebarTouchStart(e) {
    this.scrollEleTop = e.touches[0].clientY;
    this.onScrollIndex = parseInt((this.scrollEleTop - this.noniusEleTop) / this.noniusEleHeight);
    this.setState({
      isShowSelectText: true,
      onSelectText: this.state.noniusKeys[this.onScrollIndex],
    })
  }

  // 正在滑动字母检索区域
  sidebarTouchMove(e) {
    e.preventDefault();
    this.scrollEleTop = e.touches[0].clientY;
    this.onScrollIndex = parseInt((this.scrollEleTop - this.noniusEleTop) / this.noniusEleHeight);

    if (this.onScrollIndex >= 0 && this.onScrollIndex < this.listTitleDom.length) {
      this.setState({
        isShowSelectText: true,
        onSelectText: this.state.noniusKeys[this.onScrollIndex],
      })
    }
  }

  // 滑动字母检索区域结束，处理列表跳转
  sidebarTouchEnd(e) {
    this.setState({
      isShowSelectText: false,
    })

    const target = this.listTitleDom[this.onScrollIndex];
    window.scrollTo(0, target.offsetTop);
  }


  render() {
    if (!this.props.data) return false;
    return (
      <div id="cl-search-container">
        {/* 检索游标 */}
        <div className="nonius"
          id="nonius"
          onTouchStart={this.sidebarTouchStart.bind(this)}
          onTouchEnd={this.sidebarTouchEnd.bind(this)}
        >
          {/* 检索游标键值列表 */}
          {this.state.noniusKeys.map((secKey, secIndex) =>
            <div className="keys-item" key={secIndex}>{secKey}</div>
          )}
        </div>

        {/* 滑动选中标识 */}
        {this.state.isShowSelectText ? <div className="on-select">
          {this.state.onSelectText}
        </div> : null}

        {/* 数据列表 */}
        <div className="container citys-list">
          {Object.keys(this.props.data).map((sec, secIndex) =>
            <div className="section"
              id={secIndex} key={secIndex}>
              <div className="title">{sec}</div>
              <div className={'box ' + (this.props.data[sec].style || 'line')}>
                {this.props.data[sec].data.map((item, itemIndex) => <div
                  onClick={this.props.onSelectItem.bind(this, item)}
                  key={itemIndex}>{item.name}</div>)}
              </div>
            </div>
          )}

        </div>
      </div>
    )
  }
}