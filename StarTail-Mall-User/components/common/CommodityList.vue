<!-- CommodityList.vue -->
<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import Commodity from './Commodity.vue';
import http from '@/utils/api/request.js';
let commodityData = ref();
const init = () => {
	http.request({
		url: '/index_list/recommend'
	})
		.then((res) => {
			commodityData.value = res.data.data.commodityData.List;
		})
		.catch(() => {
			uni.showToast({
				title: '请求失败'
			});
		});
};

onLoad(() => {
	init();
});
</script>

<template>
	<view class="commodity-list">
		<Commodity :dataList="commodityData" />
	</view>
</template>

<style lang="scss" scoped>
.commodity-list {
	box-sizing: border-box;
}
</style>
