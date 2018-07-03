import React from "react";
import locationIconImg from "./img/location_icon@2x.png";
import { env } from "./env";

import './CitySelect.scss';

export default class CitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotCitys: '',
      indexCitys: '',
      localCity: '北京市',
      scrollTop: 0,
      onScrollIndex: '',
      sceenHeight: 0,
      citysHeight: 0,
      onselectText: '',
      selectArray: [],
      isShowSelectText: false,
    };
    // 列表 section DOM
    this.scrollListDom = [];
    this.noniusEleHeight = 0;
    this.scrollStartTop = 0;
  }

  componentDidMount() {

    let state = this.props.data;
    this.setState({
      localCity: window.locationCity || this.state.localCity
    })
    if (state) {
      this.setState(state, () => {
        this.scrollListDom = document.querySelectorAll('.section > .title');
        this.scrollStartTop = document.getElementById('nonius').getClientRects()[0].top;
        this.noniusEleHeight = document.querySelector('.city-item').clientHeight;
        
        // 单独声明 move 事件，解决页面滚动问题
        document.getElementById('nonius').addEventListener("touchmove", (e) => {
          this.sidebarTouchMove(e)
        }, {
            passive: false // react 绑定事件默认为 true
          })
      });
    } else {

    }
  }

  parseCitys(citys) {
    const indexArr = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
    const hotCitys = citys.filter(c => {
      if (c.name_en == 'hot') {
        return c;
      }
    })

    const indexCitys = {};

    indexArr.forEach((head, index) => {
      indexCitys[head] = citys.filter(c => {
        if (c.name_en.substr(0, 1) == head.toLowerCase()) {
          return c;
        }
      })
    });

    this.setState({
      indexCitys: indexCitys,
      hotCitys: hotCitys,
      selectArray: ['定位', '热门'].concat(Object.keys(indexCitys)),
    }, () => {
      env.setCache('citys', JSON.stringify({
        indexCitys: indexCitys,
        hotCitys: hotCitys,
        selectArray: ['定位', '热门'].concat(Object.keys(indexCitys)),
      }))
      this.scrollListDom = document.querySelectorAll('.section > .title');
      this.scrollStartTop = document.getElementById('nonius').getClientRects()[0].top;
      this.noniusEleHeight = document.querySelector('.city-item').clientHeight;

    })

  }

  handleCity(e) {
    this.props.history.push(`/?city=${e.currentTarget.dataset.city}`);
  }

  sidebarTouchStart(e) {

    this.setState({
      onScrollIndex: e.target.dataset.index,
      isShowSelectText: true,
      onselectText: this.state.selectArray[e.target.dataset.index],
    })
  }

  sidebarTouchMove(e) {
    e.preventDefault();
    this.scrollEleTop = e.touches[0].clientY;
    const scrollIndex = parseInt((this.scrollEleTop - this.scrollStartTop) / this.noniusEleHeight);

    if (scrollIndex >= 0 && scrollIndex < this.scrollListDom.length) {
      this.setState({
        onScrollIndex: scrollIndex,
        isShowSelectText: true,
        onselectText: this.state.selectArray[scrollIndex],
      })
    }
  }

  sidebarTouchEnd(e) {
    this.setState({
      onScrollIndex: e.target.dataset.index,
      isShowSelectText: false,
    })
    if (e.target.dataset.index) {
      const target = this.scrollListDom[this.state.onScrollIndex];
      window.scrollTo(0, target.offsetTop);
    }
  }


  render() {
    if (!this.state.indexCitys) return false;
    return (
      <div className="citys-container">
        <div className="nonius"
          id="nonius"
          onTouchStart={this.sidebarTouchStart.bind(this)}
          onTouchEnd={this.sidebarTouchEnd.bind(this)}
        >
          <div className="city-item" data-index="0" data-name="定位">
            <img className="icon-local"
              data-key="local"
              src={locationIconImg}></img>
          </div>

          <div className="city-item" data-key="hot" data-index="1" data-name={"热门"}>热门</div>
          {Object.keys(this.state.indexCitys).map((sec, secIndex) =>
            <div className="city-item" data-index={secIndex + 2} data-name={sec} data-key={sec} key={secIndex}>{sec}</div>
          )}

        </div>
        {this.state.isShowSelectText ? <div className="on-select">{this.state.onselectText}</div> : null}
        <div className="container citys-list">
          <div className="section"
            id="local">
            <div className="title">当前定位城市</div>
            <div className="box line">
              <div onClick={this.handleCity.bind(this)}
                data-city="">{this.state.localCity}</div>
            </div>
          </div>
          <div className="section"
            id="hot">
            <div className="title">热门城市</div>
            <div className="box grid">
              {this.state.hotCitys.map((hot, hotIndex) =>
                <div onClick={this.handleCity.bind(this)}
                  data-city={hot.name} key={hotIndex}>{hot.name}</div>)}
            </div>
          </div>

          {Object.keys(this.state.indexCitys).map((sec, secIndex) =>
            <div className="section"
              id={secIndex} key={secIndex}>
              <div className="title">{sec}</div>
              <div className="box line">
                {this.state.indexCitys[sec].map((item, itemIndex) => <div
                  onClick={this.handleCity.bind(this)}
                  data-city={item.name}
                  key={itemIndex}>{item.name}</div>)}
              </div>
            </div>
          )}

        </div>
      </div>
    )
  }
}