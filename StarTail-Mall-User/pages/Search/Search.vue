<script setup>
import { COLOR_PRIMARY, WINDOW_INFO } from '../../utils/config.js';
import { statusBarH, useNavBarStyle } from '../../utils/system.js';
import { computed, ref, onMounted, watch } from 'vue';
import http from '@/utils/api/request.js';

const searchValue = ref('');
const searchHistory = ref([]);
const hotSearchList = ref([]);
const suggestions = ref([]); // 搜索建议列表
const showSuggestions = ref(false); // 是否显示建议列表

// 热门搜索数据
const initHotSearch = () => {
	hotSearchList.value = [
		{ id: 0, keyword: '周生生首饰'},
		{ id: 1, keyword: '宠物用品'},
		{ id: 2, keyword: '故宫文创'},
		{ id: 3, keyword: '搞笑玩具'}
	];
};

// 加载搜索历史
const loadSearchHistory = () => {
	const history = uni.getStorageSync('searchHistory') || [];
	searchHistory.value = history.slice(0, 10);
};

// 保存搜索历史
const saveSearchHistory = (keyword) => {
	if (!keyword.trim()) return;

	let history = uni.getStorageSync('searchHistory') || [];
	history = history.filter((item) => item !== keyword);
	history.unshift(keyword);
	history = history.slice(0, 10);

	uni.setStorageSync('searchHistory', history);
	searchHistory.value = history;
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
	const pages = getCurrentPages();
	showBack.value = pages.length > 1;

	initHotSearch();
	loadSearchHistory();
});

// 监听搜索框输入，获取搜索建议
watch(searchValue, (newVal) => {
	if (newVal.trim().length > 0) {
		// 输入长度大于0时，获取建议
		getSuggestions(newVal);
		showSuggestions.value = true;
	} else {
		// 输入为空时，清空建议并隐藏
		suggestions.value = [];
		showSuggestions.value = false;
	}
});

const getSuggestions = (keyword) => {
	const mockSuggestions = [
		{ id: 1, keyword: '鸣潮手办 守岸人', type: 'product' },
		{ id: 2, keyword: '鸣潮手办 漂泊者', type: 'product' },
		{ id: 3, keyword: '原神手办 胡桃', type: 'product' },
		{ id: 4, keyword: '原神周边 甘雨', type: 'product' },
		{ id: 5, keyword: '崩坏星铁 砂金', type: 'product' },
		{ id: 6, keyword: '崩坏星铁 戒指', type: 'product' },
		{ id: 7, keyword: '初音未来 亚克力立牌', type: 'product' },
		{ id: 8, keyword: '初音未来 手办', type: 'product' }
	];

	suggestions.value = mockSuggestions.filter((item) => item.keyword.includes(keyword)).slice(0, 8); // 最多显示8条
};

// 点击建议项
const clickSuggestion = (keyword) => {
	searchValue.value = keyword;
	showSuggestions.value = false;

	// 保存搜索历史
	saveSearchHistory(keyword);

	// 跳转到搜索结果页
	uni.navigateTo({
		url: `/pages/Search/search-list?keyword=${encodeURIComponent(keyword)}`
	});
};

// 输入框聚焦
const onFocus = () => {
	if (searchValue.value.trim().length > 0) {
		showSuggestions.value = true;
	}
};

// 输入框失去焦点（延迟隐藏，以便点击建议项）
const onBlur = () => {
	setTimeout(() => {
		showSuggestions.value = false;
	}, 200);
};

// 修改原有的 handleSearch，跳转时隐藏建议
const handleSearch = () => {
	if (!searchValue.value.trim()) return;

	const keyword = searchValue.value.trim();
	saveSearchHistory(keyword);
	showSuggestions.value = false;

	uni.navigateTo({
		url: `/pages/Search/search-list?keyword=${encodeURIComponent(keyword)}`
	});
};
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
					@focus="onFocus"
					@blur="onBlur"
				></uni-easyinput>
			</view>
			<view v-if="showSuggestions && suggestions.length > 0" class="suggestions-container">
				<view v-for="item in suggestions" :key="item.id" class="suggestion-item" @click="clickSuggestion(item.keyword)">
					<uni-icons type="search" size="16" color="#999"></uni-icons>
					<text class="suggestion-text">{{ item.keyword }}</text>
				</view>
			</view>
		</view>
		
		<view class="header-placeholder"></view>
		
		<!-- 内容区域：只显示搜索历史和热门搜索 -->
		<view class="content-area" :style="{ marginTop: '215rpx' }">
			<!-- 搜索历史 -->
			<view v-if="searchHistory.length > 0" class="search-section">
				<view class="section-header">
					<text class="section-title">搜索历史</text>
					<text class="clear-btn" @click="clearSearchHistory">清空</text>
				</view>
				<view class="history-list">
					<view v-for="(item, index) in searchHistory" :key="index" class="history-item" @click="clickHistorySearch(item)">
						<uni-icons type="clock" size="16" color="#999"></uni-icons>
						<text class="history-text">{{ item }}</text>
						<uni-icons type="clear" size="16" color="#ccc" @click.stop="deleteHistoryItem(index)"></uni-icons>
					</view>
				</view>
			</view>

			<!-- 热门搜索 -->
			<view class="search-section">
				<view class="section-header">
					<text class="section-title">热门搜索</text>
				</view>
				<view class="hot-search-list">
					<view v-for="item in hotSearchList" :key="item.id" class="hot-search-item"" @click="clickHotSearch(item.keyword)">
						<text class="hot-search-text">{{ item.keyword }}</text>
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
					background-color: rgba(239, 161, 156, 0.3);
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
		.fixed-search {
			position: fixed;
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
			// 搜索建议列表
			.suggestions-container {
				position: fixed;
				top: 380rpx; // 根据你的导航栏高度调整
				left: 0;
				right: 0;
				background-color: #fff;
				border-radius: 16rpx;
				margin: 0 20rpx;
				padding: 20rpx 0;
				max-height: 600rpx;
				overflow-y: auto;
				box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
				z-index: 100;

				.suggestion-item {
					display: flex;
					align-items: center;
					padding: 24rpx 30rpx;
					border-bottom: 1rpx solid #f5f5f5;

					&:last-child {
						border-bottom: none;
					}

					&:active {
						background-color: #f9f9f9;
					}

					.suggestion-text {
						margin-left: 20rpx;
						font-size: 28rpx;
						color: #333;
						flex: 1;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}



	.header-placeholder {
		width: 100%;
		height: 1rpx;
	}

	.content-area {
		height: calc(100vh - 215rpx);
		width: 100%;
		padding: 20rpx 20rpx 0 20rpx;
		box-sizing: border-box;
		background-color: #f5f5f5;

		// 搜索历史和热门搜索样式
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
				display: flex;
				flex-wrap: wrap;
				gap: 20rpx;
				.history-item {
					position: relative;
					padding: 16rpx 28rpx;
					background-color: #f5f5f5;
					border-radius: 40rpx;
					transition: all 0.3s;
					display: flex;
					gap: 10rpx;
					
					&:active {
						background-color: #e0e0e0;
					}
					
					.hot-search-text {
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

					.hot-search-text {
						font-size: 28rpx;
						color: #666;
					}
				}
			}
		}
	}
}
</style>
