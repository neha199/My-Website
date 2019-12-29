import Vue from 'vue';
import Router from 'vue-router';
import Home from "./modules/Home";
import About from "./modules/About";

Vue.use(Router);

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

const router = new Router({
  // mode: 'history',
  routes
});


const app = new Vue({
    router
}).$mount('#app')
