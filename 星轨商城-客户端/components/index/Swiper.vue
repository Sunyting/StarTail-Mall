<script setup></script>

<template>
	<view class="banner">
		<swiper class="swiper" circular indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="#f99cb2" autoplay interval="3000">
			<swiper-item class="swiper-item" v-for="i in 5" :key="i">
				<view class="item-image" :style="{ backgroundImage: `url(/static/banner/${i}.png)` }"></view>
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
				width: 710rpx;
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
