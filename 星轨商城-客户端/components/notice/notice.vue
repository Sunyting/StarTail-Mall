<template>
	<view class="notice">
		<view class="notice-left"></view>
		<view class="notice-content">
			<swiper class="swiper" vertical autoplay :interval="3000" :duration="1000" circular :disable-touch="true">
				<swiper-item class="swiper-item">
					<view class="item-text">测试内容11111111111111111111111111</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item-text">测试内容22222222222221111111111111</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item-text">测试内容33333333333331111111111111</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item-text">测试内容44444444444441111111111111</view>
				</swiper-item>
				<swiper-item class="swiper-item">
					<view class="item-text">测试内容55555555555551111111111111</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice-right"></view>
	</view>
</template>

<style lang="scss" scoped>
.notice {
	width: 690rpx;
	height: 50rpx; /* 增加高度以便更好地显示 */
	line-height: 50rpx;
	padding: 10rpx 10rpx;
	margin: 10rpx 0rpx;
	display: flex;
	gap: 15rpx;
	background-color: #f3fffd;
	// box-sizing: border-box;

	.notice-left {
		width: 50rpx;
		height: 50rpx;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('./公告.png');
	}

	.notice-content {
		flex: 1;
		height: 50rpx;
		overflow: hidden;

		.swiper {
			height: 100%;
			width: 100%;

			.swiper-item {
				display: flex;
				align-items: center;
				height: 50rpx;
				width: 100%;
				box-sizing: border-box;

				.item-text {
					width: 100%;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 28rpx;
					font-weight: 600;
					color: #333;
					// overflow: hidden;
					// text-overflow: ellipsis;
					// white-space: nowrap;
					// box-sizing: border-box;
					@include text-ellipsis(1);
				}
			}
		}
	}

	.notice-right {
		width: 40rpx;
		height: 40rpx;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url('./猫爪.png');
	}
}
</style>
