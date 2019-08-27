<template>
  <div class="home_page">
    <Layout>
      <!-- <Sider hide-trigger>Sider</Sider> -->
      <Content>
        <Row class="home_container">
          <Col span='4' class="home_container_left">
            <div class="hcl_first_row">
              <h3>搜一搜</h3>
              <Input search enter-button placeholder="请输入关键词" />
            </div>
            <div class="hcl_second_row">
              <h3>文章分类</h3>
              <ul>
                <li></li>
              </ul>
            </div>
            <div class="hcl_third_row">
              <h3>最新更新</h3>
              <ul></ul>
            </div>
          </Col>
          <Col span='20' class="home_container_right">Home内容区域</Col>
        </Row>
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Provide} from 'vue-property-decorator';
import { Row , Col , Input} from 'iview';
@Component
export default class HelloWorld extends Vue {
  @Provide() private imgSrc: any = require('@/assets/logo.png');
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home_page {
  height: @primary-height;
  .home_container{
    height: @primary-height;
    .home_container_left,.home_container_right{
      height: @primary-height;
    }
    .home_container_left{
      background-color: #2db7f5;
      padding:10px 10px;
      .hcl_first_row,.hcl_second_row,.hcl_third_row{
        width: 100%;
        h3{
          text-align: left;
          font-size: 16px;
          line-height: 40px;
          font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          color: @primary-color;
        }
      }
      .hcl_second_row,.hcl_third_row{
        margin-top: 10px;
      }
    }
    .home_container_right{
      background-color: #ff9900
    }
  }
}
</style>
