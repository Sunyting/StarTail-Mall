export default {
	common: {
		baseUrl: "http://localhost:3001/api",
		assetBaseUrl: "http://localhost:3001",
		data: {},
		header: {
			"Content-Type": "application/json"
		},
		method: "GET",
		dataType: "json"
	},
	request(options = {}) {
		options.url = this.common.baseUrl + options.url;
		options.data = options.data || this.common.data;
		options.header = options.header || this.common.header;
		options.method = options.method || this.common.method;
		options.dataType = options.dataType || this.common.dataType;

		return new Promise((resolve, reject) => {
      uni.showLoading();
			uni.request({
				...options,
				success: (result) => {
					if (result.statusCode !== 200) {
						return reject(result);
					}
					setTimeout(function() {
						uni.hideLoading();
					}, 1000)
					const normalizeAssetUrl = (value) => {
						if (typeof value === 'string') {
							return value.startsWith('/static/') ? this.common.assetBaseUrl + value : value;
						}
						if (Array.isArray(value)) {
							return value.map(normalizeAssetUrl);
						}
						if (value && typeof value === 'object') {
							return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeAssetUrl(item)]));
						}
						return value;
					};
					resolve(normalizeAssetUrl(result.data));
				},
				fail: (error) => {
					reject(error);
				}
			})
		})
	}
}
