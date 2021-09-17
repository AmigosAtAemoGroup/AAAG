module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "css": {
    extract:
      process.env.NODE_ENV === 'production'
        ? {
            ignoreOrder: true
          }
        : false
  },
  "publicPath": process.env.VUE_APP_BASE_HREF
}
