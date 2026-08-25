function getPayload(result) {
	const payload = result.result
	if (!payload || payload.code !== 0 || !Array.isArray(payload.data)) {
		throw new Error(payload?.message || '云端购物车操作失败。')
	}

	return payload.data
}

async function callCart(action, data = {}) {
	const result = await uniCloud.callFunction({
		name: 'cart-manage',
		data: { action, ...data }
	})

	return getPayload(result)
}

export function fetchCart() {
	return callCart('list')
}

export function addCartItem(productId) {
	return callCart('add', { productId })
}

export function updateCartItem(id, updates) {
	return callCart('update', { id, ...updates })
}

export function deleteCartItem(id) {
	return callCart('remove', { id })
}
