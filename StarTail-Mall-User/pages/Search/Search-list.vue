<script setup>
import { ref, onLoad } from '@dcloudio/uni-app';
import Commodity from '@/components/common/Commodity.vue';
import http from '@/utils/api/request.js';

const keyword = ref('');
const searchResults = ref([]);
const loading = ref(true);
const noResults = ref(false);

// ========== 排序相关 ==========
const sortTypes = [
	{ label: '综合', value: 'comprehensive' },
	{ label: '价格', value: 'price' },
	{ label: '折扣', value: 'discount' }
];
const currentSort = ref('comprehensive');
const sortOrder = ref('desc'); // desc:降序 asc:升序

// ========== 筛选相关 ==========
const showFilterPopup = ref(false);
const brands = ref([]); // 品牌列表
const selectedBrands = ref([]);
const priceRange = ref({ min: '', max: '' });
const discountRange = ref({ min: '', max: '' });

// 接收参数
onLoad((options) => {
	if (options.keyword) {
		keyword.value = options.keyword;
		performSearch(options.keyword);
	}
});

// 执行搜索
const performSearch = async (searchKeyword) => {
	loading.value = true;
	noResults.value = false;

	try {
		// 这里调用你的实际搜索API
		// const res = await http.request({
		// 	url: '/search',
		// 	data: { keyword: searchKeyword }
		// })
		// searchResults.value = res.data

		// 模拟搜索
		await mockSearch(searchKeyword);

		// 初始化品牌列表
		initBrandsFromResults();
	} catch (error) {
		console.error('搜索失败', error);
		uni.showToast({
			title: '搜索失败',
			icon: 'none'
		});
		searchResults.value = [];
		noResults.value = true;
	} finally {
		loading.value = false;
	}
};

// 模拟搜索
const mockSearch = (keyword) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			// 模拟数据（带品牌信息）
			searchResults.value = [
				{
					id: 1,
					imgUrl: '/static/commodity-item/1.png',
					name: '鸣潮薪火系列守岸人1/7比例手办 库洛游戏周边',
					nprice: '349',
					oprice: '708',
					discount: '4.9',
					brand: '库洛游戏'
				},
				{
					id: 2,
					imgUrl: '/static/commodity-item/2.png',
					name: '【米哈游/崩坏：星穹铁道】砂金主题印象系列戒指套组 miHoYo',
					nprice: '349',
					oprice: '708',
					discount: '4.9',
					brand: '米哈游'
				},
				{
					id: 3,
					imgUrl: '/static/commodity-item/1.png',
					name: '原神胡桃手办模型精美收藏版动漫周边',
					nprice: '299',
					oprice: '599',
					discount: '5.0',
					brand: '米哈游'
				},
				{
					id: 4,
					imgUrl: '/static/commodity-item/2.png',
					name: '初音未来39系列亚克力立牌桌面装饰',
					nprice: '89',
					oprice: '129',
					discount: '6.9',
					brand: '初音未来'
				},
				{
					id: 5,
					imgUrl: '/static/commodity-item/1.png',
					name: '周生生Charme故宫文创系列手链',
					nprice: '1280',
					oprice: '1680',
					discount: '7.6',
					brand: '周生生'
				},
				{
					id: 6,
					imgUrl: '/static/commodity-item/2.png',
					name: '故宫文创 千里江山图手账本套装',
					nprice: '99',
					oprice: '199',
					discount: '4.9',
					brand: '故宫文创'
				}
			];
			resolve();
		}, 800);
	});
};

// 从搜索结果提取品牌
const initBrandsFromResults = () => {
	const brandMap = new Map();
	searchResults.value.forEach((item) => {
		if (item.brand && !brandMap.has(item.brand)) {
			brandMap.set(item.brand, {
				name: item.brand,
				selected: false
			});
		}
	});
	brands.value = Array.from(brandMap.values());
};

// ========== 排序功能 ==========
const changeSort = (sortType) => {
	if (currentSort.value === sortType && sortType !== 'comprehensive') {
		// 相同排序项（非综合排序），切换升降序
		sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc';
	} else {
		// 不同排序项，默认降序
		currentSort.value = sortType;
		sortOrder.value = 'desc';
	}

	// 执行排序
	sortResults();
};

const sortResults = () => {
	const results = [...searchResults.value];

	switch (currentSort.value) {
		case 'price':
			results.sort((a, b) => {
				const priceA = parseFloat(a.nprice);
				const priceB = parseFloat(b.nprice);
				return sortOrder.value === 'desc' ? priceB - priceA : priceA - priceB;
			});
			break;
		case 'discount':
			results.sort((a, b) => {
				const discountA = parseFloat(a.discount);
				const discountB = parseFloat(b.discount);
				return sortOrder.value === 'desc' ? discountB - discountA : discountA - discountB;
			});
			break;
		default:
			// 综合排序：按ID或其他规则
			results.sort((a, b) => a.id - b.id);
	}

	searchResults.value = results;
};

// ========== 筛选功能 ==========
const toggleBrand = (brand) => {
	brand.selected = !brand.selected;
	selectedBrands.value = brands.value.filter((b) => b.selected).map((b) => b.name);
};

const applyFilter = () => {
	showFilterPopup.value = false;
	filterResults();
};

const resetFilter = () => {
	brands.value.forEach((b) => (b.selected = false));
	selectedBrands.value = [];
	priceRange.value = { min: '', max: '' };
	discountRange.value = { min: '', max: '' };

	// 重新搜索
	performSearch(keyword.value);
};

const filterResults = () => {
	// 从原始数据重新筛选
	let filtered = [...searchResults.value];

	// 品牌筛选
	if (selectedBrands.value.length > 0) {
		filtered = filtered.filter((item) => item.brand && selectedBrands.value.includes(item.brand));
	}

	// 价格筛选
	if (priceRange.value.min !== '') {
		filtered = filtered.filter((item) => parseFloat(item.nprice) >= parseFloat(priceRange.value.min));
	}
	if (priceRange.value.max !== '') {
		filtered = filtered.filter((item) => parseFloat(item.nprice) <= parseFloat(priceRange.value.max));
	}

	// 折扣筛选
	if (discountRange.value.min !== '') {
		filtered = filtered.filter((item) => parseFloat(item.discount) >= parseFloat(discountRange.value.min));
	}
	if (discountRange.value.max !== '') {
		filtered = filtered.filter((item) => parseFloat(item.discount) <= parseFloat(discountRange.value.max));
	}

	searchResults.value = filtered;
	noResults.value = filtered.length === 0;
};

// ========== 导航相关 ==========
const goBack = () => {
	uni.navigateBack();
};

const goToSearch = () => {
	uni.navigateTo({
		url: '/pages/search/search'
	});
};

// 商品点击
const handleCommodityClick = (item) => {
	uni.navigateTo({
		url: `/pages/shop/commodity-details?id=${item.id}`
	});
};
</script>

<template>
	<view class="search-result-container">
		<!-- 导航栏 -->
		<view class="nav-bar">
			<view class="nav-content">
				<view class="back-btn" @click="goBack">
					<uni-icons type="left" size="20" color="#333"></uni-icons>
				</view>
				<view class="search-box" @click="goToSearch">
					<uni-icons type="search" size="16" color="#999"></uni-icons>
					<text class="search-text">{{ keyword }}</text>
				</view>
			</view>
		</view>

		<!-- 排序和筛选栏 -->
		<view v-if="!loading && searchResults.length > 0" class="sort-filter-bar">
			<view class="sort-bar">
				<view v-for="sort in sortTypes" :key="sort.value" class="sort-item" :class="{ active: currentSort === sort.value }" @click="changeSort(sort.value)">
					<text>{{ sort.label }}</text>
					<view v-if="currentSort === sort.value" class="sort-icon">
						<uni-icons :type="sortOrder === 'desc' ? 'arrowdown' : 'arrowup'" size="14" color="#ff4444"></uni-icons>
					</view>
				</view>
			</view>
			<view class="filter-btn" @click="showFilterPopup = true">
				<uni-icons type="filter" size="18"></uni-icons>
				<text>筛选</text>
				<view v-if="selectedBrands.length > 0" class="filter-badge"></view>
			</view>
		</view>

		<!-- 搜索结果内容 -->
		<view class="content-area" :class="{ 'has-sort-bar': searchResults.length > 0 }">
			<!-- 加载状态 -->
			<view v-if="loading" class="loading-container">
				<view class="loading-spinner"></view>
				<text class="loading-text">搜索中...</text>
			</view>

			<!-- 搜索结果 -->
			<view v-else-if="searchResults.length > 0" class="results-list">
				<view class="results-header">
					<text class="results-count">找到 {{ searchResults.length }} 件相关商品</text>
				</view>
				<view class="commodity-grid">
					<Commodity v-for="item in searchResults" :key="item.id" :commodityInfo="item" @click="handleCommodityClick(item)" />
				</view>
			</view>

			<!-- 无结果提示 -->
			<view v-else-if="!loading && noResults" class="no-results">
				<uni-icons type="search" size="60" color="#ccc"></uni-icons>
				<text class="no-results-text">未找到相关商品</text>
				<text class="no-results-tip">换个关键词试试吧~</text>
			</view>
		</view>

		<!-- 筛选弹窗 -->
		<uni-popup ref="filterPopup" type="bottom" :show="showFilterPopup" @change="(e) => (showFilterPopup = e.show)">
			<view class="filter-popup">
				<view class="filter-header">
					<text class="filter-title">筛选</text>
					<uni-icons type="close" size="20" @click="showFilterPopup = false"></uni-icons>
				</view>

				<scroll-view class="filter-content" scroll-y>
					<!-- 品牌筛选 -->
					<view class="filter-section">
						<view class="filter-section-title">品牌</view>
						<view class="brand-list">
							<view v-for="brand in brands" :key="brand.name" class="brand-item" :class="{ active: brand.selected }" @click="toggleBrand(brand)">
								{{ brand.name }}
							</view>
						</view>
					</view>

					<!-- 价格区间 -->
					<view class="filter-section">
						<view class="filter-section-title">价格区间</view>
						<view class="range-input">
							<input type="number" v-model.number="priceRange.min" placeholder="最低价" placeholder-class="placeholder" />
							<text class="range-line">—</text>
							<input type="number" v-model.number="priceRange.max" placeholder="最高价" placeholder-class="placeholder" />
						</view>
					</view>

					<!-- 折扣区间 -->
					<view class="filter-section">
						<view class="filter-section-title">折扣区间</view>
						<view class="range-input">
							<input type="number" v-model.number="discountRange.min" placeholder="最低折扣" placeholder-class="placeholder" />
							<text class="range-line">—</text>
							<input type="number" v-model.number="discountRange.max" placeholder="最高折扣" placeholder-class="placeholder" />
						</view>
					</view>
				</scroll-view>

				<view class="filter-footer">
					<view class="reset-btn" @click="resetFilter">重置</view>
					<view class="apply-btn" @click="applyFilter">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<style lang="scss" scoped>
.search-result-container {
	min-height: 100vh;
	background-color: #f5f5f5;
}

// 导航栏
.nav-bar {
	position: sticky;
	top: 0;
	z-index: 100;
	background-color: #fff;
	padding: 10rpx 20rpx;
	border-bottom: 1rpx solid #f0f0f0;

	.nav-content {
		display: flex;
		align-items: center;
		height: 88rpx;

		.back-btn {
			width: 80rpx;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20rpx;
		}

		.search-box {
			flex: 1;
			height: 72rpx;
			background-color: #f5f5f5;
			border-radius: 36rpx;
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			.search-text {
				margin-left: 10rpx;
				font-size: 28rpx;
				color: #333;
				flex: 1;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
}

// 排序筛选栏
.sort-filter-bar {
	position: sticky;
	top: 108rpx;
	z-index: 99;
	background-color: #fff;
	padding: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1rpx solid #f0f0f0;

	.sort-bar {
		flex: 1;
		display: flex;
		gap: 40rpx;

		.sort-item {
			display: flex;
			align-items: center;
			gap: 4rpx;
			font-size: 28rpx;
			color: #666;

			&.active {
				color: #ff4444;
				font-weight: 500;
			}

			.sort-icon {
				display: flex;
				align-items: center;
			}
		}
	}

	.filter-btn {
		display: flex;
		align-items: center;
		gap: 8rpx;
		padding: 8rpx 20rpx;
		border-left: 1rpx solid #eee;
		font-size: 28rpx;
		color: #666;
		position: relative;

		.filter-badge {
			position: absolute;
			top: 0;
			right: 10rpx;
			width: 12rpx;
			height: 12rpx;
			background-color: #ff4444;
			border-radius: 50%;
		}
	}
}

// 内容区域
.content-area {
	padding: 20rpx;

	&.has-sort-bar {
		padding-top: 0;
	}
}

// 加载状态
.loading-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 200rpx 0;

	.loading-spinner {
		width: 60rpx;
		height: 60rpx;
		border: 4rpx solid #e0e0e0;
		border-top-color: #333;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	.loading-text {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #666;
	}
}

// 搜索结果列表
.results-list {
	.results-header {
		padding: 20rpx 0;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid #f0f0f0;

		.results-count {
			font-size: 28rpx;
			color: #666;
		}
	}

	.commodity-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 20rpx;

		:deep(.commodity-item) {
			width: calc(50% - 10rpx);
			margin-bottom: 20rpx;
		}
	}
}

// 无结果提示
.no-results {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 200rpx 0;

	.no-results-text {
		margin-top: 30rpx;
		font-size: 32rpx;
		color: #666;
		font-weight: 500;
	}

	.no-results-tip {
		margin-top: 20rpx;
		font-size: 26rpx;
		color: #999;
	}
}

// 筛选弹窗
.filter-popup {
	background-color: #fff;
	border-radius: 30rpx 30rpx 0 0;
	max-height: 80vh;
	display: flex;
	flex-direction: column;

	.filter-header {
		padding: 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #f0f0f0;

		.filter-title {
			font-size: 32rpx;
			font-weight: 700;
			color: #333;
		}
	}

	.filter-content {
		flex: 1;
		padding: 30rpx;

		.filter-section {
			margin-bottom: 40rpx;

			.filter-section-title {
				font-size: 28rpx;
				font-weight: 600;
				color: #333;
				margin-bottom: 20rpx;
			}

			.brand-list {
				display: flex;
				flex-wrap: wrap;
				gap: 20rpx;

				.brand-item {
					padding: 16rpx 30rpx;
					background-color: #f5f5f5;
					border-radius: 40rpx;
					font-size: 26rpx;
					color: #666;

					&.active {
						background-color: #ff4444;
						color: #fff;
					}
				}
			}

			.range-input {
				display: flex;
				align-items: center;
				gap: 20rpx;

				input {
					flex: 1;
					height: 72rpx;
					background-color: #f5f5f5;
					border-radius: 8rpx;
					padding: 0 20rpx;
					font-size: 26rpx;
				}

				.range-line {
					color: #999;
				}
			}
		}
	}

	.filter-footer {
		padding: 30rpx;
		display: flex;
		gap: 20rpx;
		border-top: 1rpx solid #f0f0f0;

		.reset-btn {
			flex: 1;
			height: 80rpx;
			background-color: #f5f5f5;
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: #666;
		}

		.apply-btn {
			flex: 1;
			height: 80rpx;
			background-color: #ff4444;
			border-radius: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: #fff;
		}
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
