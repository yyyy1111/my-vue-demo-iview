<template>
    <div class="header_page">
      @COPYRIGHT: 1070038355@QQ.COM  2019-08-22 MING'S BLOG
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
  .header_page{
    height: 64px;
    background-color: @primary-color;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    letter-spacing:2px;
  }
</style>