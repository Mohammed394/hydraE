// frontend/src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
