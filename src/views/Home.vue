<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="layout">
      <Layout>
        <MyHeader class="home_header">Header</MyHeader>
        <router-view></router-view>
        <MyFooter class="home_footer">Footer</MyFooter>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/containers/HelloWorld.vue'; // @ is an alias to /src
import About from '@/containers/About.vue';
import MyHeader from '@/components/Header.vue';
import MyFooter from '@/components/Footer.vue';
import { Layout  } from 'iview';
@Component({
  components: {
    HelloWorld,
    About,
    MyHeader,
    MyFooter,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
  // .home_header ,.home_footer{
  //   background: #515a6e;
  //   color: rgb(255,255,255);
  // }
</style>