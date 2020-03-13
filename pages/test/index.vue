<template >
 <div>
   <div @click="getShareConfig" >
     点击
   </div>
   <div  class="case_box" style="background: yellow;position: relative;overflow: hidden"  @mouseover="changeActive()" >
     <transition name="slide-fade">
       <div  v-if="showDrawer" @mouseout="removeActive()" class="case_box" >

       </div>
     </transition>
   </div>
   <br>
   <br>
   <br>
   <br>
   <div class="test-hover"></div>
   <div class="testgif"></div>
 </div>

</template>

<script>
  export default {
    data() {
      return{
        showDrawer:false, // 抽屉
      }
    },
    mounted () {
    },
    methods:{

      getShareConfig() {
        this.showDrawer = !this.showDrawer

      },
      changeActive () {
        this.showDrawer = true
      },
      removeActive () {
        this.showDrawer = false
      }
    }
  };
</script>


<style scoped lang="less">
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to/* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translatey(200px);
    opacity: 0;
  }

  .case_box{
    width: 350px;
    margin: 0 auto;
    height: 350px;
    position: absolute;
    background: red;
  }

  .test-hover, .test-hover1{
    width: 100px;
    height: 100px;
    background: #dddddd;
  }
  .test-hover1:hover{
    background: yellow;
    content: '';
    display: block;
  }
  .test-hover:hover::after{
    background: red;
    content: '';
    display: block;
    animation: first 3s;
  }
  @keyframes first{
    from{
      height:0px;
     }to{
       height:100px;
        display: block;
     }
  }
  .testgif{
    width: 380px;
    height: 400px;
    background: url("/img/1584072240(1).jpg") no-repeat ;
    background-size:100% 100% ;
  }
  .testgif:hover{
    background: url("/img/timg.gif") no-repeat;
  }
</style>

