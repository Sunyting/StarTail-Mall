<!-- pages/index/index.vue -->
<script setup>
import { ref, onMounted, computed, markRaw } from 'vue';
import { useNavBarStyle } from '@/utils/system.js';

// 导入 tab 组件
import RecommendTab from '@/components/index/tabs/RecommendTab.vue';
import AnimationeTab from '@/components/index/tabs/AnimationTab.vue';
import GameTab from '@/components/index/tabs/GameTab.vue';
import ArtTab from '@/components/index/tabs/ArtTab.vue';
import PetTab from '@/components/index/tabs/PetTab.vue';
import JewelryTab from '@/components/index/tabs/JewelryTab.vue';
import JokeTab from '@/components/index/tabs/JokeTab.vue';

const { statusBarHeight } = useNavBarStyle();

// 顶部 tab 栏配置 - 使用 markRaw 包裹组件
const topBar = ref([
	{
		name: '推荐',
		component: markRaw(RecommendTab)
	},
	{
		name: '漫画动漫',
		component: markRaw(AnimationeTab)
	},
	{
		name: '游戏周边',
		component: markRaw(GameTab)
	},
	{
		name: '美术画集',
		component: markRaw(ArtTab)
	},
	{
		name: '宠物用品',
		component: markRaw(PetTab)
	},
	{
		name: '珠宝首饰',
		component: markRaw(JewelryTab)
	},
	{
		name: '生活调剂',
		component: markRaw(JokeTab)
	}
]);

const topBarIndex = ref(0);
const scrollIntoIndex = ref('top0');

// 切换 tab
const changeTab = (index) => {
	if (topBarIndex.value === index) return;
	topBarIndex.value = index;
	scrollIntoIndex.value = 'top' + index;
};

const onChangeTab = (e) => {
	changeTab(e.detail.current);
};

onMounted(() => {
	console.log('1' + statusBarHeight);
});
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar class="fixed-nav" :flag="true" title="Startail"></mobile-nav-bar>
		<view class="header-placeholder">
			<view class="nav-placeholder"></view>
			<view class="search-placeholder"></view>
		</view>

		<scroll-view scroll-with-animation="true" scroll-x="true" :show-scrollbar="false" class="scroll-content" :scroll-into-view="scrollIntoIndex" :scroll-left="0">
			<view :id="'top' + index" class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class="topBarIndex === index ? 'top-active' : 'top'">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper @change="onChangeTab" :current="topBarIndex" class="swiper-container" :duration="300">
			<swiper-item v-for="(item, index) in topBar" :key="index">
				<view class="swiper-item">
					<!-- 动态组件，根据配置渲染不同的组件 -->
					<component :is="item.component" v-bind="item.props || {}" v-if="topBarIndex === index" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss" scoped>
.page-wrap {
	width: 100%;
	min-height: 100vh;
	background: #f8f8f8;

	.fixed-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
	}

	.header-placeholder {
		width: 100%;
		.nav-placeholder {
			height: 200rpx;
		}
		.search-placeholder {
			height: 10rpx;
		}
	}

	.scroll-content {
		white-space: nowrap;
		height: 80rpx;
		background: #fff;
		border-bottom: 1rpx solid #f0f0f0;
		box-sizing: border-box;

		.scroll-item {
			display: inline-block;
			padding: 0 30rpx;
			font-size: 30rpx;
			font-weight: 700;
			height: 80rpx;
			line-height: 80rpx;
			position: relative;

			.top {
				color: #666;
				transition: color 0.3s;
			}

			.top-active {
				color: #f798c1;
				border-bottom: 2px solid;
			}
		}
	}

	.swiper-container {
		height: calc(100vh - 280rpx);
		background: #f8f8f8;

		.swiper-item {
			height: 100%;
			overflow-y: auto;
			padding-bottom: 100rpx;
		}
	}
}
</style>
