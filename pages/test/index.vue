<template >
 <div>
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
 </div>

</template>

<script>
  export default {
    data() {
      return{
        //  业务
        businessList:[
          {busImgName:require('assets/img/timg.jpg'),bustext:'图片直播',type:'top'},
          {busImgName:'图片直播',bustext:require('assets/img/7e2206d98ee54830ec73be8daad18632_wmk.jpeg'),type:'bottom'},
          {busImgName:require('assets/img/timg.jpg'),bustext:'图片直播',type:'top'},
        ]
      }
    },
    mounted () {
    },
    methods:{

    }
  };
</script>


<style scoped lang="less">
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
</style>

