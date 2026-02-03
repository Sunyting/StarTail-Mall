var express = require('express');
var router = express.Router();

router.get('/api/index_list/recommend', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			swiperData: {
				List: [{
						id: 0,
						imgUrl: '/static/banner/1.png'
					},
					{
						id: 1,
						imgUrl: '/static/banner/2.png'
					},
					{
						id: 2,
						imgUrl: '/static/banner/3.png'
					},
					{
						id: 3,
						imgUrl: '/static/banner/4.png'
					},
					{
						id: 4,
						imgUrl: '/static/banner/5.png'
					},
				]
			},
			noticeData: {
				List: [{
						id: 0,
						title: '白川柏川限定画集首发，收藏级印刷工艺，限量发售中！'
					},
					{
						id: 1,
						title: '周可可联名新品上市，治愈系设计，温暖你的每一天。'
					},
					{
						id: 2,
						title: '周生生珠宝新品来袭，精致工艺闪耀登场，快来选购！'
					},
					{
						id: 3,
						title: '鸣潮新版本周边预售开启，角色立牌、徽章等超多好物！'
					}
				]
			},
			recommendData: {
				bigImgUrl: '/static/index/recommend/1/big.png',
				List: [{
						id: 0,
						imgUrl: '/static/index/recommend/1/1.png',
						name: '拂晓长誓系列戒指',
						price: '169'
					},
					{
						id: 1,
						imgUrl: '/static/index/recommend/1/2.png',
						name: '拂晓长誓系列花瓣流沙',
						price: '69'
					},
					{
						id: 2,
						imgUrl: '/static/index/recommend/1/3.png',
						name: '露西亚拂晓长誓系列立牌',
						price: '409'
					},
					{
						id: 3,
						imgUrl: '/static/index/recommend/1/4.png',
						name: '场景立绘立牌 共鸣者主题',
						price: '609'
					}
				]
			},
			maybeLikeList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			],
			gameList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			],
			artList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			],
			jokeList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	});
});
router.get('/api/index_list/animation', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/game', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/Art', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/pet', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/jewelry', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/joke', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/music', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/首饰珠宝.png',
			iconList: [{
					id: 0,
					title: '黄金',
					imgUrl: '/static/index/icon/首饰珠宝/1.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/2.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/3.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/4.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/5.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/6.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/7.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
					name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
					nprice: '611',
					oprice: '655',
					discount: '9.6'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
					name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
					nprice: '198',
					oprice: '218',
					discount: '9.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
					name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
					nprice: '409',
					oprice: '800',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/1/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/1/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/1/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/1/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
module.exports = router;