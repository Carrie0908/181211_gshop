// 入口
// 1. 引入vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: c => c(App),
    router // 1. 多了几个组件标签 //2. 多了两个属性
})