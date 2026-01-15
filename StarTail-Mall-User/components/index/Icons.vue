<script setup>
import { ref } from 'vue';
const jewelrytitle = ref(['黄金', '吊坠', '耳饰', '手链', '戒指', '项链', '手镯', '转运珠']);
</script>

<template>
	<view class="icon-list">
		<view class="icon-item" v-for="(title, index) in jewelrytitle" :key="index">
			<image class="icon-img" :src="`/static/index/icon/首饰珠宝/${index + 1}.png`" mode="aspectFit" />
			<text class="icon-text">{{ title }}</text>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.icon-list {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 10rpx;
	box-sizing: border-box;

	.icon-item {
		width: 25%; /* 一行4个，每个25%宽度 */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx 10rpx;
		box-sizing: border-box;

		.icon-img {
			width: 120rpx;
			height: 120rpx;
			margin-bottom: 10rpx;
			border-radius: 50%;
		}

		.icon-text {
			font-size: 24rpx;
			color: #333;
			text-align: center;
			line-height: 1.4;
			white-space: nowrap;
		}
	}
}
</style>
