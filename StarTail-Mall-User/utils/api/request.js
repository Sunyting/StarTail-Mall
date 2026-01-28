export default {
	common: {
		baseUrl: "http://localhost:3001/api",
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
					let data = result.data;
					resolve(data);
				},
				fail: (error) => {
					reject(error);
				}
			})
		})
	}
}