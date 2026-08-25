'use strict'

const db = uniCloud.database()
const products = db.collection('opendb-product')

exports.main = async (event = {}) => {
	const category = typeof event.category === 'string' ? event.category.trim() : ''
	const query = { status: 'on-sale' }

	if (category) {
		query.category = category
	}

	const result = await products
		.where(query)
		.field({
			category: true,
			image: true,
			name: true,
			originalPrice: true,
			price: true
		})
		.orderBy('sort', 'asc')
		.limit(100)
		.get()

	return {
		code: 0,
		data: result.data.map((item) => ({
			id: item._id,
			category: item.category,
			image: item.image,
			name: item.name,
			originalPrice: item.originalPrice,
			price: item.price
		}))
	}
}
