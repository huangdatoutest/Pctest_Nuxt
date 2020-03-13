<template>
<div>
<!--  轮播-->
   <div class="block">
      <el-carousel class="swiper">
        <el-carousel-item v-for="(item,index) in Swiperlsit" :key="index">
          <img class="swiper_img" :src="item.ImgName" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
<!--  <div><img src="~/static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg" alt=""></div>-->
  <div class="sliding_block ">
    <div v-swiper:mySwiper="swiperOption">
<!--      图片-->
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in Swiperlsit">
          <img :src="banner.ImgName">
        </div>
      </div>
      <div class="dd">
        <!--      点点-->
         <div class="swiper-pagination swiper-pagination-bullets"></div>
        <div class="swiper-button-prev"><</div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next">></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
    </div>

  </div>
<!--案例-->
  <div class="Htitle"><el-divider>案例展示</el-divider></div>
  <div class="main_center ">
<!--    <div @click="mver = !mver">1</div>-->
    <el-row style="margin: 0" :gutter="10">
      <el-col :xs="24" :sm="8" :lg="8"  :xl="8" v-for="(item,index) in caseList" :key="index">
<!--        @mouseover="changeActive()" @mouseout="removeActive()"-->
        <div  class="case_box" style="background: yellow;position: relative;overflow: hidden"
              @mouseover="changeActive($event,index)" >
          <transition name="slide-fade">
            <div @mouseout="removeActive(index)"  v-if="showDrawer"  class="case_box" >
            </div>
          </transition>
        </div>
        <h4 class="editor_title">{{item.title}}</h4>
        <div class="editor">{{item.editor}}</div>
      </el-col>
    </el-row>
  </div>

  <div class="Htitle"><el-divider>功能展示</el-divider></div>
  <div class="main_center fcn_box">
    <el-row style="margin: 0" :gutter="10">
      <el-col :xs="12" :sm="6" :lg="6"  :xl="6" v-for="(item,index) in fcnlsit" :key="index">

        <el-popover
          placement="top-start"
          title=""
          width="200"
          trigger="hover"
          >
          <div><img class="fcnName" :src="item.fcnName" alt=""></div>
          <el-button slot="reference"> <img class="fcnName" :src="item.fcnName" alt=""></el-button>
        </el-popover>
        <div>{{item.text}}</div>
      </el-col>
    </el-row>
  </div>

 <div class="Htitle"><el-divider>业务模块</el-divider></div>
 <div class="main_center business_box">
   <el-row style="margin: 0" :gutter="10">
     <el-col  :xs="24" :sm="8" :lg="8"  :xl="8" v-for="(item,index) in businessList" :key="index">
       <div class="business">
          <div class="bus_top">
            <img v-if="item.type === 'top'" :src="item.busImgName" alt="">
            <span v-else> {{item.busImgName}}</span>
          </div>
          <div class="bus_bottom">
            <img v-if="item.type === 'bottom'" :src="item.bustext" alt="">
            <span v-else> {{item.bustext}}</span>
          </div>
       </div>
     </el-col>
   </el-row>
 </div>

  <div class="Htitle"><el-divider>新闻中心</el-divider></div>
  <div class="main_center journalism"></div>




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
        {ImgName:require('static/img/timg.jpg')},
        {ImgName:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg')},
        {ImgName:require('static/img/timg.jpg')},
        {ImgName:require('static/img/timg.jpg')},
      ],
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
        {title:'2019UNG全球联合选美盛典',editor:'赛事不仅只关注于选手个人的社会成就和公益成就 ，同时选手还将通过组委会的层层面试及比赛现场的表现，评选出综合素质最强的前三甲，将有机会代表中国参加世界赛，让中国女性魅力绽放于世界的舞台。'},
        {title:'2019UNG全球联合选美盛典',editor:'赛事不仅只关注于选手个人的社会成就和公益成就 ，同时选手还将通过组委会的层层面试及比赛现场的表现，评选出综合素质最强的前三甲，将有机会代表中国参加世界赛，让中国女性魅力绽放于世界的舞台。'},
        {title:'2019UNG全球联合选美盛典',editor:'赛事不仅只关注于选手个人的社会成就和公益成就 ，同时选手还将通过组委会的层层面试及比赛现场的表现，评选出综合素质最强的前三甲，将有机会代表中国参加世界赛，让中国女性魅力绽放于世界的舞台。'},
      ],
    //  功能展示
      fcnlsit:[
        {fcnName:require('static/img/timg.jpg'),text:'图片直播'},
        {fcnName:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),text:'图片直播'},
        {fcnName:require('static/img/timg.jpg'),text:'图片直播'},
        {fcnName:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),text:'图片直播'},
        {fcnName:require('static/img/timg.jpg'),text:'图片直播'},
        {fcnName:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),text:'图片直播'},
        {fcnName:require('static/img/timg.jpg'),text:'图片直播'},
        {fcnName:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),text:'图片直播'},
      ],
    //  业务
      businessList:[
        {busImgName:require('static/img/timg.jpg'),bustext:'图片直播',type:'top'},
        {busImgName:'图片直播',bustext:require('static/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),type:'bottom'},
        {busImgName:require('static/img/timg.jpg'),bustext:'图片直播',type:'top'},
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
      ]
    }
  },

  methods:{
    changeActive (e,index) {
      console.log(e)
      this.showDrawer = true
    },
    removeActive () {
         this.showDrawer = false
    }
  }
}
</script>

<style scoped lang="less">
  .swiper{
    margin-top: 5px;
  }
 /deep/ .el-carousel__container{
      width: 100%;
     height:0;
     padding-bottom:30%;
  }
 .swiper_img{
   width: 100%;
   max-height: 600px;
   -o-object-fit: cover;
   object-fit: cover;
 }
  /*@media only screen and (min-width: 641px) and (max-width: 1200px) {*/
  /*  /deep/ .el-carousel__container{*/
  /*    width: 100%;*/
  /*    height:400px;*/
  /*  }*/
  /*}*/
  .dd{
    width: 200px;
    height: 20px;
    position: absolute;
    z-index: 99;
    bottom: 5%;
    right: 5%;
  }
  /*滑块*/
  .sliding_block{
    position: relative;
  }
  .swiper-wrapper{
    width: 100%;
    height:0;
    padding-bottom:50%;
    .swiper-slide{
      img{
        width: 100%;
        max-height: 946px;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
  /*左右箭头*/
  /deep/ .swiper-button-next,  .swiper-button-prev{
    width: 20px;
    height: 20px;
    background: red;
    bottom:0;
    top: auto;
    left: auto;
  }
  /*左*/
  /deep/ .swiper-button-prev{
    right: 55px;
  }
  /*右*/
  /deep/ .swiper-button-next{
    right: 20px;
  }
  /*点点*/
  /deep/ .swiper-pagination{
    bottom:0;
    top: 0;
    left: 0;
    span{
      margin: 0 5px;
    }
  }
  /*案例*/

  .case_box{
    width: 350px;
    height: 350px;
    margin: 0 auto;
    background: red;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .editor_title{
    width: 350px;
    margin: 0 auto;
    text-align: center;
    background: yellow;
  }
  .editor{
    width: 350px;
    margin: 0 auto;
    text-align: left;
  }


  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
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
  .fcnName{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
}
  .fcn_box{
    /deep/ .el-button:focus, .el-button:hover{
      background: none;

    }
    /deep/ .el-button{
      border: none;
    }
  }
/*  业务*/
  .business_box{
    .business{
        width: 350px;
        height: 350px;
        margin: 0 auto;
        background: red;
    }
    .bus_bottom, .bus_top{
      width: 350px;
      height: 50%;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .bus_top{
      background: yellow;
    }
    .bus_bottom{
    }
  }
/*  新闻*/
  .journalism{

  }
</style>
