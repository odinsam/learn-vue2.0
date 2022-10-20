const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    //关闭语法检查
    lintOnSave: false,
    //简单配置代理服务器 不能添加多个代理服务器
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    devServer: {
        proxy: {
            '/odinapi': {
                target: 'http://localhost:8899', //目标请求服务器
                pathRewrite: { '^/odinapi': '' }, //路径重写匹配服务器路径
                ws: true, //是否支持websocket
                changeOrigin: true //用户控制请求头中的host
            }
        }
    }
});
