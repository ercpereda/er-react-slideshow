import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './Slideshow';

const data = [
  {
    img: 'img.png',
    caption: 'Image 1'
  },
  {
    img: 'img1.png',
    caption: 'Image 2'
  }
];

ReactDOM.render(<Slideshow data={data} />, document.getElementById('app'));
