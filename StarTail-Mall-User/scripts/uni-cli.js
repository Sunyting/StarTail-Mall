const path = require('path')

process.env.UNI_INPUT_DIR = path.resolve(__dirname, '..')

require('@dcloudio/vite-plugin-uni/bin/uni.js')
