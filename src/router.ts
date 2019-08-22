import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HelloWorld from './containers/HelloWorld.vue'; // @ is an alias to /src
import About from './containers/About.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HelloWorld,
        },
        {
          path: '/about',
          name: 'about',
          component: About,
        },
      ],
    },
  ],
});
