import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from "./store/auth";
import axios from 'axios';

axios.defaults.withCredentials = true;

const app = createApp(App)
const pinia = createPinia()

app.use(router)

app.use(pinia)

const authStore = useAuthStore();

// 檢查 sessionStorage 中是否存在使用者資料
const storedUser = sessionStorage.getItem('user')
if (storedUser) {
    const user = JSON.parse(storedUser)
    authStore.setUserAccount(user.username)
    authStore.setUserCoins(user.coins)
}

// 發送請求以從資料庫獲取最新的使用者資料
axios.post("http://localhost:80/find")
    .then(response => {
        sessionStorage.removeItem('user');
        const user = {
            username: response.data.username,
            coins: response.data.coins
        };
        // 將使用者資料存儲在 Session Storage
        sessionStorage.setItem('user', JSON.stringify(user));
        // 更新 authStore 中的使用者資料
        authStore.setUserAccount(response.data.username)
        authStore.setUserCoins(response.data.coins)

        // 將使用者資料設定為應用程式的狀態
        app.config.globalProperties.$user = user;
    })
    .catch(error => {
        console.log(error)
    })


app.mount('#app')



