import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './Slideshow';

const data = [
  {
    img: 'https://www.bing.com/az/hprichbg/rb/Castelmezzano_EN-US11750585825_1920x1080.jpg',
    caption: 'Castelmezzano, Italy'
  },
  {
    img: 'https://www.bing.com/az/hprichbg/rb/LadakhIndia_EN-US10128021714_1920x1080.jpg',
    caption: 'Ladakh, India'
  }
];

ReactDOM.render(<Slideshow data={data} />, document.getElementById('app'));
