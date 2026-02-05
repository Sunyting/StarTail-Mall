<script setup>
import { ref } from 'vue';
const props = defineProps({
	iconList: Array
});
</script>

<template>
	<view class="icon-list">
		<view class="icon-item" v-for="(item, index) in props.iconList" :key="index">
			<image class="icon-img" :src="`${item.imgUrl}`" mode="aspectFit" />
			<text class="icon-text">{{ item.title }}</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.icon-list {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 3% 0;
	box-sizing: border-box;

	.icon-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx 10rpx;
		box-sizing: border-box;

		.icon-img {
			width: 145rpx;
			height: 145rpx;
			margin-bottom: 10rpx;
			border-radius: 50%;
		}

		.icon-text {
			font-size: 28rpx;
			color: #333;
			text-align: center;
			line-height: 1.4;
			white-space: nowrap;
		}
	}
}
</style>
