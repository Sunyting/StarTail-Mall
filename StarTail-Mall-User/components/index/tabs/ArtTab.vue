<script setup>
import Banner from '@/components/index/Banner.vue';
import Icons from '@/components/index/Icons.vue';
import Hot from '@/components/index/Hot.vue';
import Shop from '@/components/index/Shop.vue';
import Card from '@/components/common/Card.vue';
import Commodity from '@/components/common/Commodity.vue';
import http from '@/utils/api/request.js';

import { onLoad, onShow } from '@dcloudio/uni-app';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const bannerImgUrl = ref('');
const iconList = ref([]);
const hotList = ref([]);
const shopData = ref({});
const recommendList = ref([]);
const newProductList = ref([]);
const flashSaleList = ref([]);
const topicList = ref([]);
const brandList = ref([]);
const categoryList = ref([]);
const reviewList = ref([]);
const activityList = ref([]);
const Flag = ref(false);

// 新增状态管理
const currentTime = ref(new Date());
const flashSaleEndTime = ref(new Date(Date.now() + 2 * 60 * 60 * 1000)); // 2小时后结束
const userInfo = ref({});
const favoriteList = ref([]);
const viewHistory = ref([]);
const searchHistory = ref(['手绘', '油画', '水彩', '素描']);

// 计算属性
const flashSaleCountdown = computed(() => {
	const diff = flashSaleEndTime.value.getTime() - currentTime.value.getTime();
	if (diff <= 0) return '活动已结束';

	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
});

const isLogin = computed(() => {
	return Object.keys(userInfo.value).length > 0;
});

// 定时器
let countdownTimer = null;

// 方法函数
const init = () => {
	http.request({
		url: '/index_list/art'
	})
		.then((res) => {
			bannerImgUrl.value = res.data.bannerImgUrl;
			iconList.value = res.data.iconList;
			hotList.value = res.data.hotList;
			shopData.value = res.data.shopData;
			recommendList.value = res.data.recommendList;
			newProductList.value = res.data.newProductList || [];
			flashSaleList.value = res.data.flashSaleList || [];
			topicList.value = res.data.topicList || [];
			brandList.value = res.data.brandList || [];
			categoryList.value = res.data.categoryList || [];
			reviewList.value = res.data.reviewList || [];
			activityList.value = res.data.activityList || [];
			Flag.value = true;
		})
		.catch((error) => {
			console.error(error);
			uni.showToast({
				title: '请求失败'
			});
		});
};

const loadUserData = () => {
	// 模拟加载用户数据
	const token = uni.getStorageSync('token');
	if (token) {
		userInfo.value = {
			id: 1,
			nickname: '艺术爱好者',
			avatar: '/static/avatar.png',
			level: 'VIP'
		};
		favoriteList.value = uni.getStorageSync('favoriteList') || [];
		viewHistory.value = uni.getStorageSync('viewHistory') || [];
	}
};

const startCountdown = () => {
	countdownTimer = setInterval(() => {
		currentTime.value = new Date();
	}, 1000);
};

const handleSearch = (keyword) => {
	if (keyword && !searchHistory.value.includes(keyword)) {
		searchHistory.value.unshift(keyword);
		if (searchHistory.value.length > 10) {
			searchHistory.value.pop();
		}
		uni.setStorageSync('searchHistory', searchHistory.value);
	}
	uni.navigateTo({
		url: `/pages/Search/Search?keyword=${encodeURIComponent(keyword)}`
	});
};

const handleCategoryClick = (category) => {
	uni.navigateTo({
		url: `/pages/category/category?id=${category.id}&name=${encodeURIComponent(category.name)}`
	});
};

const handleBrandClick = (brand) => {
	uni.navigateTo({
		url: `/pages/brand/brand?id=${brand.id}`
	});
};

const handleTopicClick = (topic) => {
	uni.navigateTo({
		url: `/pages/topic/topic?id=${topic.id}`
	});
};

const handleActivityClick = (activity) => {
	uni.navigateTo({
		url: `/pages/activity/activity?id=${activity.id}`
	});
};

const handleReviewClick = (review) => {
	uni.navigateTo({
		url: `/pages/review/review?id=${review.id}`
	});
};

const addToFavorite = (item) => {
	if (!isLogin.value) {
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return;
	}

	const index = favoriteList.value.findIndex(fav => fav.id === item.id);
	if (index > -1) {
		favoriteList.value.splice(index, 1);
		uni.showToast({
			title: '已取消收藏',
			icon: 'none'
		});
	} else {
		favoriteList.value.push(item);
		uni.showToast({
			title: '收藏成功',
			icon: 'success'
		});
	}
	uni.setStorageSync('favoriteList', favoriteList.value);
};

const isFavorite = (item) => {
	return favoriteList.value.some(fav => fav.id === item.id);
};

const handlePullDownRefresh = () => {
	init();
	loadUserData();
	uni.stopPullDownRefresh();
};

const handleReachBottom = () => {
	// 加载更多推荐商品
	http.request({
		url: '/index_list/art/more',
		data: {
			page: Math.floor(recommendList.value.length / 20) + 1
		}
	}).then((res) => {
		if (res.data.list && res.data.list.length > 0) {
			recommendList.value.push(...res.data.list);
		}
	}).catch((error) => {
		console.error('加载更多失败:', error);
	});
};

// 生命周期
onLoad(() => {
	init();
	loadUserData();
	startCountdown();
});

onMounted(() => {
	// 页面加载完成后的操作
	uni.onPullDownRefresh(handlePullDownRefresh);
	uni.onReachBottom(handleReachBottom);
});

onUnmounted(() => {
	if (countdownTimer) {
		clearInterval(countdownTimer);
	}
});
</script>

<template>
	<view class="art-page" v-if="Flag">
		<!-- 顶部搜索栏 -->
		<view class="search-header">
			<view class="search-box" @click="handleSearch('')">
				<uni-icons type="search" size="16" color="#999"></uni-icons>
				<text class="search-placeholder">搜索艺术品、画家、风格...</text>
			</view>
			<view class="user-info" v-if="isLogin">
				<image :src="userInfo.avatar" class="avatar"></image>
				<text class="level">{{ userInfo.level }}</text>
			</view>
		</view>

		<!-- 快速搜索标签 -->
		<view class="quick-search">
			<text class="quick-search-title">热门搜索：</text>
			<view class="search-tags">
				<text
					v-for="(tag, index) in searchHistory.slice(0, 4)"
					:key="index"
					class="search-tag"
					@click="handleSearch(tag)"
				>
					{{ tag }}
				</text>
			</view>
		</view>

		<!-- Banner轮播 -->
		<Banner :bannerImgUrl="bannerImgUrl" />

		<!-- 快捷入口图标 -->
		<Icons :iconList="iconList" />

		<!-- 艺术分类导航 -->
		<Card name="艺术分类" />
		<view class="category-grid">
			<view
				v-for="(category, index) in categoryList.slice(0, 8)"
				:key="index"
				class="category-item"
				@click="handleCategoryClick(category)"
			>
				<image :src="category.icon" class="category-icon"></image>
				<text class="category-name">{{ category.name }}</text>
				<text class="category-count">{{ category.count }}+</text>
			</view>
		</view>

		<!-- 限时抢购 -->
		<view class="flash-sale-section">
			<view class="flash-sale-header">
				<view class="flash-sale-title">
					<image src="/static/flash-sale-icon.png" class="flash-icon"></image>
					<text>限时抢购</text>
				</view>
				<view class="countdown">
					<text class="countdown-text">距结束</text>
					<text class="countdown-time">{{ flashSaleCountdown }}</text>
				</view>
				<text class="more-text">更多 ></text>
			</view>
			<scroll-view scroll-x class="flash-sale-list">
				<view class="flash-sale-items">
					<view
						v-for="(item, index) in flashSaleList"
						:key="index"
						class="flash-sale-item"
					>
						<image :src="item.image" class="flash-item-image"></image>
						<view class="flash-item-info">
							<text class="flash-item-title">{{ item.title }}</text>
							<view class="flash-price">
								<text class="current-price">￥{{ item.flashPrice }}</text>
								<text class="original-price">￥{{ item.originalPrice }}</text>
							</view>
							<view class="progress-bar">
								<view class="progress" :style="{width: item.progress + '%'}"></view>
							</view>
							<text class="progress-text">已抢{{ item.progress }}%</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<!-- 新品首发 -->
		<Card name="新品首发" />
		<view class="new-products">
			<view
				v-for="(product, index) in newProductList.slice(0, 4)"
				:key="index"
				class="new-product-item"
			>
				<image :src="product.image" class="new-product-image"></image>
				<view class="new-product-info">
					<text class="new-product-title">{{ product.title }}</text>
					<text class="new-product-artist">{{ product.artist }}</text>
					<text class="new-product-price">￥{{ product.price }}</text>
					<view class="new-product-tag">NEW</view>
				</view>
				<view
					class="favorite-btn"
					:class="{ 'favorited': isFavorite(product) }"
					@click.stop="addToFavorite(product)"
				>
					<uni-icons :type="isFavorite(product) ? 'heart-filled' : 'heart'" size="16"></uni-icons>
				</view>
			</view>
		</view>

		<!-- 热销爆品 -->
		<Card name="热销爆品" />
		<Hot :hotList="hotList" />

		<!-- 知名品牌 -->
		<Card name="知名品牌" />
		<scroll-view scroll-x class="brand-scroll">
			<view class="brand-list">
				<view
					v-for="(brand, index) in brandList"
					:key="index"
					class="brand-item"
					@click="handleBrandClick(brand)"
				>
					<image :src="brand.logo" class="brand-logo"></image>
					<text class="brand-name">{{ brand.name }}</text>
				</view>
			</view>
		</scroll-view>

		<!-- 专题推荐 -->
		<Card name="专题推荐" />
		<view class="topic-list">
			<view
				v-for="(topic, index) in topicList.slice(0, 3)"
				:key="index"
				class="topic-item"
				@click="handleTopicClick(topic)"
			>
				<image :src="topic.banner" class="topic-banner"></image>
				<view class="topic-overlay">
					<text class="topic-title">{{ topic.title }}</text>
					<text class="topic-subtitle">{{ topic.subtitle }}</text>
					<view class="topic-stats">
						<text>{{ topic.viewCount }}人浏览</text>
						<text>{{ topic.collectCount }}人收藏</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 推荐店铺 -->
		<Card name="推荐店铺" />
		<Shop :shopData="shopData" />

		<!-- 用户评价 -->
		<Card name="用户评价" />
		<scroll-view scroll-x class="review-scroll">
			<view class="review-list">
				<view
					v-for="(review, index) in reviewList"
					:key="index"
					class="review-item"
					@click="handleReviewClick(review)"
				>
					<view class="review-header">
						<image :src="review.userAvatar" class="review-avatar"></image>
						<view class="review-user">
							<text class="review-username">{{ review.username }}</text>
							<view class="review-rating">
								<uni-icons
									v-for="star in 5"
									:key="star"
									type="star-filled"
									size="12"
									:color="star <= review.rating ? '#FFD700' : '#E0E0E0'"
								></uni-icons>
							</view>
						</view>
					</view>
					<text class="review-content">{{ review.content }}</text>
					<image v-if="review.image" :src="review.image" class="review-image"></image>
				</view>
			</view>
		</scroll-view>

		<!-- 活动专区 -->
		<Card name="活动专区" />
		<view class="activity-list">
			<view
				v-for="(activity, index) in activityList"
				:key="index"
				class="activity-item"
				@click="handleActivityClick(activity)"
			>
				<image :src="activity.banner" class="activity-banner"></image>
				<view class="activity-badge" :style="{backgroundColor: activity.badgeColor}">
					{{ activity.badge }}
				</view>
			</view>
		</view>

		<!-- 为您推荐 -->
		<Card name="为您推荐" />
		<Commodity :dataList="recommendList" />

		<!-- 底部提示 -->
		<view class="bottom-tip">
			<text>— 已为您推荐 {{ recommendList.length }} 件艺术品 —</text>
		</view>
	</view>

	<!-- 加载状态 -->
	<view v-else class="loading-container">
		<view class="loading-spinner"></view>
		<text class="loading-text">精彩内容加载中...</text>
	</view>
</template>

<style lang="scss" scoped>
.art-page {
	background-color: #f8f9fa;
	min-height: 100vh;
}

/* 搜索头部 */
.search-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 30rpx 10rpx;
	background: #fff;

	.search-box {
		flex: 1;
		display: flex;
		align-items: center;
		background: #f5f5f5;
		border-radius: 50rpx;
		padding: 20rpx 30rpx;
		margin-right: 20rpx;

		.search-placeholder {
			margin-left: 20rpx;
			color: #999;
			font-size: 28rpx;
		}
	}

	.user-info {
		display: flex;
		align-items: center;

		.avatar {
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
		}

		.level {
			margin-left: 10rpx;
			background: linear-gradient(45deg, #FFD700, #FFA500);
			color: #fff;
			padding: 4rpx 12rpx;
			border-radius: 20rpx;
			font-size: 20rpx;
		}
	}
}

/* 快速搜索 */
.quick-search {
	display: flex;
	align-items: center;
	padding: 0 30rpx 20rpx;
	background: #fff;

	.quick-search-title {
		font-size: 24rpx;
		color: #666;
		margin-right: 20rpx;
	}

	.search-tags {
		display: flex;
		flex-wrap: wrap;

		.search-tag {
			background: #f0f0f0;
			padding: 8rpx 16rpx;
			border-radius: 20rpx;
			margin-right: 20rpx;
			font-size: 24rpx;
			color: #666;
		}
	}
}

/* 分类网格 */
.category-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 20rpx;
	padding: 30rpx;
	background: #fff;

	.category-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		.category-icon {
			width: 80rpx;
			height: 80rpx;
			border-radius: 16rpx;
			margin-bottom: 10rpx;
		}

		.category-name {
			font-size: 24rpx;
			color: #333;
			margin-bottom: 4rpx;
		}

		.category-count {
			font-size: 20rpx;
			color: #999;
		}
	}
}

/* 限时抢购 */
.flash-sale-section {
	background: #fff;
	margin: 20rpx 0;

	.flash-sale-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30rpx;

		.flash-sale-title {
			display: flex;
			align-items: center;
			font-size: 32rpx;
			font-weight: bold;
			color: #ff4757;

			.flash-icon {
				width: 40rpx;
				height: 40rpx;
				margin-right: 10rpx;
			}
		}

		.countdown {
			display: flex;
			align-items: center;

			.countdown-text {
				font-size: 24rpx;
				color: #666;
				margin-right: 10rpx;
			}

			.countdown-time {
				background: #ff4757;
				color: #fff;
				padding: 8rpx 16rpx;
				border-radius: 8rpx;
				font-size: 24rpx;
				font-weight: bold;
				letter-spacing: 2rpx;
			}
		}

		.more-text {
			font-size: 24rpx;
			color: #666;
		}
	}

	.flash-sale-list {
		white-space: nowrap;

		.flash-sale-items {
			display: inline-flex;
			padding-left: 30rpx;

			.flash-sale-item {
				width: 240rpx;
				margin-right: 20rpx;
				background: #fff;
				border-radius: 16rpx;
				overflow: hidden;

				.flash-item-image {
					width: 100%;
					height: 240rpx;
				}

				.flash-item-info {
					padding: 20rpx;

					.flash-item-title {
						font-size: 24rpx;
						color: #333;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
						margin-bottom: 10rpx;
					}

					.flash-price {
						margin-bottom: 15rpx;

						.current-price {
							font-size: 28rpx;
							color: #ff4757;
							font-weight: bold;
							margin-right: 10rpx;
						}

						.original-price {
							font-size: 20rpx;
							color: #999;
							text-decoration: line-through;
						}
					}

					.progress-bar {
						height: 8rpx;
						background: #f0f0f0;
						border-radius: 4rpx;
						overflow: hidden;
						margin-bottom: 8rpx;

						.progress {
							height: 100%;
							background: linear-gradient(90deg, #ff6b6b, #ff4757);
							border-radius: 4rpx;
							transition: width 0.3s ease;
						}
					}

					.progress-text {
						font-size: 20rpx;
						color: #ff4757;
					}
				}
			}
		}
	}
}

/* 新品首发 */
.new-products {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20rpx;
	padding: 0 30rpx 30rpx;
	background: #fff;

	.new-product-item {
		position: relative;
		border-radius: 16rpx;
		overflow: hidden;
		box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1);

		.new-product-image {
			width: 100%;
			height: 300rpx;
		}

		.new-product-info {
			position: relative;
			padding: 20rpx;
			background: linear-gradient(transparent, rgba(0,0,0,0.7));

			.new-product-title {
				font-size: 26rpx;
				color: #333;
				font-weight: bold;
				margin-bottom: 8rpx;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}

			.new-product-artist {
				font-size: 22rpx;
				color: #666;
				margin-bottom: 10rpx;
			}

			.new-product-price {
				font-size: 28rpx;
				color: #ff4757;
				font-weight: bold;
			}

			.new-product-tag {
				position: absolute;
				top: -140rpx;
				right: 20rpx;
				background: linear-gradient(45deg, #ff6b6b, #ff4757);
				color: #fff;
				padding: 8rpx 16rpx;
				border-radius: 20rpx;
				font-size: 20rpx;
				font-weight: bold;
			}
		}

		.favorite-btn {
			position: absolute;
			top: 20rpx;
			right: 20rpx;
			width: 60rpx;
			height: 60rpx;
			background: rgba(255,255,255,0.9);
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;

			&.favorited {
				background: rgba(255, 71, 87, 0.1);
			}
		}
	}
}

/* 品牌列表 */
.brand-scroll {
	background: #fff;
	padding: 30rpx 0;

	.brand-list {
		display: inline-flex;
		padding-left: 30rpx;

		.brand-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-right: 40rpx;
			min-width: 120rpx;

			.brand-logo {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
				border: 2rpx solid #f0f0f0;
				margin-bottom: 10rpx;
			}

			.brand-name {
				font-size: 24rpx;
				color: #333;
				text-align: center;
			}
		}
	}
}

/* 专题推荐 */
.topic-list {
	padding: 0 30rpx 30rpx;
	background: #fff;

	.topic-item {
		position: relative;
		border-radius: 16rpx;
		overflow: hidden;
		margin-bottom: 20rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.topic-banner {
			width: 100%;
			height: 300rpx;
		}

		.topic-overlay {
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			background: linear-gradient(transparent, rgba(0,0,0,0.7));
			padding: 40rpx 30rpx 30rpx;
			color: #fff;

			.topic-title {
				font-size: 32rpx;
				font-weight: bold;
				margin-bottom: 10rpx;
			}

			.topic-subtitle {
				font-size: 24rpx;
				opacity: 0.9;
				margin-bottom: 15rpx;
			}

			.topic-stats {
				display: flex;
				font-size: 20rpx;
				opacity: 0.8;

				text:first-child {
					margin-right: 30rpx;
				}
			}
		}
	}
}

/* 用户评价 */
.review-scroll {
	background: #fff;
	padding: 20rpx 0 30rpx;

	.review-list {
		display: inline-flex;
		padding-left: 30rpx;

		.review-item {
			width: 500rpx;
			background: #f8f9fa;
			border-radius: 16rpx;
			padding: 30rpx;
			margin-right: 20rpx;

			.review-header {
				display: flex;
				align-items: center;
				margin-bottom: 20rpx;

				.review-avatar {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					margin-right: 20rpx;
				}

				.review-user {
					flex: 1;

					.review-username {
						font-size: 26rpx;
						color: #333;
						font-weight: bold;
						margin-bottom: 8rpx;
					}

					.review-rating {
						display: flex;
					}
				}
			}

			.review-content {
				font-size: 24rpx;
				color: #666;
				line-height: 1.6;
				margin-bottom: 20rpx;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}

			.review-image {
				width: 100%;
				height: 200rpx;
				border-radius: 12rpx;
			}
		}
	}
}

/* 活动专区 */
.activity-list {
	padding: 0 30rpx 30rpx;
	background: #fff;

	.activity-item {
		position: relative;
		border-radius: 16rpx;
		overflow: hidden;
		margin-bottom: 20rpx;

		&:last-child {
			margin-bottom: 0;
		}

		.activity-banner {
			width: 100%;
			height: 200rpx;
		}

		.activity-badge {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
			color: #fff;
			padding: 8rpx 16rpx;
			border-radius: 20rpx;
			font-size: 20rpx;
			font-weight: bold;
		}
	}
}

/* 底部提示 */
.bottom-tip {
	text-align: center;
	padding: 40rpx;
	color: #999;
	font-size: 24rpx;
	background: #fff;
	margin-top: 20rpx;
}

/* 加载状态 */
.loading-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;

	.loading-spinner {
		width: 60rpx;
		height: 60rpx;
		border: 4rpx solid #f3f3f3;
		border-top: 4rpx solid #007aff;
		border-radius: 50%;
		animation: spin 1s linear infinite;
		margin-bottom: 30rpx;
	}

	.loading-text {
		font-size: 28rpx;
		color: #666;
	}
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

/* 响应式适配 */
@media screen and (max-width: 750rpx) {
	.category-grid {
		grid-template-columns: repeat(4, 1fr);
	}

	.new-products {
		grid-template-columns: 1fr;
	}
}
</style>
