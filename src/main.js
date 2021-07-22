import { createApp } from 'vue'

import './styles/main.scss'

import titleMixin from './mixins/titleMixin'

import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).mixin(titleMixin).use(store).use(router).mount('#app')
