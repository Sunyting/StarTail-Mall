<script setup>
import { COLOR_PRIMARY, WINDOW_INFO } from '../../utils/config.js';
import { statusBarH, useNavBarStyle } from '../../utils/system.js';
import { computed, ref, onMounted } from 'vue';

const searchValue = ref('');

const handleSearch = () => {
	console.log(1);
};

const handleInputFocus = () => {
	console.log(2);
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

		<!-- 搜索结果区域 -->
		<view class="search-results" :style="{ marginTop: '240rpx' }">
			<!-- 这里放置搜索结果内容 -->
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

	.search-results {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
	}
}
</style>
