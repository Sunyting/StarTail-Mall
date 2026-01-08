<script setup>
import { ref, onMounted } from 'vue';
import { useNavBarStyle } from '../../utils/system.js';
import notice from '../../components/notice/notice.vue';
const { statusBarHeight } = useNavBarStyle();
const flag = true;
onMounted(() => {
	console.log('1' + statusBarHeight);
});
const searchValue = ref('');
const handleSearch = () => {
	console.log('search');
};
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar class="fixed-nav" :flag="flag" title="Startail"></mobile-nav-bar>

		<view class="input-wrap fixed-search">
			<uni-easyinput
				class="search"
				suffixIcon="search"
				v-model.trim="searchValue"
				placeholder="请搜索商品~"
				@iconClick="handleSearch"
				@confirm="handleSearch"
			></uni-easyinput>
		</view>

		<!-- 添加占位元素，确保页面内容不会被遮挡 -->
		<view class="header-placeholder">
			<view class="nav-placeholder"></view>
			<view class="search-placeholder"></view>
		</view>

		<view class="page-content">
			<view class="banner">
				<swiper class="swiper" circular indicator-dots indicator-color="rgba(255,255,255,.5)" indicator-active-color="#f99cb2" autoplay interval="3000">
					<swiper-item class="swiper-item" v-for="i in 5" :key="i">
						<view class="item-image" :style="{ backgroundImage: `url(/static/banner/${i}.png)` }"></view>
					</swiper-item>
				</swiper>
			</view>
			<notice></notice>
		</view>
		<view v-for="i in 50">{{ i }}</view>
	</view>
</template>

<style lang="scss" scoped>
.page-wrap {
	width: 100%;
	min-height: 100vh;
	.fixed-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 998;
	}
	.fixed-search {
		position: fixed;
		top: 135rpx;
		left: 0;
		width: 100%;
		z-index: 999;
		padding: 0 20rpx;
		box-sizing: border-box;

		.search {
			width: 100%;
			:deep(.is-input-border) {
				border-radius: 50px;
				border-color: $uni-color-primary !important;
			}
		}
	}

	.header-placeholder {
		width: 100%;
		.nav-placeholder {
			height: 200rpx; // 根据你的导航栏实际高度调整
		}
		.search-placeholder {
			height: 10rpx; // 根据你的搜索框实际高度调整
		}
	}

	.page-content {
		padding: 10rpx 20rpx;
		width: 100%;

		.banner {
			width: 100%;
			position: relative; // 确保层级在固定元素下方
			z-index: 1;

			.swiper {
				width: 100%;
				height: 380rpx;

				.swiper-item {
					width: 100%;

					.item-image {
						width: 710rpx;
						height: 380rpx;
						border-radius: 20rpx;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
					}
				}
			}
		}
	}
}
</style>
