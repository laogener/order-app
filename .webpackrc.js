const path = require('path')
export default {
    extraBabelPlugins:[
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": true
            }
        ]
    ],
    // 设置别名
    alias:{
        '@':path.resolve(__dirname,'./src/assets')
    },
    proxy: {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        },
    }
}
