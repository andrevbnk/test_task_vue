import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
