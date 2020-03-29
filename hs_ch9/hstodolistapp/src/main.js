import Vue from 'vue'
//import App from './App.vue'
import Todolist from './components/TodoList.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(Todolist),
}).$mount('#app')