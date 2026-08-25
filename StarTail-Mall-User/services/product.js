export async function fetchProducts(category = '') {
	const result = await uniCloud.callFunction({
		name: 'product-list',
		data: { category }
	})

	const payload = result.result
	if (!payload || payload.code !== 0 || !Array.isArray(payload.data)) {
		throw new Error(payload?.message || '云端商品数据格式错误。')
	}

	return payload.data
}
