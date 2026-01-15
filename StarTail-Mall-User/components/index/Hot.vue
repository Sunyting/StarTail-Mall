<script setup>
import { ref } from 'vue';
import Commodity from '@/components/common/Commodity';
const hotList = ref([
	{
		id: 1,
		imgUrl: '/static/index/hot/首饰珠宝/hot1.png',
		name: '周六福字母转运珠黄金定价足金情侣款diy手链手串手绳送新年礼物',
		nprice: '611',
		oprice: '655',
		discount: '9.6'
	},
	{
		id: 2,
		imgUrl: '/static/index/hot/首饰珠宝/hot2.png',
		name: '周六福S925银珍珠耳饰女流光温柔法式优雅送女友新年礼物',
		nprice: '198',
		oprice: '218',
		discount: '9.6'
	},
	{
		id: 3,
		imgUrl: '/static/index/hot/首饰珠宝/hot3.png',
		name: '周六福半山半水玉髓手镯浅白绿宽条新中式国风新年礼物送女友',
		nprice: '409',
		oprice: '800',
		discount: '5'
	}
]);
</script>

<template>
	<Commodity :dataList="hotList" :itemwidth="250" />
</template>

<style lang="scss" scoped></style>
