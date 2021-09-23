module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  transpileDependencies: ['vuex-module-decorators'],
  configureWebpack: {
    resolve: {
      alias: {
        va: 'vue2-admin-lte/src',
      },
    },
  },
}
