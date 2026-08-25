<script setup>
import { computed, ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { deleteCartItem, fetchCart, updateCartItem } from '../../services/cart.js'

const cartItems = ref([])

const selectedItems = computed(() => cartItems.value.filter((item) => item.selected))
const selectedCount = computed(() => selectedItems.value.reduce((total, item) => total + item.quantity, 0))
const totalPrice = computed(() => selectedItems.value.reduce((total, item) => total + item.price * item.quantity, 0))
const allSelected = computed(() => cartItems.value.length > 0 && cartItems.value.every((item) => item.selected))

async function loadCart() {
	cartItems.value = uni.getStorageSync('startail-cart') || []

	try {
		cartItems.value = await fetchCart()
		saveCart()
	} catch {
		// 云函数尚未部署或网络不可用时，使用本地购物车。
	}
}

function saveCart() {
	uni.setStorageSync('startail-cart', cartItems.value)
}

async function syncItem(item, updates) {
	try {
		cartItems.value = await updateCartItem(item.id, updates)
		saveCart()
	} catch {
		saveCart()
	}
}

async function toggleAll() {
	const nextValue = !allSelected.value
	cartItems.value.forEach((item) => {
		item.selected = nextValue
	})
	saveCart()

	await Promise.all(cartItems.value.map((item) => syncItem(item, { selected: nextValue })))
}

function changeQuantity(item, delta) {
	const quantity = Math.max(1, item.quantity + delta)
	item.quantity = quantity
	syncItem(item, { quantity })
}

function toggleItem(item) {
	item.selected = !item.selected
	syncItem(item, { selected: item.selected })
}

async function removeItem(id) {
	cartItems.value = cartItems.value.filter((item) => item.id !== id)
	saveCart()

	try {
		cartItems.value = await deleteCartItem(id)
		saveCart()
	} catch {
		// 本地删除已经完成，待云端可用后重新同步。
	}
}

function checkout() {
	if (!selectedItems.value.length) {
		uni.showToast({ title: '请先选择商品', icon: 'none' })
		return
	}

	uni.showToast({ title: '订单流程待接入', icon: 'none' })
}

function goShopping() {
	uni.switchTab({ url: '/pages/shop/category' })
}

onShow(loadCart)
</script>

<template>
	<view class="page-wrap">
		<mobile-nav-bar title="购物车"></mobile-nav-bar>
		<view class="header-space"></view>

		<view v-if="!cartItems.length" class="empty-state">
			<uni-icons type="cart" size="54" color="#d8a0b7"></uni-icons>
			<text class="empty-title">购物车还是空的</text>
			<text class="empty-desc">去商城挑选一些喜欢的商品吧</text>
			<button class="shop-button" type="button" @tap="goShopping">去逛逛</button>
		</view>

		<view v-else class="cart-content">
			<view class="cart-list">
				<view v-for="item in cartItems" :key="item.id" class="cart-item">
					<view class="select-control" :class="{ selected: item.selected }" @tap="toggleItem(item)">
						<uni-icons v-if="item.selected" type="checkmarkempty" size="15" color="#ffffff"></uni-icons>
					</view>
					<image class="item-image" :src="item.image" mode="aspectFill"></image>
					<view class="item-info">
						<text class="item-name">{{ item.name }}</text>
						<text class="item-price">¥{{ item.price }}</text>
						<view class="item-actions">
							<view class="quantity-control">
								<button type="button" aria-label="减少数量" @tap="changeQuantity(item, -1)">-</button>
								<text>{{ item.quantity }}</text>
								<button type="button" aria-label="增加数量" @tap="changeQuantity(item, 1)">+</button>
							</view>
							<button class="remove-button" type="button" @tap="removeItem(item.id)">删除</button>
						</view>
					</view>
				</view>
			</view>

			<view class="cart-footer">
				<view class="all-select" @tap="toggleAll">
					<view class="select-control" :class="{ selected: allSelected }">
						<uni-icons v-if="allSelected" type="checkmarkempty" size="15" color="#ffffff"></uni-icons>
					</view>
					<text>全选</text>
				</view>
				<view class="summary">
					<text>合计 <text class="total-price">¥{{ totalPrice }}</text></text>
					<button class="checkout-button" type="button" @tap="checkout">结算({{ selectedCount }})</button>
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

.cart-content {
	padding: 20rpx 24rpx 150rpx;
}

.cart-list {
	display: flex;
	flex-direction: column;
	gap: 18rpx;
}

.cart-item {
	display: flex;
	align-items: center;
	gap: 18rpx;
	padding: 20rpx;
	border-radius: 12rpx;
	background: #fff;
}

.select-control {
	display: flex;
	width: 34rpx;
	height: 34rpx;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	border: 2rpx solid #d7d7d7;
	border-radius: 50%;
	box-sizing: border-box;
}

.select-control.selected {
	border-color: #de6c9b;
	background: #de6c9b;
}

.item-image {
	width: 150rpx;
	height: 150rpx;
	flex-shrink: 0;
	border-radius: 8rpx;
	background: #f5f5f5;
}

.item-info {
	display: flex;
	min-width: 0;
	flex: 1;
	flex-direction: column;
}

.item-name {
	color: #333;
	font-size: 27rpx;
	line-height: 1.4;
}

.item-price {
	margin-top: 14rpx;
	color: #e45c78;
	font-size: 31rpx;
	font-weight: 700;
}

.item-actions,
.summary,
.all-select {
	display: flex;
	align-items: center;
}

.item-actions {
	margin-top: 18rpx;
	justify-content: space-between;
}

.quantity-control {
	display: flex;
	height: 48rpx;
	align-items: center;
	border: 1rpx solid #ececec;
	border-radius: 6rpx;
	overflow: hidden;
}

.quantity-control button {
	width: 48rpx;
	height: 48rpx;
	padding: 0;
	border: 0;
	border-radius: 0;
	background: #fafafa;
	color: #666;
	font-size: 30rpx;
	line-height: 48rpx;
}

.quantity-control text {
	width: 46rpx;
	color: #333;
	font-size: 24rpx;
	text-align: center;
}

.remove-button {
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	color: #999;
	font-size: 23rpx;
}

.remove-button::after,
.checkout-button::after,
.shop-button::after {
	border: 0;
}

.cart-footer {
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	height: 112rpx;
	align-items: center;
	justify-content: space-between;
	padding: 0 24rpx;
	background: #fff;
	box-shadow: 0 -4rpx 18rpx rgba(0, 0, 0, 0.06);
	box-sizing: border-box;
}

.all-select {
	gap: 10rpx;
	color: #666;
	font-size: 25rpx;
}

.summary {
	gap: 18rpx;
	color: #555;
	font-size: 24rpx;
}

.total-price {
	color: #e45c78;
	font-size: 32rpx;
	font-weight: 700;
}

.checkout-button,
.shop-button {
	margin: 0;
	border: 0;
	border-radius: 8rpx;
	background: #de6c9b;
	color: #fff;
	font-size: 25rpx;
}

.checkout-button {
	padding: 18rpx 26rpx;
}

.empty-state {
	display: flex;
	min-height: 600rpx;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.empty-title {
	margin-top: 24rpx;
	color: #555;
	font-size: 30rpx;
}

.empty-desc {
	margin-top: 12rpx;
	color: #aaa;
	font-size: 24rpx;
}

.shop-button {
	margin-top: 28rpx;
	padding: 18rpx 48rpx;
}
</style>
