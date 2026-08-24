const { defineConfig } = require('vite')
const uni = require('@dcloudio/vite-plugin-uni').default

module.exports = defineConfig({
  plugins: [uni()],
  server: {
    host: '0.0.0.0',
    port: 5174
  }
})
