<template>
    <div class="containerLG">
        <div class="loginTitle">登入會員</div>
        <div class="account">帳號:</div>
        <input class="keyAccount" type="text" v-model="keyAccount">
        <div class="password">密碼:</div>
        <input class="keyPassword" type="password" v-model="keyPassword" placeholder="請輸入8-12位的英文數字混合">
        <div class="loginMessage">{{ loginErrorMessage }}</div>
        <button @click="loginbtn" class="loginbtn">登入</button>
        <a href="" class="forgetpw">忘記密碼?</a>
        <img class="gray" src="../assets/images/gray.png" alt="gray">
        <img class="river" src="../assets/images/river.png" alt="river">
    </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

export default {
    setup() {
        const keyAccount = ref("");
        const keyPassword = ref("");
        const loginErrorMessage = ref("");
        const router = useRouter();
        const authStore = useAuthStore();

        const loginbtn = () => {
            axios.post("http://localhost:80/login", {
                username: keyAccount.value,
                password: keyPassword.value,
            })
                .then(function (response) {
                    if (response.status === 200) {
                        
                        authStore.setUserAccount(response.data.username)
                        authStore.setUserCoins(response.data.coins)
                        router.push({ name: "mainpage" }); //跳轉到主頁
                        const user = {
                            username: response.data.username,
                            coins: response.data.coins
                        };

                        // 將使用者資料存儲在 Session Storage
                        sessionStorage.setItem('user', JSON.stringify(user));

                        // 將使用者資料設定為應用程式的狀態
                        //app.config.globalProperties.$user = user;
                    }
                    console.log(response);
                })
                //登入失敗，跳出"帳號或密碼錯誤!"，清空帳號跟密碼的輸入值
                .catch(function (error) {
                    if (error.response?.status === 400) {
                        loginErrorMessage.value = "帳號或密碼錯誤!";
                        keyAccount.value = "";
                        keyPassword.value = "";
                    }
                    console.log(error);
                });
        };

        return {
            keyAccount,
            keyPassword,
            loginErrorMessage,
            loginbtn
        }
    }
}
</script>


<style>
.containerLG {
    position: relative;
    /* 容器元素相對位置 */
}

.loginTitle {
    color: white;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    position: relative;
    z-index: 2;
    top: 80px;
    left: 708px;
    transform: scale(2.0);
    letter-spacing: 20px;
    display: inline-block;
}

.account {
    color: white;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    position: relative;
    z-index: 2;
    top: 178px;
    left: 430px;
    transform: scale(1.5);
    letter-spacing: 10px;
    display: inline-block;
}

.keyAccount {
    width: 280px;
    height: 30px;
    top: 180px;
    left: 450px;
    font-size: 20px;
    position: relative;
    z-index: 2;
}

.password {
    color: white;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    position: relative;
    z-index: 2;
    top: 260px;
    left: 76px;
    transform: scale(1.5);
    letter-spacing: 10px;
    display: inline-block;
}

.keyPassword {
    width: 280px;
    height: 30px;
    top: 260px;
    left: 95px;
    font-size: 17px;
    position: relative;
    z-index: 2;
}

.loginMessage {
    width: 250px;
    top: 330px;
    left: 640px;
    font-size: 20px;
    color: rgb(204, 4, 4);
    font-weight: bold;
    text-align: center;
    letter-spacing: 5px;
    position: absolute;
    z-index: 2;
}

.loginbtn {
    width: 100px;
    height: 50px;
    top: 380px;
    left: -140px;
    color: white;
    font-size: 22px;
    font-weight: bold;
    text-align: right;
    letter-spacing: 12px;
    background-color: rgb(9, 2, 85);
    border: 4px outset rgb(8, 1, 97);
    cursor: pointer;
    transition: transform 0.3s;
    position: relative;
    z-index: 2;
}

.loginbtn:hover {
    transform: scale(1.05);
}

.forgetpw {
    top: 450px;
    left: -254px;
    font-size: 21px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    color: rgb(3, 238, 250);
    letter-spacing: 10px;
    position: relative;
    z-index: 2;
}

.river {
    width: 1505px;
    height: 685px;
    margin-top: -78px;
    margin-left: -2px;
    opacity: 0.8;
    z-index: -999;
}

.gray {
    width: 480px;
    height: 480px;
    opacity: 1.0;
    position: absolute;
    top: 40px;
    left: 518px;
    z-index: 1;
}
</style>