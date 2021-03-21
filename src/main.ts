import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 屏幕高度 - 头部导航栏高度 = 主体内容高度
const Height = window.screen.height - 172
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
const app = createApp(App)
// 设置全局变量
app.config.globalProperties.Height = Height
app.use(router)
app.mount('#app')
