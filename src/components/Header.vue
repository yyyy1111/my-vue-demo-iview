<template>
  <div class="header_page">
    <Row class="header_row">
        <Col span="20" push="4"  class="header_row header_nav">
          <div class="header_menu_container">
            <Menu mode="horizontal"  active-name="1" class="header_menu">
              <MenuItem name="1">首页</MenuItem>
              <MenuItem name="2">社区</MenuItem>
              <MenuItem name="3">内容编辑</MenuItem>
              <MenuItem name="4">个人中心</MenuItem>
            </Menu>
          </div>
          <div class="header_login_container">
            <div class="header_img_container">
              <img src="../assets/logo.png">
            </div>
            <div class="header_login_text">
              <a href="javascript:;">登录</a>/
              <a href="javascript:;">注册</a>
            </div>
          </div>
        </Col>
        <Col span="4" pull="20"  class="header_row header_logo">
          MING'S BLOG
        </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Row , Col , Menu , MenuItem} from 'iview';
// require('../assets/logo.png');
@Component
export default class MyHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header_page{
    height: 64px;
    .header_row{
      height: @primary-height;
      background-color: @primary-color;
    }
    .header_logo{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
      font-family:Verdana, Geneva, Tahoma, sans-serif
    }
    .header_nav{
      display: flex;
      justify-content:space-between;
      align-items: center;
      .header_menu_container{
        width: 60%;
        height:@primary-height;
        .header_menu{
        height: @primary-height;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          height: @primary-height;
        }
      }
      }
      .header_login_container {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #000;
        background-color: #fff;
        .header_img_container{
          height: 40px;
          width: 40px;
          // background-color: #f00;
          border-radius: 50%;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            // border-image-width:0;
            // background-color: #f00;
          }
          img:hover{
            cursor: pointer;
          }
        }
        .header_login_text{
          margin-left: 20px;
          margin-right: 20px;
          a:nth-child(1){
            color: @primary-color;
          }
          a:nth-child(2){
            color: #000;
          }
          a:hover{
            color: @primary-color;
          }
        }
      }
      
    }
  }
</style>
