import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { cars } from './resources/data/cars';
import App from './App';
import 'tachyons';

ReactDOM.render(<App cars={cars}/>, document.getElementById('root'));
