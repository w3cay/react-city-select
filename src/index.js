import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CitySelect from './component/CitySelect/CitySelect';
import { data } from './data';

ReactDOM.render((
    <CitySelect data={data}></CitySelect>
), document.getElementById('root'));