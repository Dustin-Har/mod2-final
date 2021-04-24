
import './css/base.scss';
import './images/turing-logo.png'

import { getAllApi } from './apiData/getData';

getAllApi()
  .then(data => console.log(data));

console.log('This is the JavaScript entry file - your code begins here.');
