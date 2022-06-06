const path = require('path');
const { defineConfig } =  require('vite');
const vue = require('@vitejs/plugin-vue');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib:{
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'vue-css.gg',
      fileName: (format) => `vue-css.gg.${format}.js`,
    },
    rollupOptions:{
      external: ['vue'],
      output:{
        globals:{
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()]
});
