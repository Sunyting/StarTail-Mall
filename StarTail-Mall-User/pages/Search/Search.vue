<script setup>
import { COLOR_PRIMARY, WINDOW_INFO } from '../../utils/config.js';
import { statusBarH, useNavBarStyle } from '../../utils/system.js';
import { computed, ref, onMounted } from 'vue';
import Commodity from '@/components/common/Commodity.vue';
import http from '@/utils/api/request.js';

const searchValue = ref('');
const searchHistory = ref([]);
const hotSearchList = ref([]);
const searchResults = ref([]);
const isSearching = ref(false);
const showResults = ref(false);
const noResults = ref(false);

// 热门搜索数据
const initHotSearch = () => {
	hotSearchList.value = [
		{ id: 1, keyword: '鸣潮手办', hot: true },
		{ id: 2, keyword: '原神周边', hot: true },
		{ id: 3, keyword: '崩坏星铁', hot: false },
		{ id: 4, keyword: '初音未来', hot: false },
		{ id: 5, keyword: '周生生首饰', hot: true },
		{ id: 6, keyword: '宠物用品', hot: false },
		{ id: 7, keyword: '故宫文创', hot: true },
		{ id: 8, keyword: '搞笑玩具', hot: false }
	];
};

// 加载搜索历史
const loadSearchHistory = () => {
	const history = uni.getStorageSync('searchHistory') || [];
	searchHistory.value = history.slice(0, 10); // 最多显示10条历史记录
};

// 保存搜索历史
const saveSearchHistory = (keyword) => {
	if (!keyword.trim()) return;

	let history = uni.getStorageSync('searchHistory') || [];
	// 移除已存在的相同关键词
	history = history.filter(item => item !== keyword);
	// 添加到开头
	history.unshift(keyword);
	// 限制数量
	history = history.slice(0, 10);

	uni.setStorageSync('searchHistory', history);
	searchHistory.value = history;
};

// 搜索功能
const handleSearch = async () => {
	if (!searchValue.value.trim()) return;

	const keyword = searchValue.value.trim();
	isSearching.value = true;
	showResults.value = true;
	noResults.value = false;

	// 保存搜索历史
	saveSearchHistory(keyword);

	try {
		// 模拟搜索API调用
		const response = await searchProducts(keyword);
		searchResults.value = response.data || [];
		noResults.value = searchResults.value.length === 0;
	} catch (error) {
		uni.showToast({
			title: '搜索失败，请重试',
			icon: 'none'
		});
		searchResults.value = [];
		noResults.value = true;
	} finally {
		isSearching.value = false;
	}
};

// 模拟搜索API
const searchProducts = (keyword) => {
	return new Promise((resolve) => {
		// 模拟网络延迟
		setTimeout(() => {
			// 根据关键词返回模拟数据
			const mockData = generateMockSearchResults(keyword);
			resolve({ data: mockData });
		}, 800);
	});
};

// 生成模拟搜索结果
const generateMockSearchResults = (keyword) => {
	const mockResults = [
		{
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
			imgUrl: '/static/commodity-item/1.png',
			name: '原神胡桃手办模型精美收藏版动漫周边',
			nprice: '299',
			oprice: '599',
			discount: '5.0'
		},
		{
			id: 4,
			imgUrl: '/static/commodity-item/2.png',
			name: '初音未来39系列亚克力立牌桌面装饰',
			nprice: '89',
			oprice: '129',
			discount: '6.9'
		}
	];

	// 简单的关键词匹配筛选
	return mockResults.filter(item =>
		item.name.toLowerCase().includes(keyword.toLowerCase()) ||
		keyword === '手办' || keyword === '周边' || keyword === '游戏'
	);
};

// 点击热门搜索
const clickHotSearch = (keyword) => {
	searchValue.value = keyword;
	handleSearch();
};

// 点击历史搜索
const clickHistorySearch = (keyword) => {
	searchValue.value = keyword;
	handleSearch();
};

// 清空搜索历史
const clearSearchHistory = () => {
	uni.showModal({
		title: '提示',
		content: '确定要清空搜索历史吗？',
		success: (res) => {
			if (res.confirm) {
				uni.removeStorageSync('searchHistory');
				searchHistory.value = [];
				uni.showToast({
					title: '已清空历史记录',
					icon: 'success'
				});
			}
		}
	});
};

// 删除单条历史记录
const deleteHistoryItem = (index) => {
	searchHistory.value.splice(index, 1);
	uni.setStorageSync('searchHistory', searchHistory.value);
};

// 输入框获得焦点
const handleInputFocus = () => {
	showResults.value = false;
};

// 清空搜索内容
const clearSearch = () => {
	searchValue.value = '';
	showResults.value = false;
	searchResults.value = [];
	noResults.value = false;
};

// 商品点击事件
const handleCommodityClick = (item) => {
	// 跳转到商品详情页
	uni.navigateTo({
		url: `/pages/shop/commodity-details?id=${item.id}`
	});
};

// 状态栏高度样式
const { statusBarHeight } = useNavBarStyle();

//是否微信端
const weixinFlag = computed(() => {
	// #ifdef MP-WEIXIN
	return true;
	// #endif
	return false;
});

const screenTop = computed(() => {
	return WINDOW_INFO.screenTop;
});

// 返回按钮逻辑
const showBack = ref(false);
const navBack = () => {
	const pages = getCurrentPages();
	if (pages.length > 1) {
		uni.navigateBack();
	} else {
		uni.switchTab({
			url: '/pages/index/index'
		});
	}
};

onMounted(() => {
	// 判断是否显示返回按钮
	const pages = getCurrentPages();
	showBack.value = pages.length > 1;

	// 初始化热门搜索数据
	initHotSearch();

	// 加载搜索历史记录
	loadSearchHistory();
});
</script>

<template>
	<view class="container">
		<view class="nav-bar">
			<view class="fix" :style="[!weixinFlag ? { height: '212rpx' } : {}]">
				<view class="status" :style="{ height: statusBarHeight }"></view>
				<view class="title" :style="weixinFlag ? 'top: -33rpx' : ''">
					<view class="left" v-if="showBack" @click.stop="navBack">
						<uni-icons class="icon" type="left" size="20"></uni-icons>
					</view>
					<view class="text" :style="{ marginLeft: showBack ? '' : '80rpx' }">搜索</view>
					<view class="menu"></view>
				</view>
			</view>
			<view class="fixed-search" :style="weixinFlag ? 'top: 145rpx' : 'top: 135rpx'">
				<uni-easyinput
					class="search"
					suffixIcon="search"
					v-model.trim="searchValue"
					placeholder="请搜索商品~"
					@iconClick="handleSearch"
					@confirm="handleSearch"
					@focus="handleInputFocus"
				></uni-easyinput>
			</view>
		</view>

		<!-- 搜索内容区域 -->
		<view class="content-area" :style="{ marginTop: '240rpx' }">
			<!-- 加载状态 -->
			<view v-if="isSearching" class="loading-container">
				<view class="loading-spinner"></view>
				<text class="loading-text">搜索中...</text>
			</view>

			<!-- 搜索结果 -->
			<view v-else-if="showResults" class="results-container">
				<!-- 无结果提示 -->
				<view v-if="noResults" class="no-results">
					<uni-icons type="search" size="60" color="#ccc"></uni-icons>
					<text class="no-results-text">未找到相关商品</text>
					<text class="no-results-tip">换个关键词试试吧~</text>
				</view>

				<!-- 搜索结果列表 -->
				<view v-else class="results-list">
					<view class="results-header">
						<text class="results-count">找到 {{ searchResults.length }} 件相关商品</text>
					</view>
					<view class="commodity-grid">
						<Commodity
							v-for="item in searchResults"
							:key="item.id"
							:commodityInfo="item"
							@click="handleCommodityClick(item)"
						/>
					</view>
				</view>
			</view>

			<!-- 默认状态：搜索历史和热门搜索 -->
			<view v-else class="default-content">
				<!-- 搜索历史 -->
				<view v-if="searchHistory.length > 0" class="search-section">
					<view class="section-header">
						<text class="section-title">搜索历史</text>
						<text class="clear-btn" @click="clearSearchHistory">清空</text>
					</view>
					<view class="history-list">
						<view
							v-for="(item, index) in searchHistory"
							:key="index"
							class="history-item"
							@click="clickHistorySearch(item)"
						>
							<uni-icons type="clock" size="16" color="#999"></uni-icons>
							<text class="history-text">{{ item }}</text>
							<uni-icons
								type="clear"
								size="14"
								color="#ccc"
								@click.stop="deleteHistoryItem(index)"
							></uni-icons>
						</view>
					</view>
				</view>

				<!-- 热门搜索 -->
				<view class="search-section">
					<view class="section-header">
						<text class="section-title">热门搜索</text>
					</view>
					<view class="hot-search-list">
						<view
							v-for="item in hotSearchList"
							:key="item.id"
							class="hot-search-item"
							:class="{ 'hot': item.hot }"
							@click="clickHotSearch(item.keyword)"
						>
							<text class="hot-search-text">{{ item.keyword }}</text>
							<view v-if="item.hot" class="hot-tag">热</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.container {
	width: 100vw;
	height: 100vh;

	.nav-bar {
		width: 100vw;

		.fix {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 140rpx;
			background-size: cover !important;

			.status {
				font-size: 18rpx;
				width: 100%;
			}

			.title {
				display: flex;
				width: 100%;
				text-align: center;
				font-size: 35rpx;
				justify-content: space-between;
				align-items: center;
				height: 80rpx;
				position: relative;
				color: #333;

				&::before {
					position: absolute;
					content: '';
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, 0.1);
					z-index: -1;
					backdrop-filter: blur(10rpx);
				}

				.left {
					height: 100%;
					width: 80rpx;
					flex-shrink: 0;
					display: flex;
					align-items: center;
					justify-content: center;

					.icon {
						color: #333;
					}
				}

				.text {
					flex: 1;
					font-weight: 700;
					color: #333;
				}

				.menu {
					height: 100%;
					width: 80rpx;
					flex-shrink: 0;
				}
			}
		}
	}

	.fixed-search {
		position: fixed;
		top: 135rpx;
		left: 0;
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;

		.search {
			width: 100%;

			:deep(.is-input-border) {
				border-radius: 50px;
				border-color: black !important;
			}
		}
	}

	.content-area {
		width: 100%;
		min-height: calc(100vh - 240rpx);
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #f5f5f5;

		// 加载状态
		.loading-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 100rpx 0;

			.loading-spinner {
				width: 60rpx;
				height: 60rpx;
				border: 4rpx solid #e0e0e0;
				border-top-color: #333;
				border-radius: 50%;
				animation: spin 1s linear infinite;
			}

			.loading-text {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #666;
			}
		}

		// 搜索结果容器
		.results-container {
			// 无结果提示
			.no-results {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 150rpx 0;

				.no-results-text {
					margin-top: 30rpx;
					font-size: 32rpx;
					color: #666;
					font-weight: 500;
				}

				.no-results-tip {
					margin-top: 20rpx;
					font-size: 26rpx;
					color: #999;
				}
			}

			// 搜索结果列表
			.results-list {
				.results-header {
					padding: 20rpx 0;
					margin-bottom: 20rpx;

					.results-count {
						font-size: 28rpx;
						color: #666;
					}
				}

				.commodity-grid {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					gap: 20rpx;
				}
			}
		}

		// 默认内容（搜索历史和热门搜索）
		.default-content {
			.search-section {
				margin-bottom: 40rpx;
				background-color: #fff;
				border-radius: 16rpx;
				padding: 30rpx;

				.section-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 24rpx;

					.section-title {
						font-size: 32rpx;
						font-weight: 700;
						color: #333;
					}

					.clear-btn {
						font-size: 26rpx;
						color: #999;
						padding: 8rpx 16rpx;

						&:active {
							opacity: 0.7;
						}
					}
				}

				// 搜索历史列表
				.history-list {
					.history-item {
						display: flex;
						align-items: center;
						padding: 20rpx 0;
						border-bottom: 1rpx solid #f0f0f0;

						&:last-child {
							border-bottom: none;
						}

						&:active {
							background-color: #f9f9f9;
						}

						.history-text {
							flex: 1;
							margin-left: 16rpx;
							font-size: 28rpx;
							color: #666;
						}
					}
				}

				// 热门搜索列表
				.hot-search-list {
					display: flex;
					flex-wrap: wrap;
					gap: 20rpx;

					.hot-search-item {
						position: relative;
						padding: 16rpx 28rpx;
						background-color: #f5f5f5;
						border-radius: 40rpx;
						transition: all 0.3s;

						&:active {
							background-color: #e0e0e0;
						}

						&.hot {
							background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);

							.hot-search-text {
								color: #ff4444;
								font-weight: 500;
							}
						}

						.hot-search-text {
							font-size: 28rpx;
							color: #666;
						}

						.hot-tag {
							position: absolute;
							top: -8rpx;
							right: -8rpx;
							width: 32rpx;
							height: 32rpx;
							background: linear-gradient(135deg, #ff6b6b 0%, #ff4444 100%);
							color: #fff;
							font-size: 20rpx;
							font-weight: bold;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							box-shadow: 0 2rpx 8rpx rgba(255, 68, 68, 0.3);
						}
					}
				}
			}
		}

		// 加载动画
		@keyframes spin {
			0% { transform: rotate(0deg); }
			100% { transform: rotate(360deg); }
		}
	}
}
</style>
