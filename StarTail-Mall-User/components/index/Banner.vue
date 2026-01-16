<script setup>
const props = defineProps({
	bannerImgUrl: {
		type: String
	}
});
</script>

<template>
	<view class="banner">
		<image class="img" :src="`${props.bannerImgUrl}`" alt="" mode="aspectFill" />
	</view>
</template>

<style lang="scss" scoped>
.banner {
	width: 100%;
	height: 400rpx;
	.img {
		width: 100%;
		height: 100%;
	}
}
</style>
