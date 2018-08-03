'use strict';

var fs = require('fs');
var path = require('path');
var _require = require('./writeFile.js'),
    writeHtml = _require.writeHtml,
    writeJs = _require.writeJs,
    writeScss = _require.writeScss,
    writeJson = _require.writeJson;

module.exports = function createWechatPage(dirNames) {
    switch (dirNames.length) {
        case 0:
            throw Error('请输入组件名称');
        case 1:
            createOne(dirNames[0]);
            break;
        default:
            createMulti(dirNames);
            break;
    }
};

function createOne(dirName) {
    var dirPath = path.join(dirName);
    createFiles(dirPath, dirName);
}

function createMulti(dirNames) {
    dirNames.forEach(function (ele) {
        var dirPath = path.join(ele);
        createFiles(dirPath, ele);
    });
}

function createFiles(dirPath, dirName) {
    fs.mkdirSync(dirPath);
    writeHtml(dirPath, dirName, fs);
    writeJs(dirPath, dirName, fs);
    writeScss(dirPath, dirName, fs);
    writeJson(dirPath, dirName, fs);
}