<script setup>
const props = defineProps({
	name: String
});
</script>

<template>
	<view class="container">
		-
		<view class="name">{{ props.name }}</view>
		-
	</view>
</template>

<style lang="scss" scoped>
.container {
	padding: 15rpx 0;
	height: 40rpx;
	font-size: 32rpx;
	font-weight: 700;
	text-align: center;
	line-height: 40rpx;
	.name {
		display: inline;
	}
}
</style>
