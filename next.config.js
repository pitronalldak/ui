const path = require('path')

const { ANALYZE } = process.env

module.exports = {
  // distDir: '../build',
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.(css)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    }, {
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader']
    }, {
      test: /\index.js$/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-runtime', 'transform-es2015-block-scoping'],
      }
    })

    // prepend polyfill
    const entryFactory = cfg.entry;
    cfg.entry = () => (
      entryFactory().then((entry) => {
        entry['main.js'] = [
          'core-js/fn/string/starts-with',
          'core-js/fn/string/ends-with',
          'core-js/fn/string/repeat',
          'core-js/fn/object/assign',
          'core-js/fn/array/find',
          'core-js/fn/array/from',
          'core-js/fn/array/fill',
          'core-js/fn/array/keys',
          'core-js/fn/array/find-index',
          'core-js/fn/number/is-integer',
          'core-js/fn/map',
          'core-js/fn/set',
          ...entry['main.js'],
        ]
        return entry
      })
    )
    return cfg
  },
  poweredByHeader: false,
  useFileSystemPublicRoutes: false
}
