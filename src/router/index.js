import Vue from "vue";
import VueRouter from "vue-router";
import Recommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/recommend'
  },
  {
    path:'/recommend',
    component:Recommend
  },
  {
    path:'/singer',
    component:Singer
  },
  {
    path:'/rank',
    component:Rank
  },
  {
    path:'/search',
    component:Search
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
