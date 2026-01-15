<script setup>
const handleBuy = () => {
	// 方式1：跳转到tabBar页面（如my是tabBar页面）
	uni.switchTab({
		url: '/pages/my/my'
	});

	// 方式2：跳转到非tabBar页面
	// uni.navigateTo({
	// 	url: '/pages/my/my'
	// });
};

const props = defineProps({
	productId: {
		type: Number,
		required: true
	}
});
console.log(props.productId);
</script>

<template>
	<view class="page-content">
		<view class="recommend-item">
			<image class="item-big" :src="`/static/index/recommend/${props.productId}/big.png`" mode="widthfill"></image>
			<view class="product">
				<view class="product-item" v-for="i in 4" :key="i">
					<view class="item-img" :style="{ backgroundImage: `url(/static/index/recommend/${props.productId}/${i}.png)` }" mode="widthFill"></view>
					<view class="item-name">拂晓长誓系列戒指</view>
					<view class="item-footer">
						<view class="left">
							￥
							<p class="sale">123</p>
							/件
						</view>
						<view class="right" @click="handleBuy"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.page-content {
	width: 100%;
	padding: 10rpx 20rpx;
	box-sizing: border-box;

	.recommend-item {
		width: 100%;
		.item-big {
			width: 100%;
			height: 500rpx;
			display: block;
			margin-bottom: 10rpx;
		}

		.product {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			gap: 10rpx;
			justify-content: space-between;
			margin: 20rpx 0;

			.product-item {
				width: calc(50% - 15rpx);
				height: 300rpx;
				border-radius: 12rpx;
				overflow: hidden;
				box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				align-content: space-between;
				gap: 10rpx;

				.item-img {
					width: 80%;
					height: 60%;
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
				}
				.item-name {
					font-size: 30rpx;
				}
				.item-footer {
					flex: 1;
					display: flex;
					flex-wrap: nowrap;
					height: 40rpx;
					font-size: 26rpx;
					gap: 20rpx;
					justify-content: space-between;
					.left {
						.sale {
							font-size: 42rpx;
							font-weight: 700;
							display: inline;
						}
					}
					.right {
						width: 150rpx;
						height: 60rpx;
						background-image: url(@/static/index/recommend/立即抢购.png);
						background-position: center;
						background-repeat: no-repeat;
						background-size: contain;
					}
				}
			}
		}
	}
}
</style>
