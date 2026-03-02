<!-- components/mobile-nav-bar.vue -->
<script setup>
import { COLOR_PRIMARY, WINDOW_INFO } from '../../utils/config.js';
import { statusBarH, useNavBarStyle } from '../../utils/system.js';
import { computed, ref, onMounted } from 'vue';

const searchValue = ref('');

const handleSearch = () => {
	uni.navigateTo({
		url: '/pages/Search/search'
	});
};

// 父传子参数
const props = defineProps({
	flag: {
		type: Boolean,
		default: false
	},
	title: {
		type: String,
		default: ''
	},
	// 是否跳转
	change: {
		type: Number,
		default: 1
	}
});

// 状态栏高度样式
const { statusBarHeight } = useNavBarStyle();

// 根据平台处理背景图路径
const backgroundImage = computed(() => {
	// #ifdef MP-WEIXIN
	// 微信小程序使用绝对路径
	return `url(/static/QQ图片20251027171218.jpg) 0rpx -180rpx no-repeat`;
	// #endif

	// #ifdef H5
	// H5可以使用@别名
	return `url(/static/QQ图片20251027171218.jpg) 0rpx -210rpx no-repeat`;
	// #endif

	// 默认
	return `url(/static/QQ图片20251027171218.jpg) 0rpx -210rpx no-repeat`;
});

//是否微信端
const weixinFlag = computed(() => {
	// #ifdef MP-WEIXIN
	return true;
	// #endif
	return false;
});

//是否显示title
const isTitle = computed(() => {
	if (!weixinFlag.value) {
		return true;
	} else if (weixinFlag.value && !props.flag) {
		return true;
	} else {
		return false;
	}
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
	<view class="nav-bar">
		<view class="fix" :style="[!weixinFlag && props.flag ? { height: '212rpx' } : {}, { background: backgroundImage }]">
			<view class="status" :style="{ height: statusBarHeight }"></view>
			<view class="title" v-if="isTitle" :style="weixinFlag ? 'top: -33rpx' : ''">
				<view class="left" v-if="showBack" @click.stop="navBack">
					<uni-icons class="icon" type="left" size="20"></uni-icons>
				</view>
				<view class="text" :style="{ marginLeft: showBack ? '' : '80rpx' }">{{ title }}</view>
				<view class="menu"></view>
			</view>
		</view>
		<view class="input-wrap fixed-search" :style="weixinFlag ? 'top: 145rpx' : 'top: 135rpx'" v-if="props.flag">
			<uni-easyinput
				class="search"
				suffixIcon="search"
				v-model.trim="searchValue"
				placeholder="请搜索商品~"
				@iconClick="handleSearch"
				@confirm="handleSearch"
				@focus="handleSearch"
			></uni-easyinput>
		</view>
	</view>
</template>

<style lang="scss" scoped>
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
			color: #333; /* 添加文字颜色确保可见 */

			&::before {
				position: absolute;
				content: '';
				width: 100%;
				height: 100%;
				background-color: rgba(255, 255, 255, 0.4); /* 提高透明度确保文字可见 */
				z-index: -1;
				backdrop-filter: blur(10rpx); /* 毛玻璃效果 */
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
		top: 135rpx;
		left: 0;
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;

		.search {
			width: 100%;
			:deep(.is-input-border) {
				border-radius: 50px;
				border-color: $uni-color-primary !important;
			}
		}
	}
}
</style>
