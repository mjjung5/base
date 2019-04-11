const version = "r20190411"
module.exports = {
    outputDir: "dist/" + version,
    publicPath: process.env.NODE_ENV === 'production' ? '/dist/' : '/',
    productionSourceMap: false, // 배포용 빌드시 소스맵 생성 여부
    filenameHashing: false, // output hash 여부
    pages: {
        index: {
          entry: 'src/main.js', // entry 페이지
          template: 'public/index.html', // source template 파일
          filename: 'main/index.html', // output 파일
          title: 'Index Page', // 타이틀명 <title><%= htmlWebpackPlugin.options.title %></title>
          chunks: ['chunk-vendors', 'chunk-common', 'index'] // 기본적으로 페이지에 포함시킬 청크, 추출 된 일반 청크
        },
        test: {
            entry: 'src/test.js',
            title: "testPage",
            filename: 'test/test.html',
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://m.lotte.com",
                changeOriin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    },
}