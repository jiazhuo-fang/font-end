// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/template/goods';
import ratings from './components/template/ratings';
import seller from './components/template/seller';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/', component: goods
}, {
  path: '/goods', component: goods
}, {
  path: '/ratings', component: ratings
}, {
  path: '/seller', component: seller}];
const router = new VueRouter({linkActiveClass: 'active', routes});

/* eslint-disable no-new */
new Vue({el: '#app', router, render: h => h(App)});
/* eslint-disable no-new */
