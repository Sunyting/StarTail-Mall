<script setup>
import { ref } from 'vue';
import Commodity from '@/components/common/Commodity';
const props = defineProps({
	shopData: {
		type: Object,
		default: () => ({})
	}
});
console.log(props.shopData);
</script>

<template>
	<view class="shop">
		<view class="image" :style="{ backgroundImage: `url(${props.shopData.shopImgUrl})` }"></view>
		<scroll-view class="scroll-content" scroll-x="true" :show-scrollbar="false">
			<view class="commodity-scroll-container">
				<Commodity :dataList="props.shopData.shopList" :itemwidth="250" flexWrap="nowrap" />
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
