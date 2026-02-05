<!-- Commodity.vue -->
<script setup>
import { onLoad } from '@dcloudio/uni-app';
const props = defineProps({
	dataList: Array,
	itemwidth: {
		type: Number,
		default: 375
	},
	flexWrap: {
		type: String,
		default: 'wrap'
	}
});

onLoad(() => {});
</script>

<template>
	<view class="container" :style="{ flexWrap: flexWrap }" v-if="dataList">
		<view class="commodity-wrap" v-for="(item, index) in dataList" :key="index" :style="{ width: itemwidth + 'rpx' }">
			<view class="img-container">
				<image class="img" :src="item.imgUrl" mode="aspectFill" />
			</view>
			<p class="content">{{ item.name }}</p>
			<view class="footer">
				<view class="price">
					<text class="nprice">{{ item.nprice }}</text>
					<text class="oprice">{{ item.oprice }}</text>
				</view>
				<text class="discount">{{ item.discount }}折</text>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.container {
	display: flex;
	// flex-wrap: wrap;
	justify-content: space-around;
	.commodity-wrap {
		height: auto;
		padding: 5rpx 10rpx 10rpx 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;

		&:hover {
			border: 10rpx;
		}

		.img-container {
			width: 100%;
			height: 0;
			padding-bottom: 100%;
			position: relative;
			overflow: hidden;
			border-radius: 10rpx;
			background-color: #f5f5f5;

			.img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}

		.content {
			font-size: 24rpx;
			line-height: 1.4;
			margin: 5rpx 0;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
			min-height: 68rpx;
		}
		.footer {
			font-size: 24rpx;
			margin: 10rpx 0;
			display: flex;
			justify-content: space-between;
			.price {
				width: 70%;
				.nprice {
					color: #e4393c;
					font-weight: bold;
					font-size: 30rpx;
				}

				.oprice {
					color: #999;
					font-size: 26rpx;
					text-decoration: line-through;
					margin-left: 10rpx;
				}
			}
			.discount {
				align-self: flex-end;
				text-align: center;
				flex: 1;
				background-color: #e4393c;
				font-size: 30rpx;
				font-weight: 700;
				color: white;
				padding: 4rpx 10rpx;
				border-radius: 6rpx;
				font-size: 20rpx;
			}
		}
	}
}
</style>
