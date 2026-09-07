'use strict'

const db = uniCloud.database()
const command = db.command
const carts = db.collection('startail-cart')
const products = db.collection('startail-product')

function getOpenId(context) {
	if (!context.OPENID) throw new Error('请在微信小程序中登录后使用购物车。')
	return context.OPENID
}

function normalizeQuantity(value) {
	const quantity = Number(value)
	if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
		throw new Error('商品数量必须是 1 到 99 的整数。')
	}
	return quantity
}

async function getCartItems(openId) {
	const cartResult = await carts.where({ userId: openId }).orderBy('updatedAt', 'desc').limit(100).get()
	if (!cartResult.data.length) return []

	const productIds = cartResult.data.map((item) => item.productId)
	const productResult = await products.where({ _id: command.in(productIds), status: 'on-sale' }).get()
	const productMap = new Map(productResult.data.map((item) => [item._id, item]))

	return cartResult.data.flatMap((item) => {
		const product = productMap.get(item.productId)
		if (!product || product.stock < 1) return []
		return [{
			id: item._id,
			category: product.category,
			image: product.image,
			name: product.name,
			originalPrice: product.originalPrice,
			price: product.price,
			quantity: Math.min(item.quantity, product.stock),
			selected: item.selected
		}]
	})
}

async function addItem(openId, productId) {
	if (typeof productId !== 'string' || !productId) throw new Error('缺少商品标识。')
	const product = (await products.doc(productId).get()).data[0]
	if (!product || product.status !== 'on-sale' || product.stock < 1) throw new Error('该商品暂不可加入购物车。')

	const existing = (await carts.where({ userId: openId, productId }).get()).data[0]
	const now = Date.now()
	if (existing) {
		await carts.doc(existing._id).update({ quantity: Math.min(existing.quantity + 1, product.stock, 99), updatedAt: now })
		return
	}
	await carts.add({ data: { productId, quantity: 1, selected: true, userId: openId, createdAt: now, updatedAt: now } })
}

async function updateItem(openId, id, event) {
	if (typeof id !== 'string' || !id) throw new Error('缺少购物车项标识。')
	const item = (await carts.doc(id).get()).data[0]
	if (!item || item.userId !== openId) throw new Error('购物车项不存在。')

	const updates = { updatedAt: Date.now() }
	if (event.quantity !== undefined) {
		const product = (await products.doc(item.productId).get()).data[0]
		if (!product || product.status !== 'on-sale' || product.stock < 1) throw new Error('该商品暂不可购买。')
		updates.quantity = Math.min(normalizeQuantity(event.quantity), product.stock)
	}
	if (event.selected !== undefined) {
		if (typeof event.selected !== 'boolean') throw new Error('勾选状态无效。')
		updates.selected = event.selected
	}
	if (Object.keys(updates).length === 1) throw new Error('缺少可更新字段。')
	await carts.doc(id).update(updates)
}

async function removeItem(openId, id) {
	if (typeof id !== 'string' || !id) throw new Error('缺少购物车项标识。')
	const item = (await carts.doc(id).get()).data[0]
	if (!item || item.userId !== openId) throw new Error('购物车项不存在。')
	await carts.doc(id).remove()
}

exports.main = async (event = {}, context) => {
	try {
		const openId = getOpenId(context)
		switch (event.action) {
			case 'add': await addItem(openId, event.productId); break
			case 'update': await updateItem(openId, event.id, event); break
			case 'remove': await removeItem(openId, event.id); break
			case 'list': break
			default: throw new Error('不支持的购物车操作。')
		}
		return { code: 0, data: await getCartItems(openId) }
	} catch (error) {
		return { code: 1, message: error instanceof Error ? error.message : '购物车操作失败。', data: [] }
	}
}
