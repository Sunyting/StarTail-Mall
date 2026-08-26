<script setup>
defineProps({
	swiperData: {
		type: Array,
		default: () => []
	}
});
</script>

<template>
	<view class="banner">
		<swiper class="swiper" circular indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="#f99cb2" autoplay interval="3000">
			<swiper-item class="swiper-item" v-for="item in swiperData" :key="item.id">
				<image class="item-image" :src="item.imgUrl" mode="aspectFill" />
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
			}
		}
	}
}
</style>
