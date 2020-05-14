const productionConfig = {
  publicPath: "https://test-vue-project.s3.us-east-2.amazonaws.com/master/",
  // chainWebpack: config => {
  //   if(config.plugins.has('extract-css')) {
  //     const extractCSSPlugin = config.plugin('extract-css')
  //     extractCSSPlugin && extractCSSPlugin.tap(() => [{
  //       filename: '[name].css',
  //       chunkFilename: '[name].css'
  //     }])
  //   }
  // },
  // configureWebpack: {
  //   output: {
  //     filename: '[name].js',
  //     chunkFilename: '[name].js'
  //   }
  // }

  // Better solution
  // configureWebpack: config => {
  //   config.output.filename = '[name].js'
  //   config.output.chunkFilename = '[name].js'
  // },
  // css: {
  //   extract: {
  //     filename: '[name].css',
  //   },
  // },

  // Now it's an option!
  filenameHashing: false
}

module.exports = process.env.NODE_ENV === 'development' ? {} : productionConfig;
