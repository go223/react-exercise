import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'normalize.css';

// 获取图片相关的数据
import imageD from './data/imageDatas.json';

// 利用自执行函数，将图片信息转换成图片URL路径信息
let imageDatas = (function genImageURL (imageDatasArr) {
  for (let i = 0, len = imageDatasArr.length; i < len; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('./images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageD);
console.log(imageDatas)
class App extends Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">1</section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

export default App;
