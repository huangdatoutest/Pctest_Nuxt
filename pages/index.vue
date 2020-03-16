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

<!--                <div class="slide_tex">1111111</div>-->
<!--                <div class="sliding_block_data"></div>-->
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


  <div class="kong_box"></div>
<!--案例-->
<!--  <div>-->
<!--    <div class="Htitle"><el-divider>案例展示</el-divider></div>-->
<!--    <div class="case_box_fu">-->
<!--      <el-row style="margin: 0" >-->
<!--        <el-col :xs="24" :sm="6" :lg="6"  :xl="6" v-for="(item,index) in caseList" :key="index">-->
<!--          &lt;!&ndash;        @mouseover="changeActive()" @mouseout="removeActive()"&ndash;&gt;-->
<!--          <div  class="case_box_show" >-->
<!--            <transition name="slide-img">-->
<!--              <img :src="item.caseImgName"  v-if="!showDrawer" alt="" >-->
<!--            </transition>-->
<!--            <transition name="slide-fade">-->
<!--              <img :src="item.caseImgName"  v-if="!showDrawer" alt="">-->
<!--              <div @mouseout="removeActive(index)"  v-if="showDrawer"  class="case_box" ></div>-->
<!--            </transition>-->
<!--          </div>-->
<!--        </el-col>-->
<!--      </el-row>-->
<!--    </div>-->
<!--  </div>-->
<!---->
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
            <div class="jou_img"></div>
            <div class="jou_likn">
              <ul>
                <li>111111111111111111111111111111111111111111111</li>
                <li>2222222222222222222222222222222222222222222222</li>
                <li>33333333333333333333333333333333333333333333333</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
                <li>555555555555555555555555555555555555555555555555</li>
              </ul>
            </div>
          </div>
          <div style="text-align: right;margin-right: 20px">更多>>></div>
        </div>
        <div class="jou_right_box">
          <div class="jou_title">最新活动</div>
          <div class="activity_img"></div>
          <ul class="activity_likn">
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
            <li>111111111111111111111111111111111111111111111111111111</li>
          </ul>
          <div style="text-align: right;margin-right: 20px">更多>>></div>
        </div>
  </div>
  </div>




  <div>
<!--    <el-row style="margin: 0" :gutter="10">-->
<!--      &lt;!&ndash;-->
<!--      xs	<768px 响应式栅格数或者栅格属性对象-->
<!--      sm	≥768px 响应式栅格数或者栅格属性对象-->
<!--      md	≥992px 响应式栅格数或者栅格属性对象-->
<!--      lg	≥1200px 响应式栅格数或者栅格属性对象-->
<!--      xl	≥1920px 响应式栅格数或者栅格属性对象-->
<!--      &ndash;&gt;-->

<!--      <el-col :xs="12" :sm="12" :lg="6"  :xl="6" v-for="(item,index) in list" :key="index">-->
<!--        <div class="aa">-->
<!--          <div>{{item.name}}</div>-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <div>-->
<!--      <NuxtLink :to="{ path: '/product', query: { id:111111 }}">-->
<!--        Child 123-->
<!--      </NuxtLink>-->
<!--    </div>-->
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
      showDrawer:false, // 抽屉
      caseList:[
        {caseImgName:require('assets/img/timg.jpg'),casetext:'图片直播'},
        {caseImgName:require('assets/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),casetext:'图片直播'},
        {caseImgName:require('assets/img/timg.jpg'),casetext:'图片直播'},
        {caseImgName:require('assets/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),casetext:'图片直播'},
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
        {busImgName:require('assets/img/timg.jpg'),bustext:'图片直播',type:'top'},
        {busImgName:'图片直播',bustext:require('assets/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),type:'bottom'},
        {busImgName:require('assets/img/timg.jpg'),bustext:'图片直播',type:'top'},
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
  // beforeMount() {
  //   this.screenWidth = this.getwidth();
  //   //图片                高 / 宽  700 / 1920
  //   this.bannerHeight = (700 / 1920) * this.screenWidth - 50;
  //   console.log('bannerHeight', this.bannerHeight)
  // },
  // mounted() {
  //   const that = this;
  //   document.getElementById("el-carousel").style.height =
  //     this.bannerHeight + "px";
  //   //监听浏览器窗口大小改变
  //   window.addEventListener(
  //     "resize",
  //     function () {
  //       that.screenWidth = that.getwidth();
  //       that.setSize();
  //     },
  //     false
  //   );
  //   $("body").append("1");
  // },
  methods:{
    getwidth() {
      var width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return width;
    },

    setSize: function () {
      this.bannerHeight = (700 / 1920) * this.screenWidth - 50;
      document.getElementById("el-carousel").style.height =
        this.bannerHeight + "px";
    },







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
  /*滑动的框*/

  .swiper-wrapper{
    width: 100%;
    /*height:0;*/
    padding-bottom:50%;
    .swiper-slide{
      /*display: flex;*/
      .slide_tex{
        flex: 1;
        background: red;
      }
      .sliding_block_data{
       flex: 1;
        background: yellow;
      }
    }
  }
  /deep/ .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    background: url('~assets/img/sliding_l.png') no-repeat;
    background-size: 100% 100%;
    left: auto;
    right:460px;
    width:40px;
    height:40px;
    bottom: 44px;
  }
  /deep/ .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    background: url('~assets/img/sliding_r.png') no-repeat;
    background-size: 100% 100%;
    right: 400px;
    left: auto;
    width:40px;
    height:40px;
    bottom: 44px;
  }
  /deep/ .swiper-button-prev, .swiper-button-next{
    top: auto;
  }
  /*案例*/

  /* 媒体查询*/
  @media screen and (max-width: 768px) {
    .case_box_fu{
      padding: 10px;
    }
  }
  .case_box_show{
    width: 100%;
    height: 350px;
    margin: 0 1px;
    background: yellow;
    position: relative;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .case_box{
    width: 100%;
    height: 350px;
    margin: 0 1px;
    background: red;
    position: absolute;
    z-index: 9999;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .editor_title{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: yellow;
  }
  .editor{
    width:  100%;
    margin: 0 auto;
    text-align: left;
  }


  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */

  .slide-img-enter-active {
    transition: all .5s ease;
  }
  .slide-img-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-img-enter, .slide-img-leave-to/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(-1000px);
    opacity: 0;
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
/*  功能展示*/
  .fun_quan{
    width:100px;
    height:100px;
    border-radius: 50%;
    background: #FD578E;
    text-align: center;
    margin: auto auto;
    display: flex;
  }
  .fcn_img{
    width: 50%;
    margin: auto;
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
    height:866px;
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
    padding: 20px;
    .jou_left_box{
     width: 70%;
      margin:0 20px 0 0 ;
      border-right:2px #EDEDED dashed ;
      .jou_img{
        width: 389px;
        height: 264px;
        background: red;
        display: block;
        margin-right: 10px;
      }
      .jou_likn{
        width: 200px;
        height: 264px;
        overflow: hidden;
        li{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
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
    }
    .activity_img{
      width: 100%;
      height: 150px;
      background: red;
    }
    .activity_likn{
      height: 98px;
      overflow: hidden;
      li{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
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
