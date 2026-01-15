<script setup>
import { ref } from 'vue';
import Commodity from '@/components/common/Commodity';
const shopList = ref([
	{
		id: 1,
		imgUrl: '/static/index/shop/1/1.png',
		name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
		nprice: '3490',
		oprice: '7080',
		discount: '4.9'
	},
	{
		id: 2,
		imgUrl: '/static/index/shop/1/2.png',
		name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
		nprice: '9840',
		oprice: '14000',
		discount: '3.5'
	},
	{
		id: 3,
		imgUrl: '/static/index/shop/1/3.png',
		name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
		nprice: '25800',
		oprice: '30066',
		discount: '7.9'
	},
	{
		id: 1,
		imgUrl: '/static/index/shop/1/1.png',
		name: '周生生三丽鸥家族珠光萌动足金黄金Hello Kitty珍珠手链女95958B',
		nprice: '3490',
		oprice: '7080',
		discount: '4.9'
	},
	{
		id: 2,
		imgUrl: '/static/index/shop/1/2.png',
		name: '周生生集团旗下品牌EMPHASIS融」系列18K金钻石项链94143N',
		nprice: '9840',
		oprice: '14000',
		discount: '3.5'
	},
	{
		id: 3,
		imgUrl: '/static/index/shop/1/3.png',
		name: '周生生18K白色黄金YuYu系列蓝宝石戒指95808R预订',
		nprice: '25800',
		oprice: '30066',
		discount: '7.9'
	}
]);
</script>

<template>
	<view class="shop">
		<view class="image"></view>
		<scroll-view class="scroll-content" scroll-x="true">
			<view class="commodity-scroll-container">
				<Commodity :dataList="shopList" :itemwidth="250" flexWrap="nowrap" />
			</view>
		</scroll-view>
	</view>
</template>

<style lang="scss" scoped>
.shop {
	width: 100%;

	.image {
		width: 100%;
		height: 350rpx;
		background-image: url(@/static/index/shop/1/big.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
	}

	.scroll-content {
		width: 100%;

		.commodity-scroll-container {
			display: inline-flex;
			padding: 5rpx 10rpx;
			width: auto;

			:deep(.container) {
				display: inline-flex;
				flex-wrap: nowrap;
			}

			:deep(.commodity-wrap) {
				margin-right: 20rpx;
				flex-shrink: 0;

				&:last-child {
					margin-right: 0;
				}

				.content {
					white-space: normal;
				}
			}
		}
	}
}
</style>
