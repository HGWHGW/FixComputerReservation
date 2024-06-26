module.exports = {
	PID: 'A00', //4S店

	NAV_COLOR: '#ffffff',
	NAV_BG: '#1F2964',

	MEET_NAME: '预约', 
 
	MENU_ITEM: ['首页', '预约日历', '我的'], // 第1,4,5菜单

	NEWS_CATE: '1=A1-208动态|rightpic,2=预约须知|leftpic',
	MEET_TYPE: '1=换硅脂预约|leftbig2,2=加装硬盘预约|leftbig3,3=还没想好|leftbig2,4=笔记本清灰|leftbig3',

	DEFAULT_FORMS: [{
			type: 'line',
			title: '姓名',
			desc: '请填写您的姓名',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		},
		{
			type: 'line',
			title: '手机',
			desc: '请填写您的手机号码',
			must: true,
			len: 50,
			onlySet: {
				mode: 'all',
				cnt: -1
			},
			selectOptions: ['', ''],
			mobileTruth: true,
			checkBoxLimit: 2,
		}
	]
}