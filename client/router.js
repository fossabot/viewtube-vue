// Unfortunately, @nuxt/router doesn't support typescript at the moment

import Vue from 'vue';
import Router from 'vue-router';

const Index = () =>
  import(/* webpackChunkName: "group-index" */ '@/pages/index.vue').then(m => m.default || m);
const Login = () =>
  import(/* webpackChunkName: "group-login" */ '@/pages/login.vue').then(m => m.default || m);
const Register = () =>
  import(/* webpackChunkName: "group-register" */ '@/pages/register.vue').then(m => m.default || m);
const Results = () =>
  import(/* webpackChunkName: "group-results" */ '@/pages/results.vue').then(m => m.default || m);
const Watch = () =>
  import(/* webpackChunkName: "group-watch" */ '@/pages/watch.vue').then(m => m.default || m);

const Channel = () =>
  import(/* webpackChunkName: "group-channel" */ '@/pages/channel.vue').then(m => m.default || m);
const Embed = () =>
  import(/* webpackChunkName: "group-embed" */ '@/pages/embed.vue').then(m => m.default || m);
const SubscriptionIndex = () =>
  import(/* webpackChunkName: "group-subscription" */ '@/pages/subscriptions/index.vue').then(
    m => m.default || m
  );
const SubscriptionManage = () =>
  import(/* webpackChunkName: "group-subscription" */ '@/pages/subscriptions/manage.vue').then(
    m => m.default || m
  );
const ProfileIndex = () =>
  import(/* webpackChunkName: "group-profile" */ '@/pages/profile/index.vue').then(
    m => m.default || m
  );
const History = () =>
  import(/* webpackChunkName: "group-history" */ '@/pages/history.vue').then(m => m.default || m);
const Playlist = () =>
  import(/* webpackChunkName: "group-playlist" */ '@/pages/playlist.vue').then(m => m.default || m);

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Index
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/results',
        component: Results
      },
      {
        path: '/watch',
        name: 'watch',
        component: Watch
      },
      {
        path: '/embed/:id',
        component: Embed,
        meta: { headless: true }
      },
      {
        path: '/channel/:id',
        component: Channel
      },
      {
        path: '/subscriptions',
        component: SubscriptionIndex
      },
      {
        path: '/subscriptions/manage',
        component: SubscriptionManage
      },
      {
        path: '/profile',
        component: ProfileIndex
      },
      {
        path: '/history',
        component: History
      },
      {
        path: '/playlist',
        component: Playlist
      }
    ]
  });
}
