<script setup>
import { ref, computed } from 'vue';
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
	recommendData: {
		type: Object,
		default: () => ({})
	}
});

// 计算属性，提供默认值以防止空数据问题
const safeRecommendData = computed(() => {
	return {
		bigImgUrl: props.recommendData.bigImgUrl || '',
		List: props.recommendData.List || []
	};
});
</script>

<template>
	<view class="page-content">
		<view class="recommend-item">
			<!-- 大图片使用image标签 -->
			<image v-if="safeRecommendData.bigImgUrl" class="item-big" :src="safeRecommendData.bigImgUrl" mode="widthfill"></image>
			<view class="product">
				<view class="product-item" v-for="(item, index) in safeRecommendData.List" :key="index">
					<!-- 使用image标签替代背景图片，微信小程序对backgroundImage支持有限 -->
					<image v-if="item.imgUrl" class="item-img" :src="item.imgUrl" mode="widthFill"></image>
					<view class="item-name">{{ item.name }}</view>
					<view class="item-footer">
						<view class="left">
							￥
							<p class="sale">{{ item.price }}</p>
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
				height: 400rpx;
				border-radius: 12rpx;
				overflow: hidden;
				box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
				text-align: center;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: 10rpx;

				.item-img {
					width: 100%;
					height: 240rpx;
				}
				.item-img image {
					width: 100%;
					height: 100%;
					object-fit: cover;
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
						/* 微信小程序需要使用绝对路径 */
						background-image: url(/static/index/recommend/立即抢购.png);
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
