const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    publicPath: './',
    outputDir: 'iphone', 
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false, // 生产环境的 source map
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    transpileDependencies: [
        "swiper",
        "dom7",
        "ssr-window"
    ],
     chainWebpack: config => {
          // 添加别名
            config.resolve.alias
            .set("@src", resolve("src"))
            .set("@components", resolve("src/components"))
            .set("@api", resolve("src/api"))
            .set("@views", resolve("src/views"))
            .set("@router", resolve("src/router"))
            .set("@store", resolve("src/store"))
            .set("@common", resolve("src/common"))
     }
}