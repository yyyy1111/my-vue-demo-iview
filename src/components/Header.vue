<template>
  <div class="header_page">
    <Row class="header_row">
        <Col span="20" push="4"  class="header_row header_nav">
          <div class="header_menu_container">
            <ul mode="horizontal"  active-name="1" class="header_menu" >
              <li :class="[isActive ==='首页' ? 'activeClass' : '',]" @click="toggle('首页')">
                <router-link to="/home">首页</router-link>
              </li>
              <li :class="[isActive ==='社区' ? 'activeClass' : '',]" @click="toggle('社区')">
                <router-link to="/about">社区</router-link>
              </li>
              <li :class="[isActive ==='内容编辑' ? 'activeClass' : '',]"  @click="toggle('内容编辑')">内容编辑</li>
              <li :class="[isActive ==='个人中心' ? 'activeClass' : '',]"  @click="toggle('个人中心')">个人中心</li>
            </ul>
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
import { Component, Prop, Vue , Emit ,Provide} from 'vue-property-decorator';
import { Row , Col ,} from 'iview';
// require('../assets/logo.png');
@Component
export default class MyHeader extends Vue {
  @Provide() private isActive: string = '首页';
  toggle(res:any) {
    this.isActive = res;
  }
  
}
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
      }
      .header_menu_container .header_menu{
        width: 100%;
        height:@primary-height;
        display: flex;
        li {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          height: @primary-height;
          background-color:  @primary-color;
          color: #fff;
          cursor: pointer;
          a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            color: #fff;
            height: @primary-height;
          }
        }
        li:hover{
          // background-color: rgba(151,213,91,.5)
          background-color: rgba(255,255,255,.3)
        }
        li.activeClass{
           background-color: rgba(255,255,255,.3)
        }
      }
      .header_login_container {
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #000;
        background-color: @primary-color;
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
            color: #fff;
          }
          a:nth-child(2){
            color: #000;
          }
          a:hover{
            color: #fff;
          }
        }
      }
      
    }
  }
</style>
