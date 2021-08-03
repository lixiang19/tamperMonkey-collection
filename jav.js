// ==UserScript==
// @name         javdb
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @grant        GM_addStyle
// @author       You
// @match        https://javdb.com/*
// @match        https://javdb4.com/*
// ==/UserScript==

(function () {
  'use strict';
  GM_addStyle(`
  .video-container .columns .column .box .item-image img {
      transition: 0s
  }
  .video-container .columns .column .box .item-image:hover img {
      transform: scale(2.5);
      position: fixed;
      z-index: 1000;
      left: 400px;
      top: 200px;
  }
  .columns {
      flex-wrap:wrap
  }
  .column-video-cover {
      height: 500px;
      width:100%;
  }
  #preview-video {
      height:400px
  }
` );

  const gridItemList = document.querySelectorAll('.grid-item')

  gridItemList.forEach(gridItem => {

    gridItem.style.width = '380px'
    gridItem.style.maxWidth = '380px'
    // gridItem.style.position = 'relative'
    // gridItem.style.left = '0'
    // gridItem.style.top = '0'
    const img = gridItem.querySelector('img')
    const src = img.dataset.src

    const coverSrc = src.replace('thumbs', 'covers')
    img.dataset.src = coverSrc

    // setTimeout(()=>{
    //     img.src = coverSrc
    // },1000)
  })
  const preview = document.querySelector('.preview-video-container')
  if (preview) {
    setTimeout(() => {
      window.scrollTo(0, 200)
    }, 1000)
    const previewVideo = document.querySelector('#preview-video')
    const source = previewVideo.querySelector('source')
    const columnVideoCover = document.querySelector('.column-video-cover')
    console.log("🚀 ~ file: javdb.js ~ line 50 ~ columnVideoCover", columnVideoCover)
    const videoHtml = `
      <video id="preview-video" playsinline="" height='400' controls=""  preload="auto" style="display: inline-block;" data-fullscreen-container="true"  draggable="true">
          <source src="${source.src}" type="video/mp4">
      </video>
      `
    columnVideoCover.innerHTML = videoHtml
  }
  // Your code here...
})();