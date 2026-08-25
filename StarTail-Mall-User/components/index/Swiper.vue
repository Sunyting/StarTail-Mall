<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import http from '@/utils/api/request.js';

let swiperData = ref();
const init = () => {
	uni.request({
		url: 'http://localhost:3001/api/index_list/recommend',
		success: (res) => {
			swiperData.value = res.data.data.swiperData.List.map((item) => ({
				...item,
				imgUrl: item.imgUrl.startsWith('/static/') ? http.common.assetBaseUrl + item.imgUrl : item.imgUrl
			}));
		}
	});
};
onLoad(() => {
	init();
});
</script>

<template>
	<view class="banner">
		<swiper class="swiper" circular indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="#f99cb2" autoplay interval="3000">
			<swiper-item class="swiper-item" v-for="(item, index) in swiperData" :key="index">
				<view class="item-image" :style="{ backgroundImage: `url(${item.imgUrl})` }"></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss" scoped>
.banner {
	width: 100%;
	position: relative;
	z-index: 1;

	.swiper {
		width: 100%;
		height: 380rpx;

		.swiper-item {
			width: 100%;

			.item-image {
				width: 100%;
				height: 380rpx;
				border-radius: 20rpx;
				background-size: cover;
				background-position: center;
				background-repeat: no-repeat;
			}
		}
	}
}
</style>
