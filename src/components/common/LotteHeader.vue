<template>
    <section id="main_header" class="main_header app_bnr">
        <!-- Main Header -->
        <div class="header_wrap">
            <div class="inner_wrap">
                <div class="bg_cover">
                    <div class="header_bg">
                        <h1 class="logo"><button class="btn_main">LOTTE.COM</button></h1>
                        <a class="one_lotte">one 롯데</a>
                        <div class="menu_wrap">
                            <!-- 검색창 (음성검색/스타일 추천) -->
                            <div class="srh_box web">
                                <label for="keyword" class="btn_srh"></label>
                                <a class="btn_srh_camera"></a>
                            </div>
                            <button class="btn_cart">장바구니</button>
                        </div>
                    </div>

                    <!-- GNB -->
                    <div id="gnb" class="nav_swipe_wrap">
                        <nav class="main_nav">
                            <ul>
                                <li v-for="item in pageUI.gnbList.items" :key="item.dispNo">
                                    <a @click="handleClick(item.jsonFilePath)">{{item.dispNm}}</a>
                                </li>
                            </ul>
                            <div class="gradation"></div>
                            <div class="open_menu"></div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import eventBus from '@/EventBus';

export default {
    name: 'Header',
    data(){
        return{
            pageUI: {
                gnbList: {},
                contData: {}
            }
        }
    },

    created(){
        this.$http('/api/main_json_gate.do').then((res)=>{
            this.pageUI.gnbList = res.data.data;
        });
    },

    methods:{
        handleClick: function(jsonUrl){
            var url = jsonUrl.split("http://m.lotte.com/");
            this.$http('/api/' + url[1]).then((res)=>{
                this.pageUI.contData = res.data;
                eventBus.$emit("contData", this.pageUI.contData);
            });
        },

    }
  
}
</script>

<style>
.main_header >.header_wrap{position:relative;min-height:122px;background-color:#719cff;box-shadow: 0px 2px 3px rgba(156,156,156,.12);z-index:50;}
.main_header{height:123px;}
.main_header >.header_wrap{position:relative;min-height:122px;background-color:#719cff;box-shadow: 0px 2px 3px rgba(156,156,156,.12);z-index:50;
/*-webkit-transition:-webkit-transform .2s;
transition:transform .2s;
-ms-transform: translate(0, 0px);
-webkit-transform: translate(0, 0px);
transform: translate(0, 0px);
-webkit-backface-visibility:hidden;
-moz-backface-visibility:hidden;
backface-visibility:hidden;*/
}
.main_header >.header_wrap .inner_wrap{background-color:#719cff;border-bottom:1px solid #d4d4db;
/* ios bandding 현상 제거 */
-ms-transform: translate(0, 0px);
-webkit-transform: translate(0, 0px);
transform: translate(0, 0px);
}
.main_header >.header_wrap .inner_wrap.fixed{position:fixed;top:0;left:0;width:100%;z-index:50;}
/*.main_header >.header_wrap.fixed.scroll_down{
-ms-transform: translate(0, -58px);
-webkit-transform: translate(0, -58px);
transform: translate(0, -58px);
}
.main_header.app_bnr >.header_wrap.fixed.scroll_down{
-ms-transform: translate(0, -105px);
-webkit-transform: translate(0, -105px);
transform: translate(0, -105px);
}*/

/* 20160621 박형윤 앱다운로드 배너 추가 */
.main_header.app_bnr{height:152px;}
.main_header >.header_wrap >.app_bnr_wrap{height:55px;}

.main_header >.header_wrap button,.main_header >.header_wrap label{overflow:hidden;border:0;background-color:transparent;
-webkit-appearance:none;
-moz-appearance:none;
appearance:none;
outline-color:transparent;
}
.main_header >.header_wrap >.inner_wrap{position:relative;}
.main_header .header_top_wrap{position:relative;padding:6px 0 0;text-align:center;}
.main_header .header_top_wrap >.logo >.btn_main,
.main_header .header_top_wrap >.btn_ctg,
.main_header .header_top_wrap >.btn_cart{position:relative;white-space:nowrap;text-indent:100%;}
.main_header .header_top_wrap >.logo >.btn_main:after,
.main_header .header_top_wrap >.btn_ctg:after,
.main_header .header_top_wrap >.btn_cart:after{content:"";display:block;position:absolute;top:0;left:0;background:transparent url(http://image.lotte.com/lotte/mo2018/common/header_spr_2018.png) 0 0 no-repeat;background-size:250px 180px;}/* 2016.12.06 requests */
.main_header .header_top_wrap >.logo >.btn_main{display:inline-block;width:123px;height:32px;}
.main_header .header_top_wrap >.btn_ctg,
.main_header .header_top_wrap >.btn_cart{display:block;position:absolute;top:0;width:44px;height:36px;}
.main_header .header_top_wrap >.btn_ctg{top:5px;left:1px;}
.main_header .header_top_wrap >.btn_cart{top:14px;right:4px;}
.main_header .header_top_wrap >.logo >.btn_main:after{top:0;left:0;width:123px;height:32px;background-position:-25px -95px;}
.main_header .header_top_wrap >.btn_ctg:after{top:9px;left:11px;width:22px;height:18px;background-position:0 -95px;}
.main_header .header_top_wrap >.btn_cart:after{top:5px;left:8px;width:27px;height:24px;background-position:-135px -60px;}

.main_header .header_top_wrap >.btn_cart >i.cnt{position:absolute;top:0;right:2px;min-width:10px;height:10px;line-height:10px;padding:4px 3px 2px 3px;background-color:#fa7257;color:#fff;font-size:10px;z-index:1;border-radius:100%;text-indent:-1px;font-style:normal;letter-spacing:-1px;text-align:center;}
.main_header .header_top_wrap .logo{width:32px;margin-left:50px;}

.main_header .header_srh_wrap{position:absolute;top:12.5px;left:101px;right:54px;margin:0;z-index:1;}
.main_header .header_srh_wrap >.srh_box{position:relative;background-color:#fff;border-radius:17px;}
.main_header .header_srh_wrap.app_speech_only >.srh_box,
.main_header .header_srh_wrap.app_stylesrh_only >.srh_box{padding-right:40px;}
.main_header .header_srh_wrap >.srh_box >.btn_srh{display:block;position:relative;width:100%;height:33px;line-height:33px;padding-left:10px;text-align:left;color:#719cff;
	-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
.main_header .header_srh_wrap >.srh_box >.btn_srh:before{content:"";display:block;position:absolute;top:8px;right:6px;width:18px;height:18px;background:url(http://image.lotte.com/lotte/mo2017/common/header_spr_2017.png) -170px -60px no-repeat;background-size:250px 95px;}/* 2016.12.06 requests */
.main_header .header_srh_wrap >.srh_box >.app_btn_area{position:absolute;top:0;right:0;width:80px;}
.main_header .header_srh_wrap.app_speech_only >.srh_box >.app_btn_area,
.main_header .header_srh_wrap.app_stylesrh_only >.srh_box >.app_btn_area{width:40px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area:after{content:"";display:block;clear:both;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_mic,
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_stylesrh{float:left;display:block;position:relative;height:35px;white-space:nowrap;text-indent:100%;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_mic{width:40px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_stylesrh{right:0;width:40px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_stylesrh.after_line:before{content:"";display:block;position:absolute;top:9px;left:0px;width:1px;height:18px;background-color:#e3e3e3;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_mic:after,
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_stylesrh:after{content:"";display:block;position:absolute;top:0;left:0;background:transparent url(http://image.lotte.com/lotte/mobile/mobile_new/common/header_spr_2016.png) 0 0 no-repeat;background-size:250px 95px;}/* 2016.12.06 requests */
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_mic:after{display:block;position:absolute;top:3px;left:13px;width:19px;height:28px;background-position:-100px -30px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area >.btn_stylesrh:after{display:block;position:absolute;top:5px;left:9px;width:27px;height:25px;background-position:-135px -30px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area > .imgsrh_desc{position:absolute;right:0;bottom:-25px;width:130px;height:27px;padding-right:20px;line-height:27px;text-align:center;color:#fff;font-size:13px;letter-spacing:-1px;background-color:rgba(0,0,0,.75);border-radius:3px;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area > .imgsrh_desc i{content:"";display:block;overflow:hidden;position:absolute;top:-5px;right:12px;width:10px;height:5px;background:none;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area > .imgsrh_desc i:after{content:"";display:block;position:absolute;top:1px;right:1px;width:8px;height:8px;background-color:rgba(0,0,0,.75);
	-webkit-transform: rotate(45deg);transform: rotate(45deg);}
.main_header .header_srh_wrap >.srh_box >.app_btn_area > .imgsrh_desc button{display:block;overflow:hidden;position:absolute;top:0;right:0;width:27px;height:27px;text-indent:100%;white-space:nowrap;border:none;background-color:transparent;
	-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;}
.main_header .header_srh_wrap >.srh_box >.app_btn_area > .imgsrh_desc button:after{content:"";display:block;overflow:hidden;position:absolute;top:50%;right:7px;width:11px;height:11px;margin:-6px 0;background:transparent url(http://image.lotte.com/lotte/mo2015/angular/common/btn_close_stylepush.png) 0 0 no-repeat;background-size:11px 11px;}

/* 롯데슈퍼 */
.main_header .header_top_wrap:after{content:"";position:absolute;top:0;right:0;width:139px;height:38px;background:transparent url(http://image.lotte.com/lotte/mo2018/common/header_spr_2018.png) 0 -130px no-repeat;background-size:250px 180px;z-index:10}
.main_header .header_top_wrap .site_move{position:absolute;top:12px;right:10px;display:block;width:86px;height:16px;/*background-position:0 0;background-repeat:no-repeat;background-size:contain;white-space:nowrap;text-indent:100%;*/z-index:20;}

.main_header .header_bottom_wrap{position:relative;padding:7px 60px 8px 11px;height:46px;box-sizing: border-box;}
.main_header .header_bottom_wrap .srh_box{background-color:#fff;border-radius:17px;}
.main_header .header_bottom_wrap .srh_box >.btn_srh{display:block;position:relative;width:100%;height:31px;line-height:31px;padding-left:10px;text-align:left;color:#719cff;
	-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
.main_header .header_bottom_wrap .srh_box >.btn_srh:before{content:"";display:block;position:absolute;top:6px;right:14px;width:18px;height:18px;background:url(http://image.lotte.com/lotte/mo2017/common/header_spr_2017.png) -170px -60px no-repeat;background-size:250px 95px;}/* 2016.12.06 requests */
.main_header .header_bottom_wrap >.btn_cart:after{content:"";display:block;position:absolute;top:6px;left:8px;width:27px;height:24px;background:transparent url(http://image.lotte.com/lotte/mo2018/common/header_spr_2018.png) 0 0 no-repeat;background-size:250px 180px;background-position:-135px -60px;}
.main_header .header_bottom_wrap >.btn_cart{display:block;position:absolute;top:5px;right:8px;width:44px;height:36px;white-space:nowrap;text-indent:100%;}
.main_header .header_bottom_wrap >.btn_cart >i.cnt{position:absolute;top:0;right:2px;min-width:10px;height:10px;line-height:10px;padding:4px 3px 2px 3px;background-color:#fa7257;color:#fff;font-size:10px;z-index:1;border-radius:100%;text-indent:-1px;font-style:normal;letter-spacing:-1px;text-align:center;}
/* nav menu */
.main_header .nav_swipe_wrap{left:0;height:38px;transform:translateX(0) translateZ(0);-webkit-transform:translateX(0) translateZ(0);}
.main_header .nav_swipe_wrap >.main_nav{overflow:hidden;position:relative;text-align:center;background-color:#fff;}
.main_header .nav_swipe_wrap >.main_nav >ul{white-space:nowrap;}
.main_header .nav_swipe_wrap >.main_nav >ul:after{content:"";display:block;clear:both;}
.main_header .nav_swipe_wrap >.main_nav >ul >li{display:inline-block;position:relative;}
.main_header .nav_swipe_wrap >.main_nav >ul >li >a{display:inline-block;position:relative;padding:0 9px;line-height:38px;color:#333;font-size:15px;font-weight:bold;}

.main_header .nav_swipe_wrap >.main_nav >ul >li .cate_flag{display:block;position:absolute;top:2px;left:0;width:100%;height:10px;line-height:10px;text-align:center;color:red;font-size:8px;font-weight:700;}
.main_header .nav_swipe_wrap >.main_nav >ul >li.on >a{color:#5386fa;font-weight:bold;}
.main_header .nav_swipe_wrap >.main_nav >ul >li.on:after{content:"";display:block;position:absolute;left:6px;right:6px;bottom:-1px;height:3px;background-color:#5386fa}
.main_header .nav_swipe_wrap >.main_nav .gradation{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:38px;}
.main_header .nav_swipe_wrap >.main_nav .gradation.before:before{content:"";display:block;position:absolute;top:0;left:0;width:30px;height:38px;}
.main_header .nav_swipe_wrap >.main_nav .gradation.after:after{content:"";display:block;position:absolute;top:0;right:0;width:30px;height:38px;}
.main_header .header_bg { width:100%;height:84px; margin-left: -73px; background:#fff;  }
.main_header .header_bg:after { content:''; width:73px;height:84px;position: absolute; right:0; background:url(http://image.lotte.com/lotte/mo2018/common/main_header_bg_1.png) no-repeat 0 0; background-size: 74px 84px; z-index:1;  }
.main_header .header_bg .logo { position:absolute; top:0; left:0; width:130px;height:20px; padding:16px; line-height:0; }
.main_header .header_bg .logo button { width:130px; height:20px; color:#000; background:url(http://image.lotte.com/lotte/mo2018/common/lottecom-bi.png) no-repeat 0 0; background-size:130px 20px; text-indent:-10000px; }

.main_header .header_bg .one_lotte { position:absolute;  top:26px; right:0; z-index:2; width:40px; height:46px; text-indent:-10000px;  }

.main_header .header_bg .menu_wrap { position:absolute; top:49px;left:16px;width:calc(100% - 90px); height:32px; }
.main_header .header_bg .srh_box { position:absolute; left:0;right:40px; height:32px;border-bottom:3px solid #719cff; }
.main_header .header_bg .btn_srh { display:block;width:100%; height:100%; }
.main_header .header_bg .btn_srh_camera { display:block;position:absolute; top:0;right:0; width:32px; height:32px; background:url(http://image.lotte.com/lotte/mo2018/common/common_icon_20190312.png) no-repeat -254px -54px; background-size: 500px 200px; }

.main_header .header_bg .btn_cart { position:absolute;width:40px;height:50px;top:-14px;right:-9px; z-index:2; text-indent:-10000px; }
.main_header .header_bg .btn_cart:after { content:''; position:absolute;width:40px;height:40px;bottom:0;left:0; border-radius: 50%; z-index:2;  background: url(http://image.lotte.com/lotte/mo2018/common/common_icon_20190312.png) no-repeat -400px -100px; background-size: 500px 200px; z-index:1; }
.main_header .header_bg .btn_cart .cnt { position:absolute;width:21px;height:16px;line-height:16px;top:5px; left:45%; background:url(http://image.lotte.com/lotte/mo2018/common/common_icon_20190312.png) no-repeat -260px -13px; background-size: 500px 200px; z-index:2; text-indent:0; text-align:center;font-size:10px; color:#fff; font-style:normal; }
.main_header .header_bg .btn_cart .cnt.num3 { width:24px; height:16px; background:url(http://image.lotte.com/lotte/mo2018/common/icon-count.png) no-repeat 0 0; background-size: 22px 16px; text-indent:-2px; } 
</style>
