module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}),
    require('postcss-unprefix')()
  ]
}
