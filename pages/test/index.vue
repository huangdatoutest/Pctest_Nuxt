<template >
 <div>
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
 </div>

</template>

<script>
  export default {
    data() {
      return{
        showDrawer:false,
        caseList:[
          {caseImgName:require('assets/img/case_img1.png'),casetext:'环球城市旅游小姐',look:'扫码观看',code:require('assets/img/case_img2.png')},
          {caseImgName:require('assets/img/case_img2.png'),casetext:'环球旅游小姐世界赛',look:'扫码观看',code:require('assets/img/case_img2.png')},
          {caseImgName:require('assets/img/case_img3.png'),casetext:'精英游艇模特大赛',look:'扫码观看',code:require('assets/img/case_img2.png')},
          {caseImgName:require('assets/img/case_img4.png'),casetext:'全球城市旅游小姐',look:'扫码观看',code:require('assets/img/case_img2.png')},
        ],
      }
    },
    mounted () {
    },
    methods:{
      changeActive(index){
        if (index === 0) {
          this.showDrawer = true
        }
      }
    }
  };
</script>


<style scoped lang="less">
  .case_box{
    width: 100%;
    height:647px;
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

</style>

