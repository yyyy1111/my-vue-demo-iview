<template>
  <div class="home_page">
    <Layout>
      <!-- <Sider hide-trigger>Sider</Sider> -->
      <Content>
        <Row class="home_container">
          <Col span='4' class="home_container_left">左边栏</Col>
          <Col span='20' class="home_container_right">Home内容区域</Col>
        </Row>
      </Content>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Row , Col ,} from 'iview';
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
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
      background-color: #2db7f5
    }
    .home_container_right{
      background-color: #ff9900
    }
  }
}
</style>
