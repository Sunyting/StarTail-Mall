<script setup>
import { COLOR_PRIMARY, WINDOW_INFO } from '../../utils/config.js';
import { statusBarH, useNavBarStyle } from '../../utils/system.js';
import { computed, defineProps } from 'vue';

// 父传子参数
const props = defineProps({
	flag: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: ''
	}
});

// 状态栏高度样式
const { statusBarHeight } = useNavBarStyle();

const navBarStyle = computed(() => {
	// #ifdef MP-WEIXIN
	return { backgroundColor: COLOR_PRIMARY };
	// #endif
	// #ifndef MP-WEIXIN
	return {};
	// #endif
});

const screenTop = computed(() => {
	return WINDOW_INFO.screenTop;
});

// 判断是否显示返回按钮：检查页面栈是否有上一页
const showBack = getCurrentPages().length > 0;

const navBack = () => {
	// 使用条件编译处理不同平台

	// #ifdef H5
	// H5 平台处理
	handleH5Back();
	// #endif

	// #ifndef H5
	// 非 H5 平台（微信小程序、APP 等）
	handleNonH5Back();
	// #endif
};

// H5 平台返回逻辑
const handleH5Back = () => {
	console.log('H5 平台返回逻辑');
	// 方法1：使用浏览器历史
	if (window.history && window.history.length > 1) {
		window.history.back();
	} else {
		// 没有历史记录，跳转到首页
		window.location.href = '/';
	}
};

// 非 H5 平台返回逻辑
const handleNonH5Back = () => {
	console.log('非 H5 平台返回逻辑');

	const pages = getCurrentPages();
	console.log('页面栈长度:', pages.length);

	if (pages.length > 1) {
		// 有上一页，正常返回
		uni.navigateBack({
			delta: 1,
			fail: (error) => {
				console.warn('返回失败:', error);
				jumpToHome();
			}
		});
	} else {
		// 已经是第一页，跳转首页
		jumpToHome();
	}
};

// 跳转到首页
const jumpToHome = () => {
	// #ifdef MP-WEIXIN
	// 微信小程序
	uni.reLaunch({
		url: '/pages/index/index'
	});
	// #endif

	// #ifdef APP-PLUS
	// APP
	uni.reLaunch({
		url: '/pages/index/index'
	});
	// #endif

	// #ifdef H5
	// H5
	window.location.href = '/';
	// #endif
};
</script>

<template>
	<view class="nav-bar">
		<view class="fix" :style="[navBarStyle, flag ? { height: '212rpx' } : {}]">
			<view class="status"></view>
			<view class="title">
				<view class="left" v-if="showBack" @click.stop="navBack">
					<uni-icons class="icon" type="left" size="20"></uni-icons>
				</view>
				<view class="text" :style="{ marginLeft: showBack ? '' : '80rpx' }">{{ title }}</view>
				<view class="menu"></view>
			</view>
		</view>
		<view class="block"></view>
	</view>
</template>

<style lang="scss" scoped>
.nav-bar {
	width: 100vw;
	z-index: 999;
	.fix {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		/* 默认高度样式放到 CSS 中 */
		background: url('../static/QQ图片20251027171218.jpg') 0rpx -210rpx no-repeat;
		background-size: cover;
		.status {
			font-size: 18rpx;
			width: 100%;
			height: v-bind(statusBarHeight);
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
			&::before {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.5);
				z-index: -1;
			}
			.left {
				height: 100%;
				width: 80rpx;
				flex-shrink: 0;
				display: flex;
				align-items: center;
			}
			.text {
				flex: 1;
				font-weight: 700;
			}
			.menu {
				height: 100%;
				width: 80rpx;
				flex-shrink: 0;
			}
		}
	}
}
</style>
