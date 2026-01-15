<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNavBarStyle } from '@/utils/system.js';
import indexSwiper from '@/components/index/Swiper.vue';
import Recommend from '@/components/index/recommend/Recommend.vue';
import Notice from '@/components/notice/Notice.vue';
import Card from '@/components/common/Card.vue';
import CommodityList from '@/components/common/CommodityList.vue';
import Banner from '@/components/index/Banner.vue';
import Icons from '@/components/index/Icons.vue';
import Hot from '@/components/index/Hot.vue';
import Shop from '@/components/index/Shop.vue';

const { statusBarHeight } = useNavBarStyle();
const flag = computed(() => {
	// #ifdef H5
	return true;
	// #endif
});

onMounted(() => {
	console.log('1' + statusBarHeight);
});

const searchValue = ref('');
const handleSearch = () => {
	console.log('search');
};

const weixinFlag = computed(() => {
	// #ifdef MP-WEIXIN
	return true;
	// #endif
	return false;
});

// 选中的索引
const topBarIndex = ref(0);
const topBar = ref([{ name: '推荐' }, { name: '游戏动漫' }, { name: '美术画集' }, { name: '次元周边' }, { name: '宠物用品' }, { name: '珠宝首饰' }, { name: '生活调剂' }]);

// 修复：切换tab
const changeTab = (index) => {
	if (topBarIndex.value === index) {
		// 使用 .value
		return;
	}
	topBarIndex.value = index; // 使用 .value
};
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar class="fixed-nav" :flag="true" title="Startail"></mobile-nav-bar>
		<view class="header-placeholder">
			<view class="nav-placeholder"></view>
			<view class="search-placeholder"></view>
		</view>

		<scroll-view :show-scrollbar="false" scroll-x="true" class="scroll-content" :scroll-left="topBarIndex * 100">
			<view class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class="topBarIndex === index ? 'top-active' : 'top'">{{ item.name }}</text>
			</view>
		</scroll-view>

		<!-- 推荐 -->
		<view class="page-scroll" v-if="topBarIndex === 0">
			<view class="page-head">
				<indexSwiper />
				<Notice />
			</view>
			<view class="recommend">
				<Recommend :productId="1" />
			</view>
			<view class="category-list">
				<Card name="猜你喜欢" />
				<CommodityList></CommodityList>
				<Card name="次元周边" />
				<CommodityList></CommodityList>
				<Card name="抽象潮玩" />
				<CommodityList></CommodityList>
				<Card name="杂货铺" />
				<CommodityList></CommodityList>
			</view>
		</view>

		<!-- 珠宝首饰（第5个tab，索引为5） -->
		<view class="page-scroll" v-if="topBarIndex === 5">
			<Banner />
			<Icons />
			<Card name="热销爆品" />
			<Hot />
			<Card name="推荐店铺" />
			<Shop />
			<Card name="为您推荐" />
			<CommodityList></CommodityList>
		</view>

		<!-- 其他tab的内容（示例） -->
		<view class="page-scroll" v-if="topBarIndex === 1">
			<text>游戏动漫内容</text>
		</view>
		<view class="page-scroll" v-if="topBarIndex === 2">
			<text>美术画集内容</text>
		</view>
		<view class="page-scroll" v-if="topBarIndex === 3">
			<text>次元周边内容</text>
		</view>
		<view class="page-scroll" v-if="topBarIndex === 4">
			<text>宠物用品内容</text>
		</view>
		<view class="page-scroll" v-if="topBarIndex === 6">
			<text>生活调剂内容</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.page-wrap {
	width: 100%;
	min-height: 100vh;

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
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		border-bottom: 1rpx solid #f0f0f0;

		.scroll-item {
			display: inline-flex;
			align-items: center;
			height: 100%;
			padding: 0 30rpx;

			.top {
				color: #333;
				font-size: 28rpx;
				font-weight: 400;
				transition: color 0.3s;
			}

			.top-active {
				color: #f798c1;
				font-size: 32rpx;
				font-weight: 600;
				border-bottom: 6rpx solid #f798c1;
				padding-bottom: 4rpx;
			}
		}
	}

	.page-scroll {
		width: 100%;
		.page-head {
			padding: 10rpx 20rpx 0 20rpx;
			width: 100%;
		}
	}
}
</style>
