<template>
  <div>
    <el-container>
      <el-header>
        <b-navbar toggleable="lg" fixed="top" style="width: 100%;background: #ffffff;text-align: center;padding: 0">
          <div class="main_center header_navigation" >
            <!-- logo-->
            <div class="logo">
              <b-navbar-brand href="/" >logo</b-navbar-brand>
            </div>
            <div class="navigation_title">
              <b-collapse  id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item href="#" calss="Notiele_name" @click="navigatione(index,item.link)" :class="{title_name:titleNameindex === index}"  v-for="(item,index) in navList" :key="index">
                    {{item.titleName}}
                  </b-nav-item>
                </b-navbar-nav>
              </b-collapse>
            </div>
          </div>
          <!--缩小之后的按钮-->
          <b-navbar-toggle class="nav_btn" target="nav-collapse"></b-navbar-toggle>
        </b-navbar>
      </el-header>
      <el-main>
        <div>
          <nuxt />
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        navList:[
          {titleName:'首页',link:'/'},
          {titleName:'案例',link:'/case'},
          {titleName:'产品介绍',link:'/product'},
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
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  .main_center{
    max-width: 1200px;
    margin: 0 auto;
    min-height: 60px;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-main {
    color: #333;
    text-align: center;
    padding: 0;
    min-height: 1200px;
  }
  /*  导航*/
  .header_navigation{
    display: flex;
    width: 1200px;
    padding:0 40px;
    div{
      flex: 1;
      line-height: 50px;
    }
    .logo{
      text-align: left;
    }

    .navigation_title{
      #nav-collapse{
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
  /*未选中状态*/
  #nav-collapse {
    a:hover{
      color: orange!important;
    }
  }
  /*选中状态*/
  .title_name{
    a{
      color: red!important;
    }
  }
  /*缩小的按钮*/
  .nav_btn{
    position: fixed;
    right: 20px;
    top: 10px;
  }
  .el-header{
    button{
      padding: 0;
      font-size: 20px;
    }
  }
  .Htitle{
    /deep/ .el-divider--horizontal{
      display: block;
      background-color:#000000;
      height: 3px;
      width: 368px;
      margin: 55px auto;
    }
    /deep/ .el-divider__text{
      font-weight: bold;
      font-size: 36px;
    }
  }
</style>
