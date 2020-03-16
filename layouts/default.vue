<template>
  <div>

    <el-container>
      <el-header>
      <div class="container">
        <b-navbar toggleable="lg"  type="light" variant="faded">
          <b-navbar-brand href="/"><img class="logo" src="~/assets/img/logo.png" alt="logo"></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!--              左-->
            <b-navbar-nav>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" calss="Notiele_name"
                          @click="navigatione(index,item.link)"
                          :class="{title_name:titleNameindex === index}"
                          v-for="(item,index) in navList" :key="index">
                {{item.titleName}}
              </b-nav-item>
              <b-nav-item  href="#">
                <div class="btn_php">登录后台</div>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

<!--        <b-navbar toggleable="lg" fixed="top" class="header_nav" style="">-->
<!--          <div class="main_center header_navigation" >-->
<!--            &lt;!&ndash; logo&ndash;&gt;-->
<!--            <div class="logo">-->
<!--              <b-navbar-brand href="/" >logo</b-navbar-brand>-->
<!--            </div>-->
<!--            <div class="navigation_title">-->
<!--              <b-collapse  id="nav-collapse" is-nav>-->
<!--                <b-navbar-nav>-->
<!--                  <b-nav-item href="#" calss="Notiele_name" @click="navigatione(index,item.link)" :class="{title_name:titleNameindex === index}"  v-for="(item,index) in navList" :key="index">-->
<!--                    {{item.titleName}}-->
<!--                  </b-nav-item>-->
<!--                </b-navbar-nav>-->
<!--              </b-collapse>-->
<!--            </div>-->
<!--          </div>-->
<!--          &lt;!&ndash;缩小之后的按钮&ndash;&gt;-->
<!--          <b-navbar-toggle class="nav_btn" target="nav-collapse"></b-navbar-toggle>-->
<!--        </b-navbar>-->
      </el-header>
      <el-main>
        <div>
          <nuxt />
        </div>
      </el-main>
      <el-footer style="min-height: 60px;height: auto">
        <div class="main_center footer_box">
          <el-row style="margin: 0" :gutter="10">
            <el-col  :xs="24" :sm="12" :lg="12"  :xl="12">
              <div class="footer_left">
                <div class="Qrcode">
                  <div></div>
                  <p>关注微信公众号</p>
                </div>
                <div class="footer_link">
                  <p class="footer_title">关于我们</p>
                  <p>公司介绍</p>
                  <p>公司文化</p>
                  <p>意见反馈</p>
<!--                  <p>服务热线: 0755-29066609</p>-->
<!--                  <p>服务时间: 9:30 - 18:30</p>-->
<!--                  <p>公司地址: 广东省深圳市福田区八卦岭二路535栋509号</p>-->
                </div>
              </div>
            </el-col>
            <el-col  :xs="24" :sm="12" :lg="12"  :xl="12">
              <div class="footer_right">
                <p class="footer_title">客服服务</p>
                <p>直播合作：0755-2906-6609</p>
                <p>公司地址：广东省深圳市福田区八卦二路535栋509</p>
              </div>
              <p></p>
            </el-col>
          </el-row>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        navList:[
          {titleName:'首页',link:'/'},
          {titleName:'平台优势',link:'/'},
          {titleName:'活动案例',link:'/'},
          {titleName:'业务模块',link:'/'},
          {titleName:'联系我们',link:'/contact'},
        ],
        titleNameindex:0, // 导航栏选择标题
      }
    },
    mounted() {
    },
    methods:{
      navigatione(index,link) {
        this.titleNameindex = index
        this.$router.push({path:link})
      },
    }
  }
</script>

<style lang="less">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px!important;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    color:rgba(0,0,0,1);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *{
    font-family:Microsoft YaHei;
  }
  li{
    list-style-type: none;
  }
  .main_center{
    max-width: 1200px;
    margin: 0 auto;
    min-height: 60px;
  }
  .el-footer{
    background: #333333;
    color: #ffffff;
    padding: 20px 0 ;
    min-height: 60px;
  }
  .el-main {
    color: #333;
    text-align: center;
    padding: 0;
    /*min-height: 1200px;*/
    margin-top:80px
  }


  .el-header{
    width: 100%;
    line-height: 46px;
    padding: 0;
    height: auto!important;
    position: fixed;
    z-index: 999;
    top: 0;
    background: #ffffff!important;
    left: 0;
    font-weight:400;
    #nav-collapse {
      a{
        font-weight:400;
        color: #000000;
      }
      a:hover{
        color: #FE5491!important;
      }
      .title_name{
        a{
          color: #FE5491!important;
        }
      }
      li{
        margin-right:38px ;
        text-align: center;
      }
      .btn_php{
        border:1px solid rgba(228,227,227,1);
        border-radius:5px;
        width: 120px;
        margin:  0 auto 0 auto;
      }
      .btn_php:hover{
        border:1px solid #FE5491!important;
        border-radius:5px;
      }
    }
    .logo{
      width:86px;
      height:45px;
    }
  }















  /*底部*/
  .footer_box{
    padding: 10px;
    .footer_left{
      display: flex;
      .Qrcode{
        margin: 0 20px 0 0;
        text-align: center;
        div{
          width: 130px;
          height: 130px;
          background: red;
        }
      }
      .footer_link{
        p:hover{
          color:#A24664 ;
          cursor: pointer;
        }
      }
    }
    .footer_right{
      margin: 0 0 0 130px;
    }
    .footer_title{
      font-size: 24px;
    }
  }
  /*标题*/
  .Htitle{
    /deep/ .el-divider--horizontal{
      display: block;
      background-color:#000000;
      height: 3px;
      width: 368px;
      margin: 55px auto;
    }
    /deep/ .el-divider__text{
      font-family:Microsoft YaHei;
      font-weight:400;
      font-size:36px;
    }
  }
  @media screen and (max-width: 992px){
    .Htitle{
      /deep/ .el-divider--horizontal{
        display: block;
        background-color:#000000;
        height: 1px;
        width: 227px;
        margin: 55px auto;
      }
      /deep/ .el-divider__text{
        font-size: 18px;
      }
    }
    .nav-link {
      line-height:30px
    }
    .el-main{
      margin-top:51px
    }
    #nav-collapse{
      li{
        margin-right: 0!important;
      }
    }
    .footer_right{
      margin: 0px!important;
    }
  }
</style>
