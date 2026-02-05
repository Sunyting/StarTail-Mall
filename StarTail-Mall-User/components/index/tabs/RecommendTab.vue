<script setup>
import indexSwiper from '@/components/index/Swiper.vue';
import Notice from '@/components/index/notice/Notice.vue';
import Recommend from '@/components/index/Recommend.vue';
import Card from '@/components/common/Card.vue';
import Commodity from '@/components/common/Commodity.vue';
import http from '@/utils/api/request.js';

import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue';

const swiperList = ref([]);
const noticeList = ref([]);
const recommendData = ref({});
const maybeLikeList = ref([]);
const gameList = ref([]);
const artList = ref([]);
const jokeList = ref([]);
const Flag = ref(false);

const init = () => {
	http.request({
		url: '/index_list/recommend'
	})
		.then((res) => {
			swiperList.value = res.data.swiperData.List;
			noticeList.value = res.data.noticeData.List;
			recommendData.value = res.data.recommendData;
			maybeLikeList.value = res.data.maybeLikeList;
			gameList.value = res.data.gameList;
			artList.value = res.data.artList;
			jokeList.value = res.data.jokeList;
			Flag.value = true;
		})
		.catch((error) => {
			console.error(error);
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
	<view class="page-scroll" v-if="Flag">
		<view class="page-head">
			<indexSwiper :swiperData="swiperList" />
			<Notice :noticeData="noticeList" />
		</view>
		<view class="recommend">
			<Recommend :recommendData="recommendData" />
		</view>
		<view class="category-list">
			<Card name="猜你喜欢" />
			<Commodity :dataList="maybeLikeList" />
			<Card name="游戏周边" />
			<Commodity :dataList="gameList" />
			<Card name="美术画集" />
			<Commodity :dataList="artList" />
			<Card name="生活调剂" />
			<Commodity :dataList="jokeList" />
		</view>
	</view>
</template>

<style lang="scss" scoped>
.page-scroll {
	.page-head {
		width: 98%;
		padding: 10rpx;
		text-align: center;
	}
	.recommend {
		padding: 0 10rpx;
	}
}
</style>
