<template>
  <div class="header_page">
    <Row class="header_row">
        <Col span="20" push="4"  class="header_row">这是nav</Col>
        <Col span="4" pull="20"  class="header_row header_logo">
          MING'S BLOG
        </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Row , Col } from 'iview';
@Component
export default class MyHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .header_page{
    height: 64px;
    .header_row{
      height: 100%;
      background-color: @primary-color;
    }
    .header_logo{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 600;
      font-family:Verdana, Geneva, Tahoma, sans-serif
    }
  }
</style>
