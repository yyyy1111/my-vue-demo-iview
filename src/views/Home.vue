<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="layout">
      <Layout>
        <MyHeader class="home_header">Header</MyHeader>
        <router-view></router-view>
        <Footer class="home_footer">Footer</Footer>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/containers/HelloWorld.vue'; // @ is an alias to /src
import About from '@/containers/About.vue';
import MyHeader from '@/components/Header.vue';
import { Layout  , Footer} from 'iview';
@Component({
  components: {
    HelloWorld,
    About,
    MyHeader,
  },
})
export default class Home extends Vue {}
</script>
<style scoped lang="less">
  .home_header ,.home_footer{
    background: #515a6e;
    color: rgb(255,255,255);
  }
</style>