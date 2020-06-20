import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import Home from "./modules/Home";
import About from "./modules/About";
import Resume from "./modules/Resume";

Vue.use(Router);

const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/resume', component: Resume}
]

const router = new Router({
    // mode: 'history',
    routes
});


new Vue({
    el: '#app',
    render: h => h(App),
    router
})
