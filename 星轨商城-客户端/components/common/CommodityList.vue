<!-- CommodityList.vue -->
<script setup>
import { ref } from 'vue';
import Commodity from './Commodity.vue';
const commodityList = ref([
	{
		id: 1,
		imgUrl: '/static/commodity-item/1.png',
		name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
		nprice: '349',
		oprice: '708',
		discount: '4.9'
	},
	{
		id: 2,
		imgUrl: '/static/commodity-item/2.png',
		name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
		nprice: '349',
		oprice: '708',
		discount: '4.9'
	},
	{
		id: 3,
		imgUrl: '/static/commodity-item/2.png',
		name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
		nprice: '349',
		oprice: '708',
		discount: '4.9'
	},
	{
		id: 4,
		imgUrl: '/static/commodity-item/1.png',
		name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
		nprice: '349',
		oprice: '708',
		discount: '4.9'
	}
]);
</script>

<template>
	<view class="commodity-list">
		<Commodity :dataList="commodityList" />
	</view>
</template>

<style lang="scss" scoped>
.commodity-list {
	box-sizing: border-box;
}
</style>
