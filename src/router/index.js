import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import FoodDemo from '../pages/FoodDemo.vue'
import EyewearDemo from '../pages/EyewearDemo.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/food-demo', name: 'Food Demo', component: FoodDemo },
    { path: '/eyewear-demo', name: 'Eyewear Demo', component: EyewearDemo }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router