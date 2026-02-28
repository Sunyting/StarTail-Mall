<script setup>
import { WINDOW_INFO } from '../../utils/config.js';
import { useNavBarStyle } from '../../utils/system.js';
import { computed, ref, onMounted } from 'vue';
import Commodity from '@/components/common/Commodity.vue';
import http from '@/utils/api/request.js';

const searchValue = ref('');
const searchHistory = ref([]);
const hotSearchList = ref([]);

// 热门搜索数据
const initHotSearch = () => {
	hotSearchList.value = [
		{ id: 1, keyword: '崩坏星铁', hot: false },
		{ id: 2, keyword: '初音未来', hot: false },
		{ id: 3, keyword: '周生生首饰', hot: true },
		{ id: 4, keyword: '宠物用品', hot: false },
		{ id: 5, keyword: '故宫文创', hot: true },
		{ id: 6, keyword: '搞笑玩具', hot: false }
	];
};

const loadSearchHistory = () => {
	const history = uni.getStorageSync('searchHistory') || [];
	searchHistory.value = history;
};

const saveSearchHistory = (keyword) => {
	if (!keyword.trim()) return;

	let history = uni.getStorageSync('searchHistory') || [];
	history = history.filter((item) => item !== keyword);
	history.unshift(keyword);

	uni.setStorageSync('searchHistory', history);
	searchHistory.value = history;
};

const handleSearch = () => {
	if (!searchValue.value.trim()) return;

	const keyword = searchValue.value.trim();

	// 保存搜索历史
	saveSearchHistory(keyword);

	// 跳转到搜索结果页
	uni.navigateTo({
		url: `/pages/Search/Search-list?keyword=${encodeURIComponent(keyword)}`
	});
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
	uni.switchTab({
		url: '/pages/index/index'
	});
};

onMounted(() => {
	const pages = getCurrentPages();
	showBack.value = pages.length > 1;

	initHotSearch();
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
				></uni-easyinput>
			</view>
		</view>

		<!-- 内容区域：只显示搜索历史和热门搜索 -->
		<view class="content-area" :style="{ marginTop: '240rpx' }">
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
						<uni-icons type="clear" size="14" color="#ccc" @click.stop="deleteHistoryItem(index)"></uni-icons>
					</view>
				</view>
			</view>

			<!-- 热门搜索 -->
			<view class="search-section">
				<view class="section-header">
					<text class="section-title">热门搜索</text>
				</view>
				<view class="hot-search-list">
					<view v-for="item in hotSearchList" :key="item.id" class="hot-search-item" :class="{ hot: item.hot }" @click="clickHotSearch(item.keyword)">
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
	.content-area {
		width: 100%;
		min-height: calc(100vh - 240rpx);
		min-height: calc(100vh - 240rpx);
		padding: 20rpx;
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
}
</style>
