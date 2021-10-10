import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
import EyewearDemo from '../pages/EyewearDemo.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    // { path: '/about', name: 'About', component: About },
    { path: '/eyewear-demo', name: 'Eyewear Demo', component: EyewearDemo }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router