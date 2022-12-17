import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import CurrencyList from './pages/CurrencyList.vue'
import CurrencyConverter from './pages/CurrencyConverter.vue'
import store from './store'

const app = createApp(App)

const routes = [
	{ path: '/', component: CurrencyList },
	{ path: '/converter', component: CurrencyConverter },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

app.use(router)
app.use(store)

app.mount('#app')
