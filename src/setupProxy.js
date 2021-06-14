const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("/data.json", {
            target: "https://www.mrsoft.by",
            secure: false,
            changeOrigin: true
        })
    )
}
