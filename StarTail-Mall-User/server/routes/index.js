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
			bannerImgUrl: '/static/index/banner/次元穿梭.png',
			iconList: [{
					id: 0,
					title: '手办',
					imgUrl: '/static/index/icon/次元穿梭/手办.png'
				},
				{
					id: 1,
					title: '漫画',
					imgUrl: '/static/index/icon/次元穿梭/漫画.png'
				},
				{
					id: 2,
					title: 'cos妆',
					imgUrl: '/static/index/icon/次元穿梭/cos妆.png'
				},
				{
					id: 3,
					title: '挂画',
					imgUrl: '/static/index/icon/次元穿梭/挂画.png'
				},
				{
					id: 4,
					title: '徽章',
					imgUrl: '/static/index/icon/次元穿梭/徽章.png'
				},
				{
					id: 5,
					title: '立牌',
					imgUrl: '/static/index/icon/次元穿梭/立牌.png'
				},
				{
					id: 6,
					title: '定制',
					imgUrl: '/static/index/icon/次元穿梭/定制.png'
				},
				{
					id: 7,
					title: '贴纸',
					imgUrl: '/static/index/icon/次元穿梭/贴纸.png'
				}
			],
			hotList: [{
					id: 0,
					imgUrl: '/static/index/hot/次元穿梭/hot1.png',
					name: '艾漫正版明日方舟周边吧唧挂件收藏卡逻各斯魔王时遇回响系列官谷',
					nprice: '14.8',
					oprice: '18',
					discount: '8.6'
				},
				{
					id: 1,
					imgUrl: '/static/index/hot/次元穿梭/hot2.png',
					name: '【GSC现货】1/8标准比例 宫园薰 四月是你的谎言 手办模玩',
					nprice: '539',
					oprice: '1029',
					discount: '5.1'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/次元穿梭/hot3.png',
					name: '第二弹动漫周边死亡笔记徽章盲盒套装75mm吧唧周边典藏胸针谷子',
					nprice: '12',
					oprice: '24',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/次元穿梭/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/次元穿梭/1.png',
						name: '初音未来艺术构想著作家系列镭射票miku收藏纪念票二次元动漫周边',
						nprice: '13.5',
						oprice: '15',
						discount: '9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/次元穿梭/2.png',
						name: 'moeyu初音未来未来韵律风衣外套秋冬连帽夹克miku二次元动漫周边',
						nprice: '236',
						oprice: '269',
						discount: '8.8'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/次元穿梭/3.png',
						name: '初音未来骑士幻想系列亚克力立牌miku二次元动漫周边桌面摆件装饰',
						nprice: '31.3',
						oprice: '39',
						discount: '8.8'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/次元穿梭/4.png',
						name: '初音未来39镜遇春的协奏曲系列抱枕靠枕睡觉靠垫miku二次元周边',
						nprice: '41.1',
						oprice: '49',
						discount: '8.8'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/次元穿梭/5.png',
						name: 'moeyu初音未来电竞之心系列机械键盘机械师68键定制轴无线键盘',
						nprice: '887',
						oprice: '1009',
						discount: '8.8'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/次元穿梭/6.png',
						name: '初音未来艺术构想著作家系列立绘徽章杯垫挂件透卡miku周边谷子',
						nprice: '13.2',
						oprice: '15',
						discount: '8.8'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/icon/次元穿梭/手办.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/icon/次元穿梭/手办.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/index/icon/次元穿梭/手办.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/index/icon/次元穿梭/手办.png',
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
			bannerImgUrl: '/static/index/banner/游戏周边.png',
			iconList: [{
					id: 0,
					title: '手办',
					imgUrl: '/static/index/icon/游戏周边/手办.png'
				},
				{
					id: 1,
					title: '账号',
					imgUrl: '/static/index/icon/游戏周边/账号.png'
				},
				{
					id: 2,
					title: 'cos相关',
					imgUrl: '/static/index/icon/游戏周边/cos相关.png'
				},
				{
					id: 3,
					title: '道具',
					imgUrl: '/static/index/icon/游戏周边/道具.png'
				},
				{
					id: 4,
					title: '整活',
					imgUrl: '/static/index/icon/游戏周边/整活.png'
				},
				{
					id: 5,
					title: '原画',
					imgUrl: '/static/index/icon/游戏周边/原画.png'
				},
				{
					id: 6,
					title: '徽章',
					imgUrl: '/static/index/icon/游戏周边/徽章.png'
				},
				{
					id: 7,
					title: '挂件',
					imgUrl: '/static/index/icon/游戏周边/挂件.png'
				}
			],
			hotList: [{
					id: 0,
					imgUrl: '/static/index/hot/游戏周边/hot1.png',
					name: '【定金】明日方舟 1/7手办 阿米娅 时序花圃VER. 官方正版',
					nprice: '200',
					oprice: '405',
					discount: '4.9'
				},
				{
					id: 1,
					imgUrl: '/static/index/hot/游戏周边/hot2.png',
					name: '【联名商品】重返未来：1999 CUTER毛绒玩偶',
					nprice: '79',
					oprice: '152',
					discount: '5.1'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/游戏周边/hot3.png',
					name: '【原神官方】愚人众执行官系列Q版盲盒盒蛋 Genshin',
					nprice: '59',
					oprice: '118',
					discount: '5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/游戏周边/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/游戏周边/1.png',
						name: '【绝区零/定金】Gift+系列 浅羽悠真 1/8手办 游园熠刻Ver.',
						nprice: '40',
						oprice: '400',
						discount: '1.0'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/游戏周边/2.png',
						name: '【绝区零官方】立绘系列 亚克力立牌 反舌鸟',
						nprice: '48',
						oprice: '140',
						discount: '3.2'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/游戏周边/3.png',
						name: '【绝区零官方】影画系列 收藏卡套组 未知阵营',
						nprice: '28',
						oprice: '40',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/游戏周边/4.png',
						name: '【绝区零官方/尾款】GSC POP UP PARADE SP 铃 手办 无定金勿拍',
						nprice: '299',
						oprice: '603',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/游戏周边/5.png',
						name: '【绝区零官方】趴丝系列 邦布毛绒长条抱枕',
						nprice: '148',
						oprice: '680',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/游戏周边/6.png',
						name: '【绝区零官方】嗯呢系列 邦布毛绒挂件 招财布/鲨牙布',
						nprice: '68',
						oprice: '98',
						discount: '7.9'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/shop/游戏周边/1.png',
					name: '【绝区零/定金】Gift+系列 浅羽悠真 1/8手办 游园熠刻Ver.',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/shop/游戏周边/1.png',
					name: '【绝区零/定金】Gift+系列 浅羽悠真 1/8手办 游园熠刻Ver.',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 3,
					imgUrl: '/static/index/shop/游戏周边/1.png',
					name: '【绝区零/定金】Gift+系列 浅羽悠真 1/8手办 游园熠刻Ver.',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				},
				{
					id: 4,
					imgUrl: '/static/index/shop/游戏周边/1.png',
					name: '【绝区零/定金】Gift+系列 浅羽悠真 1/8手办 游园熠刻Ver.',
					nprice: '349',
					oprice: '708',
					discount: '4.9'
				}
			]
		}
	})
})
router.get('/api/index_list/art', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/艺术收藏.png',
			iconList: [{
					id: 0,
					title: '画集',
					imgUrl: '/static/index/icon/艺术收藏/画集.png'
				},
				{
					id: 1,
					title: '雕塑',
					imgUrl: '/static/index/icon/艺术收藏/雕塑.png'
				},
				{
					id: 2,
					title: '书法',
					imgUrl: '/static/index/icon/艺术收藏/书法.png'
				},
				{
					id: 3,
					title: '图书',
					imgUrl: '/static/index/icon/艺术收藏/图书.png'
				},
				{
					id: 4,
					title: '陶瓷',
					imgUrl: '/static/index/icon/艺术收藏/陶瓷.png'
				},
				{
					id: 5,
					title: '工艺',
					imgUrl: '/static/index/icon/艺术收藏/工艺.png'
				},
				{
					id: 6,
					title: '文创',
					imgUrl: '/static/index/icon/艺术收藏/文创.png'
				},
				{
					id: 7,
					title: '文房',
					imgUrl: '/static/index/icon/艺术收藏/文房.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/艺术收藏/hot1.png',
					name: '落星独立插画师白川柏川全新画集优雅奇幻童话冒险',
					nprice: '158',
					oprice: '389',
					discount: '6.3'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/艺术收藏/hot2.png',
					name: '赝神咏叹自由插画师泊云拌面个人画集OC哥特原创华丽寂静氛围',
					nprice: '158',
					oprice: '389',
					discount: '6.5'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/艺术收藏/hot3.png',
					name: '景德镇官方陶瓷水杯马克杯带盖茶漏杯影青办公杯2026新款礼盒装',
					nprice: '359',
					oprice: '721',
					discount: '6.1'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/艺术收藏/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/艺术收藏/1.png',
						name: '故宫淘宝｜故宫日历书画版2026马年台历博物院文创新年本命年礼物',
						nprice: '1580',
						oprice: '2200',
						discount: '7.2'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/艺术收藏/2.png',
						name: '故宫淘宝｜小白驹马克杯文创杯子生日情人节新年马年本命年礼物',
						nprice: '258',
						oprice: '300',
						discount: '8.2'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/艺术收藏/3.png',
						name: '故宫淘宝｜十二花神固体香膏文创新婚新年本命年情人节生日礼物女',
						nprice: '89',
						oprice: '120',
						discount: '7.5'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/艺术收藏/4.png',
						name: '故宫淘宝｜紫气东来紫水晶香薰招财摆件文创新年乔迁开业生日礼物',
						nprice: '399',
						oprice: '562',
						discount: '7.2'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/艺术收藏/5.png',
						name: '故宫淘宝｜天作之合如意猫摆件文创婚礼结婚订婚新婚礼物送新人',
						nprice: '289',
						oprice: '320',
						discount: '8.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/艺术收藏/6.png',
						name: '故宫淘宝｜十二花神中性笔博物馆文创笔中国风礼物高颜值伴手礼',
						nprice: '25.5',
						oprice: '36',
						discount: '7.2'
					}
				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/hot/艺术收藏/hot1.png',
					name: '青铜器复制品 商代鼎形香炉 古朴典雅 居家摆件',
					nprice: '899',
					oprice: '1588',
					discount: '5.7'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/艺术收藏/hot1.png',
					name: '紫砂茶壶 宜兴正品 大师手工制作 茶具精品',
					nprice: '1299',
					oprice: '2580',
					discount: '5.0'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/艺术收藏/hot1.png',
					name: '景泰蓝花瓶 传统工艺 色彩绚丽 家居装饰',
					nprice: '799',
					oprice: '1299',
					discount: '6.2'
				},
				{
					id: 4,
					imgUrl: '/static/index/hot/艺术收藏/hot1.png',
					name: '寿山石印章 名家雕刻 文房四宝 收藏佳品',
					nprice: '1688',
					oprice: '2888',
					discount: '5.8'
				}
			]
		}
	})
})
router.get('/api/index_list/pet', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/宠物用品.png',
			iconList: [{
					id: 0,
					title: '猫咪用品',
					imgUrl: '/static/index/icon/宠物用品/1.png'
				},
				{
					id: 1,
					title: '狗狗用品',
					imgUrl: '/static/index/icon/宠物用品/2.png'
				},
				{
					id: 2,
					title: '宠物食品',
					imgUrl: '/static/index/icon/宠物用品/3.png'
				},
				{
					id: 3,
					title: '宠物玩具',
					imgUrl: '/static/index/icon/宠物用品/4.png'
				},
				{
					id: 4,
					title: '宠物服装',
					imgUrl: '/static/index/icon/宠物用品/5.png'
				},
				{
					id: 5,
					title: '宠物清洁',
					imgUrl: '/static/index/icon/宠物用品/6.png'
				},
				{
					id: 6,
					title: '宠物医疗',
					imgUrl: '/static/index/icon/宠物用品/7.png'
				},
				{
					id: 7,
					title: '宠物窝具',
					imgUrl: '/static/index/icon/宠物用品/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/宠物用品/hot1.png',
					name: '皇家猫粮成猫粮天然粮室内成猫专用猫粮增肥发腮营养猫食',
					nprice: '89',
					oprice: '128',
					discount: '6.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/宠物用品/hot2.png',
					name: 'petio派蒂欧猫咪玩具羽毛逗猫棒宠物互动逗猫神器猫用品',
					nprice: '25',
					oprice: '38',
					discount: '6.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/宠物用品/hot3.png',
					name: '小佩宠物智能饮水机猫咪狗狗自动循环过滤饮水器静音大容量',
					nprice: '199',
					oprice: '299',
					discount: '6.7'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/宠物用品/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/宠物用品/1.png',
						name: '网易严选宠物猫砂盆全封闭式防外溅大号猫厕所除臭易清理',
						nprice: '89',
						oprice: '139',
						discount: '6.4'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/宠物用品/2.png',
						name: '佩蒂宠物洁牙骨狗狗磨牙棒泰迪金毛大中小型犬幼犬成犬零食',
						nprice: '39',
						oprice: '58',
						discount: '6.7'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/宠物用品/3.png',
						name: '朗仕宠物剃毛器电推剪狗狗猫咪理发器充电式专业美容工具',
						nprice: '129',
						oprice: '199',
						discount: '6.5'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/宠物用品/4.png',
						name: '多格漫猫咪项圈铃铛宠物用品猫铃铛颈圈小猫脖圈猫咪装饰',
						nprice: '16',
						oprice: '25',
						discount: '6.4'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/宠物用品/5.png',
						name: 'KOJIMA小岛宠物湿巾杀菌消毒猫咪狗狗清洁护理用品除菌湿纸巾',
						nprice: '29',
						oprice: '45',
						discount: '6.4'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/宠物用品/6.png',
						name: '福来恩宠物体外驱虫滴剂猫咪狗狗除跳蚤蜱虫防虫药品3支装',
						nprice: '168',
						oprice: '258',
						discount: '6.5'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/hot/宠物用品/hot1.png',
					name: '皇家猫粮成猫粮天然粮室内成猫专用猫粮增肥发腮营养猫食',
					nprice: '89',
					oprice: '128',
					discount: '6.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/宠物用品/hot2.png',
					name: 'petio派蒂欧猫咪玩具羽毛逗猫棒宠物互动逗猫神器猫用品',
					nprice: '25',
					oprice: '38',
					discount: '6.6'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/宠物用品/hot3.png',
					name: '小佩宠物智能饮水机猫咪狗狗自动循环过滤饮水器静音大容量',
					nprice: '199',
					oprice: '299',
					discount: '6.7'
				},
				{
					id: 4,
					imgUrl: '/static/index/shop/宠物用品/1.png',
					name: '网易严选宠物猫砂盆全封闭式防外溅大号猫厕所除臭易清理',
					nprice: '89',
					oprice: '139',
					discount: '6.4'
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
					imgUrl: '/static/index/icon/首饰珠宝/黄金.png'
				},
				{
					id: 1,
					title: '吊坠',
					imgUrl: '/static/index/icon/首饰珠宝/吊坠.png'
				},
				{
					id: 2,
					title: '耳饰',
					imgUrl: '/static/index/icon/首饰珠宝/耳饰.png'
				},
				{
					id: 3,
					title: '手链',
					imgUrl: '/static/index/icon/首饰珠宝/手链.png'
				},
				{
					id: 4,
					title: '戒指',
					imgUrl: '/static/index/icon/首饰珠宝/戒指.png'
				},
				{
					id: 5,
					title: '项链',
					imgUrl: '/static/index/icon/首饰珠宝/项链.png'
				},
				{
					id: 6,
					title: '手镯',
					imgUrl: '/static/index/icon/首饰珠宝/手镯.png'
				},
				{
					id: 7,
					title: '转运珠',
					imgUrl: '/static/index/icon/首饰珠宝/转运珠.png'
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
				shopImgUrl: '/static/index/shop/首饰珠宝/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/首饰珠宝/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/首饰珠宝/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/首饰珠宝/3.png',
						name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
						nprice: '25800',
						oprice: '30066',
						discount: '7.9'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/首饰珠宝/1.png',
						name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
						nprice: '3490',
						oprice: '7080',
						discount: '4.9'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/首饰珠宝/2.png',
						name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
						nprice: '9840',
						oprice: '14000',
						discount: '3.5'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/首饰珠宝/3.png',
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
			bannerImgUrl: '/static/index/hot/生活调剂/hot1.png',
			iconList: [{
					id: 0,
					title: '搞笑',
					imgUrl: '/static/index/icon/生活调剂/搞笑.png'
				},
				{
					id: 1,
					title: '整蛊',
					imgUrl: '/static/index/icon/生活调剂/整蛊.png'
				},
				{
					id: 2,
					title: '恶作剧',
					imgUrl: '/static/index/icon/生活调剂/恶作剧.png'
				},
				{
					id: 3,
					title: '玩具',
					imgUrl: '/static/index/icon/生活调剂/玩具.png'
				},
				{
					id: 4,
					title: '礼品',
					imgUrl: '/static/index/icon/生活调剂/礼品.png'
				},
				{
					id: 5,
					title: '聚会',
					imgUrl: '/static/index/icon/生活调剂/聚会.png'
				},
				{
					id: 6,
					title: '减压',
					imgUrl: '/static/index/icon/生活调剂/减压.png'
				},
				{
					id: 7,
					title: '创意',
					imgUrl: '/static/index/icon/生活调剂/创意.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/生活调剂/hot1.png',
					name: '超级搞笑恶作剧道具套装 整蛊神器聚会必备',
					nprice: '39',
					oprice: '79',
					discount: '4.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/生活调剂/hot2.png',
					name: '创意减压发泄玩具 办公室解压神器 搞笑礼品',
					nprice: '29',
					oprice: '58',
					discount: '5.0'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/生活调剂/hot3.png',
					name: '趣味整蛊玩具礼盒装 生日聚会恶作剧道具',
					nprice: '68',
					oprice: '136',
					discount: '5.0'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/生活调剂/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/生活调剂/1.png',
						name: '超真实假蟑螂道具 恶作剧整蛊玩具 聚会搞笑必备',
						nprice: '12',
						oprice: '24',
						discount: '5.0'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/生活调剂/2.png',
						name: '创意搞笑马桶造型杯子 恶搞礼品办公室用品',
						nprice: '35',
						oprice: '70',
						discount: '5.0'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/生活调剂/3.png',
						name: '趣味发条玩具套装 怀旧经典搞笑减压玩具',
						nprice: '45',
						oprice: '90',
						discount: '5.0'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/生活调剂/4.png',
						name: '恶作剧假血浆道具 万圣节搞笑整蛊用品',
						nprice: '18',
						oprice: '36',
						discount: '5.0'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/生活调剂/5.png',
						name: '创意搞笑面具套装 聚会派对变装道具',
						nprice: '55',
						oprice: '110',
						discount: '5.0'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/生活调剂/6.png',
						name: '趣味魔术道具礼盒 搞笑表演整蛊玩具',
						nprice: '88',
						oprice: '176',
						discount: '5.0'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/hot/搞笑用品/hot1.png',
					name: '网红假发套头搞笑发型道具聚会派对整蛊恶搞假发头套cos',
					nprice: '19.9',
					oprice: '35',
					discount: '5.7'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/搞笑用品/hot2.png',
					name: '屁王炸弹整蛊道具恶搞玩具放屁虫臭屁弹愚人节整人神器',
					nprice: '9.9',
					oprice: '18',
					discount: '5.5'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/搞笑用品/hot3.png',
					name: '沙雕表情包徽章胸针搞笑文字徽章包包装饰潮流个性创意',
					nprice: '6.8',
					oprice: '12',
					discount: '5.7'
				},
				{
					id: 4,
					imgUrl: '/static/index/shop/搞笑用品/1.png',
					name: '搞笑马桶造型笔筒创意文具收纳盒办公室桌面装饰搞怪礼品',
					nprice: '29.9',
					oprice: '48',
					discount: '6.2'
				}
			]
		}
	})
})
router.get('/api/index_list/music', function(req, res, next) {
	res.send({
		"code": 0,
		"data": {
			bannerImgUrl: '/static/index/banner/音乐周边.png',
			iconList: [{
					id: 0,
					title: '流行唱片',
					imgUrl: '/static/index/icon/音乐周边/1.png'
				},
				{
					id: 1,
					title: '经典唱片',
					imgUrl: '/static/index/icon/音乐周边/2.png'
				},
				{
					id: 2,
					title: '限量版',
					imgUrl: '/static/index/icon/音乐周边/3.png'
				},
				{
					id: 3,
					title: '明星签名',
					imgUrl: '/static/index/icon/音乐周边/4.png'
				},
				{
					id: 4,
					title: '明星写真',
					imgUrl: '/static/index/icon/音乐周边/5.png'
				},
				{
					id: 5,
					title: '演唱会周边',
					imgUrl: '/static/index/icon/音乐周边/6.png'
				},
				{
					id: 6,
					title: '明星同款',
					imgUrl: '/static/index/icon/音乐周边/7.png'
				},
				{
					id: 7,
					title: '粉丝收藏',
					imgUrl: '/static/index/icon/音乐周边/8.png'
				}
			],
			hotList: [{
					id: 1,
					imgUrl: '/static/index/hot/音乐周边/hot1.png',
					name: '【Taylor Swift】最新专辑《Midnights》限量版黑胶唱片',
					nprice: '299',
					oprice: '399',
					discount: '7.5'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/音乐周边/hot2.png',
					name: '【周杰伦】《最伟大的作品》签名版CD专辑 官方正版',
					nprice: '199',
					oprice: '299',
					discount: '6.7'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/音乐周边/hot3.png',
					name: '【邓紫棋】演唱会周边礼盒装 含签名海报+CD+徽章',
					nprice: '168',
					oprice: '258',
					discount: '6.5'
				}
			],
			shopData: {
				shopImgUrl: '/static/index/shop/音乐周边/big.png',
				shopList: [{
						id: 0,
						imgUrl: '/static/index/shop/音乐周边/1.png',
						name: '【林俊杰】《Message in a Bottle》限量珍藏版唱片',
						nprice: '189',
						oprice: '239',
						discount: '7.9'
					},
					{
						id: 1,
						imgUrl: '/static/index/shop/音乐周边/2.png',
						name: '【蔡徐坤】首张专辑《1》签名版CD+明星写真集',
						nprice: '119',
						oprice: '149',
						discount: '8.0'
					},
					{
						id: 2,
						imgUrl: '/static/index/shop/音乐周边/3.png',
						name: '【BLACKPINK】《THE ALBUM》韩版进口黑胶唱片',
						nprice: '299',
						oprice: '399',
						discount: '7.5'
					},
					{
						id: 3,
						imgUrl: '/static/index/shop/音乐周边/4.png',
						name: '【陈奕迅】经典金曲合集黑胶LP唱片 复古收藏版',
						nprice: '359',
						oprice: '459',
						discount: '7.8'
					},
					{
						id: 4,
						imgUrl: '/static/index/shop/音乐周边/5.png',
						name: '【薛之谦】《天外来物》专辑CD 含明星签名照片',
						nprice: '99',
						oprice: '139',
						discount: '7.1'
					},
					{
						id: 5,
						imgUrl: '/static/index/shop/音乐周边/6.png',
						name: '【周深】深的深演唱会纪念品套装 限量发售',
						nprice: '268',
						oprice: '368',
						discount: '7.3'
					}

				]
			},
			recommendList: [{
					id: 1,
					imgUrl: '/static/index/hot/音乐周边/hot1.png',
					name: '【五月天】《人生无限公司》正版专辑CD+明星海报',
					nprice: '89',
					oprice: '129',
					discount: '6.9'
				},
				{
					id: 2,
					imgUrl: '/static/index/hot/音乐周边/hot2.png',
					name: '【毛不易】《小王》签名专辑 含独家写真明信片',
					nprice: '118',
					oprice: '158',
					discount: '7.5'
				},
				{
					id: 3,
					imgUrl: '/static/index/hot/音乐周边/hot3.png',
					name: '【张学友】经典金曲黑胶唱片收藏版 怀旧典藏',
					nprice: '399',
					oprice: '599',
					discount: '6.7'
				},
				{
					id: 4,
					imgUrl: '/static/index/shop/音乐周边/1.png',
					name: '【易烊千玺】首张个人EP《NOTHING TO LOSE》限量版',
					nprice: '149',
					oprice: '199',
					discount: '7.5'
				}
			]
		}
	})
})
module.exports = router;
