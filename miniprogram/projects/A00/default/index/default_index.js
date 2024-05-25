let behavior = require('../../../../behavior/default_index_bh.js');
let PassortBiz = require('../../../../biz/passport_biz.js');
let skin = require('../../skin/skin.js');

Page({
	behaviors: [behavior],
	onReady: function () {
		PassortBiz.initPage({
			skin, //传给wxml的数据
			that: this,
			isLoadSkin: true,
			tabIndex: -1,
			isModifyNavColor: true
		});
	},
})