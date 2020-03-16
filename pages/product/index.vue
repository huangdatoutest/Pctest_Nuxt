<template>
  <div>
    <div class="sliding_bg">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <div class="sliding_box">
              <div class="slide_tex">
                <p class="title"> 免费试用</p>
                <p class="tex"> FREE USE</p>
              </div>
              <div class="sliding_block_data">
                <div class="block">

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  </div>
</template>

<script >
  export default {
    name: "index",
    data () {
      return {
        banners: [
          require('assets/img/sliding.jpg'),
          require('assets/img/sliding.jpg'),
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          }
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
  .swiper-wrapper{
    height: 866px;
  }
  .sliding_box{
    background: red;
    width: 100%;
    height: 100%;
    display: flex;
    .slide_tex{
      flex: 1;
      margin: auto auto;
      .title{
        font-size:58px;
        font-family:Microsoft YaHei;
        font-weight:bold;
        color:rgba(255,255,255,1);
      }
      .tex{
        font-size:40px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
    }
    .sliding_block_data{
      flex: 1;
      margin: auto auto;
      .block{
        width:631px;
        height:407px;
        background:rgba(255,255,255,1);
        box-shadow:0px 11px 37px 9px rgba(0, 0, 0, 0.4);
        border-radius:10px;
      }
    }
  }
</style>
