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
//顶栏跟随的索引id值
const scrollIntoIndex = ref('top1');
const topBar = ref([{ name: '推荐' }, { name: '游戏动漫' }, { name: '美术画集' }, { name: '次元周边' }, { name: '宠物用品' }, { name: '珠宝首饰' }, { name: '生活调剂' }]);
// 切换tab
const changeTab = (index) => {
	if (topBarIndex.value === index) {
		return;
	}
	topBarIndex.value = index;
	scrollIntoIndex.value = 'top' + index;
};
const onChangeTab = (e) => {
	changeTab(e.detail.current);
};
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar class="fixed-nav" :flag="true" title="Startail"></mobile-nav-bar>
		<view class="header-placeholder">
			<view class="nav-placeholder"></view>
			<view class="search-placeholder"></view>
		</view>

		<scroll-view scroll-with-animation="true" scroll-x="true" :show-scrollbar="false" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view :id="'top' + index" class="scroll-item" v-for="(item, index) in topBar" :key="index" @tap="changeTab(index)">
				<text :class="topBarIndex === index ? 'top-active' : 'top'">{{ item.name }}</text>
			</view>
		</scroll-view>

		<swiper @change="onChangeTab" :current="topBarIndex" class="swiper-container">
			<swiper-item v-for="(item, index) in topBar" :key="index">
				<view class="swiper-item">
					<!-- 推荐内容 -->
					<view class="page-scroll" v-if="index === 0">
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

					<!-- 珠宝首饰内容 -->
					<view class="page-scroll" v-if="index === 5">
						<Banner />
						<Icons />
						<Card name="热销爆品" />
						<Hot />
						<Card name="推荐店铺" />
						<Shop />
						<Card name="为您推荐" />
						<CommodityList></CommodityList>
					</view>

					<!-- 其他tab内容 -->
					<view class="other-content" v-if="index !== 0 && index !== 5">
						<text class="content-text">{{ item.name }}内容</text>
					</view>
				</view>
			</swiper-item>
		</swiper>
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
		height: 80rpx;
		.scroll-item {
			display: inline-block;
			padding: 5rpx 20rpx;
			font-size: 30rpx;
			font-weight: 700;
			line-height: 60rpx;
			.top {
				color: #777;
			}
			.top-active {
				color: #f798c1;
				border-bottom: 5rpx solid #f798c1;
			}
		}
	}

	.swiper-container {
		height: calc(100vh - 280rpx); /* 调整高度 */
		.swiper-item {
			height: 100%;
			overflow-y: auto;
		}
	}

	.other-content {
		padding: 40rpx;
		text-align: center;
		.content-text {
			font-size: 32rpx;
			color: #666;
		}
	}
}
</style>
