<script setup>
import { computed, onMounted, ref } from 'vue'
import { categories, products } from './category.data.js'
import { fetchProducts } from '../../services/product.js'

const activeCategory = ref(categories[0].key)
const loading = ref(false)
const errorMessage = ref('')
const cloudProducts = ref([])

const activeCategoryLabel = computed(() => {
	return categories.find((item) => item.key === activeCategory.value)?.label || ''
})

const visibleProducts = computed(() => {
	const source = cloudProducts.value.length ? cloudProducts.value : products
	return source.filter((item) => item.category === activeCategory.value)
})

function selectCategory(key) {
	if (activeCategory.value === key) return
	activeCategory.value = key
}

function addToCart(product) {
	const cart = uni.getStorageSync('startail-cart') || []
	const existing = cart.find((item) => item.id === product.id)

	if (existing) {
		existing.quantity += 1
	} else {
		cart.push({ ...product, quantity: 1, selected: true })
	}

	uni.setStorageSync('startail-cart', cart)
	uni.showToast({ title: '已加入购物车', icon: 'success' })
}

async function loadProducts() {
	loading.value = true
	errorMessage.value = ''

	try {
		cloudProducts.value = await fetchProducts()
	} catch (error) {
		cloudProducts.value = []
		errorMessage.value = error instanceof Error ? error.message : '云端商品加载失败，请稍后重试。'
	} finally {
		loading.value = false
	}
}

onMounted(loadProducts)
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar title="商品分类"></mobile-nav-bar>
		<view class="header-space"></view>

		<view class="category-layout">
			<scroll-view class="category-list" scroll-y>
				<view
					v-for="item in categories"
					:key="item.key"
					class="category-item"
					:class="{ active: activeCategory === item.key }"
					@tap="selectCategory(item.key)"
				>
					{{ item.label }}
				</view>
			</scroll-view>

			<view class="product-area">
				<view class="section-head">
					<view>
						<text class="section-title">{{ activeCategoryLabel }}</text>
						<text class="section-count">{{ visibleProducts.length }} 件商品</text>
					</view>
					<text class="section-subtitle">精选好物</text>
				</view>

				<view v-if="loading" class="feedback">正在加载商品...</view>
				<view v-else-if="errorMessage && !visibleProducts.length" class="feedback">
					<text>{{ errorMessage }}</text>
					<button class="retry-button" type="button" @tap="loadProducts">重新加载</button>
				</view>
				<view v-else-if="!visibleProducts.length" class="feedback">暂无商品</view>
				<view v-else class="product-grid">
					<view v-for="product in visibleProducts" :key="product.id" class="product-card">
						<image class="product-image" :src="product.image" mode="aspectFill" />
						<text class="product-name">{{ product.name }}</text>
						<view class="product-footer">
							<view>
								<text class="product-price">¥{{ product.price }}</text>
								<text class="original-price">¥{{ product.originalPrice }}</text>
							</view>
							<button class="add-button" type="button" aria-label="加入购物车" @tap="addToCart(product)">
								<uni-icons type="cart-filled" size="18" color="#ffffff"></uni-icons>
							</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
.page-wrap {
	min-height: 100vh;
	background: #f8f8f8;
}

.header-space {
	height: 180rpx;
}

.category-layout {
	display: flex;
	min-height: calc(100vh - 180rpx);
}

.category-list {
	width: 190rpx;
	flex-shrink: 0;
	background: #fff;
}

.category-item {
	position: relative;
	padding: 34rpx 12rpx;
	color: #777;
	font-size: 26rpx;
	text-align: center;
	word-break: break-all;
}

.category-item.active {
	color: #de6c9b;
	font-weight: 700;
	background: #fff6fa;
}

.category-item.active::before {
	position: absolute;
	top: 26rpx;
	left: 0;
	width: 8rpx;
	height: 46rpx;
	border-radius: 0 8rpx 8rpx 0;
	background: #de6c9b;
	content: '';
}

.product-area {
	flex: 1;
	min-width: 0;
	padding: 28rpx 22rpx 80rpx;
}

.section-head,
.product-footer {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-title {
	display: block;
	color: #222;
	font-size: 34rpx;
	font-weight: 700;
}

.section-count,
.section-subtitle {
	color: #999;
	font-size: 22rpx;
}

.section-count {
	margin-left: 14rpx;
}

.product-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 18rpx;
	margin-top: 24rpx;
}

.product-card {
	min-width: 0;
	padding: 14rpx;
	border-radius: 12rpx;
	background: #fff;
	box-sizing: border-box;
}

.product-image {
	display: block;
	width: 100%;
	height: 250rpx;
	border-radius: 8rpx;
	background: #f4f4f4;
}

.product-name {
	display: -webkit-box;
	min-height: 72rpx;
	margin: 14rpx 0 8rpx;
	color: #333;
	font-size: 25rpx;
	line-height: 1.45;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}

.product-price {
	color: #e45c78;
	font-size: 30rpx;
	font-weight: 700;
}

.original-price {
	margin-left: 8rpx;
	color: #aaa;
	font-size: 20rpx;
	text-decoration: line-through;
}

.add-button,
.retry-button {
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
}

.add-button::after,
.retry-button::after {
	border: 0;
}

.add-button {
	display: flex;
	width: 54rpx;
	height: 54rpx;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	background: #de6c9b;
}

.feedback {
	display: flex;
	min-height: 300rpx;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20rpx;
	color: #999;
	font-size: 26rpx;
}

.retry-button {
	padding: 12rpx 24rpx;
	border: 1rpx solid #de6c9b;
	border-radius: 8rpx;
	color: #de6c9b;
	font-size: 24rpx;
}
</style>
