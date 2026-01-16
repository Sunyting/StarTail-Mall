<script setup>
import Banner from '@/components/index/Banner.vue';
import Icons from '@/components/index/Icons.vue';
import Hot from '@/components/index/Hot.vue';
import Shop from '@/components/index/Shop.vue';
import Card from '@/components/common/Card.vue';
import Commodity from '@/components/common/Commodity.vue';

import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

const bannerImgUrl = ref('');
const iconList = ref([]);
const hotList = ref([]);
const shopData = ref({});
const recommendList = ref([]);
const Flag = ref(false);
onLoad(() => {
	uni.request({
		url: 'http://localhost:3001/api/index_list/jewelry',
		success: (res) => {
			bannerImgUrl.value = res.data.data.bannerImgUrl;
			iconList.value = res.data.data.iconList;
			hotList.value = res.data.data.hotList;
			shopData.value = res.data.data.shopData;
			recommendList.value = res.data.data.recommendList;
			Flag.value = true;
		}
	});
});
</script>

<template>
	<view class="page-scroll" v-if="Flag">
		<Banner :bannerImgUrl="bannerImgUrl" />
		<Icons :iconList="iconList" />
		<Card name="热销爆品" />
		<Hot :hotList="hotList" />
		<Card name="推荐店铺" />
		<Shop :shopData="shopData" />
		<Card name="为您推荐" />
		<Commodity :dataList="recommendList" />
	</view>
</template>

<style lang="scss" scoped></style>
