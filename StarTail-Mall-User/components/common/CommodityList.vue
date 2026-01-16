<!-- CommodityList.vue -->
<script setup>
import { ref } from 'vue';
import { onLoad, onShow } from '@dcloudio/uni-app';
import Commodity from './Commodity.vue';
let commodityData = ref();
const init = () => {
	uni.request({
		url: 'http://localhost:3001/api/index_list/recommend',
		success: (res) => {
			commodityData.value = res.data.data.commodityData.List;
		}
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
