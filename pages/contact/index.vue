<template>
  <div>
    <div class="c_box">
      <img class="logo" src="~assets/img/logo1.png" alt="">
      <div class="content">
        <div style="display: none">
          <h2>宣美互联——互联网解决方案的领导者</h2>
          <br>
          <br>
          <p>深圳市宣美互联文化科技有限公司以高度的战略格局和敏锐的商业嗅觉，</p>
          <p>提供引领行业的移动互联网软件定制开发服务。</p>
          <p>涵盖APP开发,软件开发,HTML5开发,微信开发,运营推广等专业服务。</p>
          <p>未来属于强者，属于具有战略眼光的人，我们将和众多服务客户及合作伙伴</p>
          <p>共同成长，一起见证中国移动互联网的伟大变革。</p>
          <img class="contact_xia" src="~assets/img/contact_xia.png" alt="">
        </div>
        <div>
          <ul class="form_box">
            <li>
              <span class="name">公司名称：</span>
              <span>
                <input type="text" placeholder="请输入公司名称">
              </span>
            </li>
            <li>
              <span  class="name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
              <span>
                 <input type="text" placeholder="请输入姓名">
              </span>
            </li>
            <li>
              <span  class="name">电&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;话：</span>
              <span>
                 <input type="text" placeholder="请输入电话号码">
              </span>
            </li>
            <li>
              <div class="name">
                行业类别选择：
              </div>
              <div>
                <el-radio v-model="radio" label="1">选美公司</el-radio>
                <el-radio v-model="radio" label="2">培训公司</el-radio>
                <el-radio v-model="radio" label="3">活动公司</el-radio>
                <el-radio v-model="radio" label="4">其他</el-radio>
              </div>
              <p>

              </p>
            </li>
            <img class="contact_l" src="~assets/img/contact_l.png" alt="">
          </ul>
        </div>
      </div>

     <button class="c_btn">加入我们</button>
    </div>
  </div>
</template>

<script >
    export default {
        name: "index",
      data () {
        return {
          radio: '1'
        }
        },
      mounted() {
      }
    }
</script>

<style scoped lang="less">
  /deep/ .el-footer{
    display: none!important;
  }
  .c_box{
    height:866px;
    background: url('~assets/img/contact_bg.jpg') no-repeat;
    background-size: cover;
  }
  .logo{
    margin: 49px 0 40px 0;
    width:132px;
    height:134px;
  }
  .content{
    width:1200px;
    height:491px;
    background:rgba(0,0,0,0.5);
    border:1px solid rgba(255,255,255,1);
    border-radius:10px;
    margin: 0 auto;
    text-align: center;
    padding: 48px 0;
    h2{
      height:35px;
      font-size:36px;
      font-family:Microsoft YaHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height:31px;
    }
    p{
      width:858px;
      font-size:26px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:53px;
      margin: 0 auto;
    }
  }
  .contact_xia{
    margin-top: 25px;
    width:17px;
    height:39px;
  }
  .c_btn{
    width:280px;
    height:64px;
    background:rgba(253,87,142,1);
    border-radius:32px;
    border: none;
    font-size:40px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-top: 33px;
  }
  /*表单*/
  .form_box{
    position: relative;
    .contact_l{
      position: absolute;
      right: 98px;
      top: 214px;
    }
    li{
      width:520px;
      min-height:50px;
      background:rgba(255,255,255,1);
      border-radius:25px;
      margin:0 auto 30px;
      text-align: left!important;
      line-height: 50px;
      padding:0 26px;
      input{
        width: 70%;
        height: 40px;
        border: none;
        outline: none;
      }
      .name{
        font-size:20px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(253,87,142,1);
      }

    }
  }
  /deep/ .el-radio__input.is-checked .el-radio__inner{
    background-color: rgba(253,87,142,1);
    border-color: rgba(253,87,142,1);
  }
  /deep/ .el-radio__input.is-checked+.el-radio__label{
    color:rgba(51,51,51,1);
  }
  /deep/ .el-radio__label{
    font-size:18px;
    font-family:Microsoft YaHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    line-height:31px;
  }
</style>
