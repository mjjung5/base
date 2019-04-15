const path = require('path');
const glob = require("glob");
const pages = {};
let entries = glob('./src/pages/*/main.js', {sync: true}); // glob 쉘이 사용하는 패턴 *등 사용하여 파일 일치 시키고 Array로 반환

entries.forEach(root => {
    const chunk = root.split('./src/pages/')[1].split('/main.js')[0];
    pages[chunk] = {
      entry: root, // 엔트리 설정
      template: 'public/index.html', // tamplate 파일 설정
      filename: chunk+ '/' + chunk + '.html', // html 파일 생성
      title: '', // 각각 생성되는 html 페이지의 타이틀 설정
      chunks: ['chunk-vendors', 'chunk-common', chunk], // 공통 사용 JS 및 작업하면서 생성된 JS 분리하여 html페이지에 적용
      minify: { collapseWhitespace: false }, // html 페이지 압축 여부
    };
  });

module.exports = {
    productionSourceMap: false, // 배포용 빌드시 소스맵 생성 여부
    filenameHashing: false, // output hash 여부
    pages,
    chainWebpack: config => { config.resolve.alias.set('@', path.resolve(__dirname, 'src')); }, // 작업시 기본 루트 설정
    configureWebpack: config => { config.output.filename = '[name]/[name].js'; }, // 생성된 JS Root 및 Name 설정
    css: { extract: { filename: '[name]/[name].css' } }, // 생성된 CSS Root 및 Name 설정
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