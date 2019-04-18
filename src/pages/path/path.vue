<template>
    <div id="guideWrap">
        <!-- Header -->
        <div id="guideHeader">
            <div class="fl">
                <h1>통합EC개발담당 개발1팀</h1>
                <p class="left">Path</p>
            </div>
            <div class="fr">
                <div class="total">Total : {{pathData.length}}</div>
            </div>
        </div>
        <!-- //Header -->

        <!-- Path List -->
        <div class="pathList">
            <table class="pathTbl">
                <caption>Path List</caption>
                <colgroup>
                    <col width="20%">
                    <col width="50%">
                    <col width="30%">
                </colgroup>
                <thead>
                <tr>
                    <th scope="col">Depth 1</th>
                    <th scope="col">URL</th>
                    <th scope="col">Notice</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="item in pathData" :key="item.name">
                        <th class='dep1' scope='row'>{{item.name}}</th>
                        <td class='url'><a :href="item.url" target='_blank' title='새창'>{{item.url}}</a></td>
                        <td class='txt'></td>
					</tr>
                </tbody>
            </table>
            <!-- //리스트 표 -->
        </div>
    </div>
</template>

<script>
import pathData from '@/path.json';
export default {
  name: 'path',
  data(){
      return{
          pathData: {}
      }
  },
  created(){
      this.pathData = pathData;
  }
}
</script>

<style>
html, body {font-family:ng, Arial, Dotum sans-serif;font-size:14px;color:#666;}
body {line-height:1.2;word-break:break-all;}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,select,input,textarea,p,blockquote,th,td {margin:0;padding:0;}
header, footer, section, article, aside, nav, hgroup, details, menu, figure, figcaption {display:block;}
h1,h2,h3,h4,h5,h6,optgroup,strong,th {font-weight:normal;}
em,span,strong,i {font-size:100%;}
img, legend, fieldset {border:none;}
em,address{font-style:normal;}
button {margin:0;padding:0;border:0;border-radius:0;background:none;}
table {border-collapse:collapse;border-spacing:0;}
caption, legend {visibility:hidden;width:0;height:0;font-size:0;line-height:0;}
ul, ol, li {list-style-type:none;}
hr {display:none;}
legend,caption,hr{display:none;}
br,p{letter-spacing:normal;}
a{color:#777; text-decoration:none;}
a:hover{text-decoration:none;}

.fl {float:left !important;}
.fr {float:right !important;}

#guideWrap {position:relative; width:100%;}
#guideHeader {width:100%; min-height:80px; background:#719cff;}
#guideHeader:after {content:""; display:block; clear:both;}
#guideHeader h1 {float:left; margin:25px 0 0 20px; font-weight:bold; font-size:30px; color:#fff;}
#guideHeader .left{float:left; margin:35px 0 0 10px; padding-left:10px; border-left:1px solid #fff; font-size:20px; color:#fff;}
#guideHeader .total{margin:30px 50px 0 0; font-size:20px; color:#fff;}
#guideHeader .total span span{margin:0 4px;}
#guideHeader .total span em{color:#ccc;}
.pathList {padding:50px 15px;}
.pathList .pathTbl{width:100%;}
.pathList .pathTbl thead tr th{padding:15px 0; border-top:2px solid #7a7a7a; border-bottom:1px solid #bfbfbf; border-left:1px solid #ddd; font-size:13px; color:#000;}
.pathList .pathTbl thead tr th:first-child {border-left:0;}
.pathList .pathTbl tbody tr th,
.pathList .pathTbl tbody tr td{padding:10px 0 10px 20px; font-size:12px; color:#000; border-right:1px solid #ddd; border-bottom:1px solid #ddd; text-align:left; }
.pathList .pathTbl tbody th {background:#f2f2f2;}
.pathList .pathTbl tr.on th,
.pathList .pathTbl tr.on td{background:#f2f2f2;}
.pathList .pathTbl .url a{color:#333;}
.pathList .pathTbl .url a:hover {text-decoration:underline;}
.pathList .pathTbl .dep1{font-weight:bold;}
.pathList .pathTbl .date{font-size:12px;}
.pathList .pathTbl .date a {font-size:14px;}
.pathList .pathTbl .date strong{display:block; margin-top:5px; font-weight:normal;}
.pathList .pathTbl .date a:hover {color:#c00000;}
.pathList .pathTbl .txt{border-right:0;}
.pathList .pathTbl .txt ul li {margin-top:5px;}
.pathList .pathTbl .txt ul li:first-child {margin-top:0;}
.pathList .pathTbl tbody tr td.check {padding:0; text-align:center;}
</style>
