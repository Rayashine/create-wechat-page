'use strict'

let path = require('path')

function writeHtml (dirPath, dirName, fs) {
  let str = `\
<view class="container">

</view>
`
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.html'), str, catchErr)
}

function writeJs (dirPath, dirName, fs) {
  let str = `\
// pages/${dirName}/${dirName}.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
`
  
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.js'), str, catchErr)
}

function writeScss (dirPath, dirName, fs) {
    let str = `\
.container {

}
`
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.scss'), str, catchErr)
}

function writeJson (dirPath, dirName, fs) {
    let str = `\
{}
`
  str = new Buffer(str)
  fs.writeFile(path.join(dirName, dirName + '.json'), str, catchErr)
}

function catchErr (err) {
  if (err) {
    throw err
  }
}

module.exports = {
  writeHtml: writeHtml,
  writeJs: writeJs,
  writeScss: writeScss,
  writeJson: writeJson
}