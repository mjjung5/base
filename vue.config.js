const fs = require("fs");
const path = require('path');
const glob = require("glob");
const productionMode = process.env.NODE_ENV === 'production' ? true : false; // 배포용 - production,  개발용 - development
const pages = {};
let entries = glob('src/pages/*/main.js', {sync: true}); // glob 쉘이 사용하는 패턴 *등 사용하여 파일 일치 시키고 Array로 반환

entries.forEach((file) => {
    const fileSplit = file.split('/');
    const pageName = fileSplit[2];
    let pageHtml = fileSplit.slice(0, 3).join('/') + '/index.html';
    if (!fs.existsSync(pageHtml)) { // pageHtml 존재하지 않을경우 디폴트 html로 설정
        pageHtml = fileSplit.slice(0, 2).join('/') + '/_default.html';
    }

    pages[pageName] = {
        title: "롯데닷컴 " + pageName,
        entry: file,
        template: pageHtml,
        filename: pageName+ '/' + pageName + '.html', // html 파일 생성
        chunks: ['chunk-vendors', 'chunk-common', pageName], // 생성된 HTML파일에 chunk 파일 및 작업된 JS추가
        minify: { collapseWhitespace: false },
    }
});

module.exports = {
    publicPath: productionMode ? '/dist/' : '/',
    productionSourceMap: false, // 배포용 빌드시 소스맵 생성 여부
    filenameHashing: false, // output hash 여부
    pages,

    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src')); // 작업시 기본 루트 설정
    },

    configureWebpack: config => { 
        config.output.filename = '[name]/[name].js'; // 생성된 JS Root 설정
    },

    css: {
        extract: {
            filename: '[name]/[name].css'
        },
    },

    pluginOptions: {},

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


// pages: {
    //     main: {
    //         title: 'Index Page', // 타이틀명 <title><%= htmlWebpackPlugin.options.title %></title>
    //         entry: 'src/pages/main/main.js', // entry 페이지
    //         template: 'public/index.html', // source template 파일
    //         filename: 'main/index.html', // output 파일
    //         chunks: ['chunk-vendors', 'chunk-common', 'main'], // 기본적으로 페이지에 포함시킬 청크, 추출 된 일반 청크
    //         minify: { collapseWhitespace: false },
    //     },
    //     sub: {
    //         title: "Sub Page",
    //         entry: 'src/pages/sub/main.js',
    //         filename: 'sub/index.html',
    //         minify: { collapseWhitespace: false },
    //     }
    // },