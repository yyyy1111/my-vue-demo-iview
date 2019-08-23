<template>
    <div class="footer_page">
      <div class="footer_copyright">
        @COPYRIGHT: 1070038355@QQ.COM  2019-08-22 MING'S BLOG
      </div>
      <div class="footer_catway">
        <i class="iconfont iconQQ"></i>
        <i class="iconfont iconweibo"></i>
        <i class="iconfont iconphone"></i>
        <i class="iconfont iconweixin"></i>
        <i class="iconfont iconGitHub"></i>
      </div>   
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import { Row , Col , Menu , MenuItem} from 'iview';
// require('../assets/logo.png');
@Component
export default class MyFooter extends Vue {}
</script>
<style scoped lang="less" >
  .footer_page{
    height: 64px;
    background-color: @primary-color;
    display: flex;
    position: relative;
    justify-content: space-between;
      .footer_copyright{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        letter-spacing:2px;
      }
      .footer_catway{
        position: absolute;
        right: 20px;
        top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing:10px;
        .iconfont{
          font-size: 20px;
          cursor: pointer;
        }
        .iconfont:hover{
          color: #fff;
        }
      }
  }
</style>