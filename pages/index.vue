<template>
<div>
<!--  轮播-->
   <div class="block">
<!--     <el-carousel :interval="3000"  arrow="always" id="el-carousel">-->
<!--       <el-carousel-item v-for="(item,index) in Swiperlsit" :key="index">-->
<!--         <img class="swiper_img" :src="item.ImgName" alt="">-->
<!--       </el-carousel-item>-->
<!--     </el-carousel>-->
     <div>
       <img style="height: 100%;width: 100%" src="~assets/img/swiper_img.png" alt="">
     </div>
   </div>

  <div class="sliding_box">
    <div class="sliding_box_bg">
      <div class="sliding_block ">
        <div v-swiper:mySwiper="swiperOption">
          <!--      图片-->
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliding">
              <div style="width: 100%;height: 100%;background: red">

                <div class="slide_tex">1111111</div>
                <div class="sliding_block_data"></div>
              </div>

            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
          <div class="dd">
            <!--      点点-->
            <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
          </div>
        </div>
      </div>
    </div>
  </div>


<!--  <div class="kong_box"></div>-->
<!--案例-->

  <div class="case_box">
    <div class="Htitle"><el-divider>案例展示</el-divider></div>
    <el-row style="margin: 0; overflow: hidden;" >
      <el-col :xs="24" :sm="6" :lg="6"  :xl="6" v-for="(item,index) in caseList" :key="index">
        <!--         @mouseout="removeActive()"-->
        <div class="case_img">
          <img :src="item.caseImgName" alt="" >
        </div>
        <transition name="slide-fade">
          <div  class="case_show" v-if="showDrawer" >
            <div class="inside">
              <div>
                <img :src="item.code" alt="">
                <div>{{item.look}}</div>
              </div>
            </div>
          </div>
        </transition>
      </el-col>
    </el-row>
  </div>

<!--功能-->
  <div class="block_box">
    <div class="Htitle"><el-divider>功能展示</el-divider></div>
    <div class="main_center fcn_box">
    <el-row style="margin: 0" :gutter="10">
      <el-col :xs="12" :sm="6" :lg="6"  :xl="6" v-for="(item,index) in fcnlsit" :key="index">
        <div class="fun_quan">
          <img class="fcn_img" :src="item.fcnName" alt="">
        </div>
        <div class="fun_text">{{item.text}}</div>
      </el-col>
    </el-row>
  </div>
  </div>
<!--业务-->

  <div class=" business_box">
    <div class="main_center">
      <div class="Htitle"><el-divider class="bus_title">业务模块</el-divider></div>
      <el-row style="margin: 0">
        <el-col  :xs="24" :sm="8" :lg="8"  :xl="8" v-for="(item,index) in businessList" :key="index">
          <div class="business">
            <div class="bus_top">
              <img v-if="item.type === 'top'" :src="item.busImgName" alt="">
              <div class="bus_tex" v-else>
                <span > {{ item.busImgName}}</span>
              </div>
            </div>
            <div class="bus_bottom">
              <img v-if="item.type === 'bottom'" :src="item.bustext" alt="">
              <div class="bus_tex" v-else>
                <span > {{item.bustext}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

  <div  class="block_box">
    <div class="Htitle"><el-divider>新闻中心</el-divider></div>
    <div class="main_center journalism">
        <div class="jou_left_box">
          <div class="jou_title">新闻动态</div>
          <div style="display: flex">

            <div class="jou_img"><img src="~assets/img/journalism1.png" alt=""></div>
            <div class="jou_likn">
              <ul>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
                <li>2019环球旅游小姐世界总决赛走进...</li>
              </ul>
            </div>
          </div>
          <div class="jou_more">more></div>
        </div>
        <div class="jou_right_box">
          <div class="jou_title">最新活动</div>
          <div class="activity_img"><img src="~assets/img/journalism2.png" alt=""></div>
          <ul class="activity_likn">
            <li>积分商城上线啦</li>
            <li>积分商城上线啦</li>
          </ul>
          <div class="jou_more">more></div>
        </div>
  </div>
  </div>
</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data () {
    return {

      Swiperlsit:[
        {ImgName:require('assets/img/swiper_img.png')},
        {ImgName:require('assets/img/swiper_img.png')},
        {ImgName:require('assets/img/swiper_img.png')},
        {ImgName:require('assets/img/swiper_img.png')},
      ],
      sliding:[
        {sliImgName:require('assets/img/sliding.jpg')},
        // {sliImgName:require('assets/img/sliding.jpg')},
        // {sliImgName:require('assets/img/sliding.jpg')},
        // {sliImgName:require('assets/img/sliding.jpg')},
      ],
      bannerHeight: 600,
      screenWidth: 1920,
      // 轮播图配置信息, 更多请参考 swiper.js 中文网，上面很详细。
      swiperOption: {
        loop : true,
        speed: 2000,
        autoplay: false,//关闭自动翻页
        observer: true,
        observerParent: true,
        observeSlideChildren: true,
        direction: 'horizontal',
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      //案例
      showDrawer:false,
      caseList:[
        {caseImgName:require('assets/img/case_img1.png'),casetext:'环球城市旅游小姐',look:'扫码观看',code:require('assets/img/case_img2.png')},
        {caseImgName:require('assets/img/case_img2.png'),casetext:'环球旅游小姐世界赛',look:'扫码观看',code:require('assets/img/case_img2.png')},
        {caseImgName:require('assets/img/case_img3.png'),casetext:'精英游艇模特大赛',look:'扫码观看',code:require('assets/img/case_img2.png')},
        {caseImgName:require('assets/img/case_img4.png'),casetext:'全球城市旅游小姐',look:'扫码观看',code:require('assets/img/case_img2.png')},
      ],
    //  功能展示
      fcnlsit:[
        {fcnName:require('assets/img/fun_icon1.png'),text:'视频直播'},
        {fcnName:require('assets/img/fun_icon2.png'),text:'在线报名'},
        {fcnName:require('assets/img/fun_icon3.png'),text:'DIY定制'},
        {fcnName:require('assets/img/fun_icon4.png'),text:'动态发布'},
        {fcnName:require('assets/img/fun_icon5.png'),text:'导师团队'},
        {fcnName:require('assets/img/fun_icon6.png'),text:'积分商城'},
        {fcnName:require('assets/img/fun_icon7.png'),text:'虚拟打赏'},
        {fcnName:require('assets/img/fun_icon8.png'),text:'图片直播'},
      ],
    //  业务
      businessList:[
        {busImgName:require('assets/img/business1.png'),bustext:'图片直播',type:'top'},
        {busImgName:'图片直播',bustext:require('assets/img/business2.png'),type:'bottom'},
        {busImgName:require('assets/img/business3.png'),bustext:'图片直播',type:'top'},
      ]
    }
  },

  // 配置ssr cms
  head() {
    return{
      titleTemplate: this.title,
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content:"aaa"},
        {name: 'keywords', content: "11111"},
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ]
    }
  },
  methods:{

    changeActive (index) {
      this.showDrawer = true
      console.log(index)
    },
    removeActive () {
         this.showDrawer = false
    }
  }
}
</script>

<style scoped lang="less">
  /*块*/
  .block_box{
    padding: 50px 0 104px 0
  }
  /*轮播*/
 /deep/ .el-carousel__container {
    height: 100% !important;
  }
  .swiper_img{
    display: inline-block;
    height: 100%;
    max-width: 100%;
  }
  /*滑块*/
  .kong_box{
    height: 964px;
  }
  .sliding_block{
    position: relative;
  }
  .sliding_box{
    position: relative;
  }
  .sliding_box_bg{
    background: url('~assets/img/sliding.jpg') no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    min-height:100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  /*案例*/
  .case_box{
    width: 100%;
    .case_img{
      width:100%;
      height:400px;
      padding: 6px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-leave-active {
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to/* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateY(1000px);
      opacity: 0;
    }
    .case_show{
      width:100%;
      height:400px;
      padding: 6px;
      .inside{
        width: 100%;
        height: 100%;
        background: #FD578E;
        display: flex;
        div{
          margin: auto;
        }
        img{
          width: 50%;
          margin-bottom: 10px;
        }
      }
    }
  }
/*  功能展示*/
  .fun_quan{
    width:100px;
    height:100px;
    border-radius: 50%;
    background: #FD578E;
    text-align: center;
    margin: auto auto;
    line-height: 100px
  }
  .fcn_img{
    width: 50%;
  }
  .fcn_box{
    text-align: center;
  }
  .fun_text{
    font-size:22px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    margin: 21px 0 80px;
  }
  .fun_quan:hover{
    background: red;
  }
/*  业务*/

  .business_box{
    width: 100%;
    padding: 137px 0 104px 0;
    background:rgba(241,241,241,1);
    .Htitle /deep/ .el-divider__text{
      background:rgba(241,241,241,1);
    }
    .business{
      height:560px;
      background:red;
      box-shadow:0px 1px 24px 0px rgba(198,198,198,0.32);
      .bus_top, .bus_bottom{
        height:280px;
        background: #ffffff;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .bus_tex{
        width: 100%;
        height: 100%;
        display: flex;
        span{
          margin: auto;
          font-size:34px;
          font-family:Microsoft YaHei;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
      }
      .bus_top{
      }
      .bus_bottom{
      }
    }
  }
/*  新闻*/
  .journalism{
    width: 100%;
    border: 1px solid #FD6B9B ;
    margin-bottom: 20px;
    display: flex;
    padding: 28px;
    li{
      list-style-type:disc!important;
      text-align: left;
      font-size:12px;
      font-family:Microsoft YaHei;
      font-weight:400;
      line-height:31px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
    }
    .jou_left_box{
     width: 70%;
      margin:0 20px 0 0 ;
      border-right:2px #EDEDED dashed ;
      .jou_img{
        width: 389px;
        height: 264px;
        display: block;
        margin-right: 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .jou_likn{
        width: 200px;
        height: 272px;
        overflow: hidden;
        margin-left: 20px;
      }
    }
    .jou_right_box{
      width: 30%;
      margin: 1px;
      padding:0 0 0 20px;
    }
    .jou_title{
      margin-bottom: 20px;
      text-align: left;
      font-size:20px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:31px;
    }
    .activity_img{
      width: 100%;
      height: 150px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .activity_likn{
      height: 98px;
      overflow: hidden;
    }
    .jou_more{
      text-align: right;
      margin-right: 20px;
    }
    .jou_more:hover,li:hover{
      color: #FD578E;
      cursor: pointer;
    }
  }
/*  新闻的媒体查询*/
  @media screen and (max-width: 768px) {
    .journalism{
      border: none;
      display: block;
      .jou_left_box{
        width: 100%;
        margin: 0;
        border: none;
      }
      .jou_right_box{
        width: 100%;
        padding: 0;
      }
    }
/*    模块间距*/
    .block_box{
      padding: 20px;
    }
    /deep/ .el-carousel {
      min-height: 200px!important;
    }
    .kong_box{
      height: 0px;
    }
}
  @media screen and (max-width: 360px) {

    /deep/ .el-carousel {
      min-height: 150px!important;
    }
  }


</style>
