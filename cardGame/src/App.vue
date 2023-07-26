<template>
  <div class="container">
    <div class="nav">
      <img class="logoTop" @click="changeMainpage" src="./assets/images/logoTop.png" alt="logoTop">
      <img class="icon" src="./assets/images/icon.png" alt="icon">

      <template v-if="!authStore.isLoggedIn">
        <button @click="changeLogin" class="login">登入</button>
      </template>

      <template v-else>
        <div class="userAccount">{{ authStore.userAccount }}，歡迎您!</div>
        <img class="coin" src="./assets/images/coin.png" alt="coin">
        <div class="gameMoney">{{ authStore.userCoins }}</div>
        <div class="memberCenter" @mouseover="showDropdown = true" @mouseleave="hideDropdown">
          會員中心
          <div class="dropdown" v-show="showDropdown || isOptionHovered">
            <button v-for="option in options" :key="option" @mouseover="setOptionHovered(true)"
              @mouseleave="setOptionHovered(false)" @click="selectOption(option)" class="dropdown-button">{{ option
              }}</button>
          </div>
        </div>
      </template>

      <button @click="changeRegister" class="register">註冊</button>
    </div>


    <router-view></router-view>


    <div class="footer">
      <div class="footer1">
        <img class="logoDown" src="./assets/images/logoDown.png" alt="logoDown">
        <img class="pay" src="./assets/images/pay.png" alt="pay">
        <img class="level" src="./assets/images/level.png" alt="level">
        <img class="googlePlay" src="./assets/images/googlePlay.png" alt="googlePlay">
      </div>

      <a href="#top" v-show="showArrow"><img class="arrow" src="./assets/images/arrow.png" alt="arrow"></a>
      <div>
        <img class="waiter" src="./assets//images/waiter.png" @click="toggleCustomerService">
        <div class="customerService" v-if="showCustomerService">
          <iframe allow="microphone;" width="350" height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/9c2e130e-4634-46c4-82e7-e8f5e71d4c03"></iframe>
        </div>
      </div>

      <div class="footer2">
        <img class="community" src="./assets/images/community.png" alt="community">
        <img class="terms" src="./assets/images/terms.png" alt="terms">
        <img class="code" src="./assets/images/code.png" alt="code">
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from "vue-router";
import { useAuthStore } from "./store/auth";


export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    // 點logo跳轉到mainpage
    const changeMainpage = () => {
      router.push({ name: "mainpage" });
    };

    // 點註冊跳轉到register
    const changeRegister = () => {
      router.push({ name: "register" });
    };

    // 點登入跳轉到login
    const changeLogin = () => {
      router.push({ name: "login" });
    };

    // 判斷是否登入成功，登入成功 => authStore.isLoggedIn = true
    const isLoggedIn = authStore.isLoggedIn;




    // 會員中心的下拉選單
    const showDropdown = ref(false);
    const isOptionHovered = ref(false);
    const selectedOption = ref('');
    const options = ['修改密碼', '儲值', '登出'];


    // 按登出，清除token跟userAccount，authStore.isLoggedIn = false，跳轉到主頁
    // 按修改資料，跳轉到修改資料
    const selectOption = (option) => {
      if (option === '登出') {
        //authStore.clearToken();
        authStore.clearUserAccount();
        authStore.isLoggedIn = false;
        sessionStorage.removeItem('user');
        router.push({ name: "mainpage" })
      } else if (option === '修改密碼') {
        router.push({ name: "modifyPassword", })
      } else if (option === '儲值') {
        window.location.href = "http://localhost:80/ecpayCheckout";
      }
      else {
        selectedOption.value = option;
      }
    };

    // 隱藏下拉選單
    const hideDropdown = () => {
      if (!selectedOption.value && !isOptionHovered.value) {
        showDropdown.value = false;
      }
    };

    // 當滑鼠移動到選單，value=true，保持下拉選單
    const setOptionHovered = (value) => {
      isOptionHovered.value = value;
    };



    // 向上箭頭在最頂端會自動隱藏
    const showArrow = ref(false); //最初狀態隱藏，true=>顯示 false=>隱藏
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop; //scrollTop => 滾動位置 (瀏覽器視窗頂部到頁面頂部的距離)
      showArrow.value = scrollTop !== 0; //判斷滾動位置(距離)決定顯示狀態(true、false)
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const showCustomerService = ref(false);

    function toggleCustomerService() {
      showCustomerService.value = !showCustomerService.value;
    }


    return {
      changeMainpage,
      changeRegister,
      changeLogin,
      authStore,
      isLoggedIn,
      showArrow,
      showDropdown,
      isOptionHovered,
      selectedOption,
      options,
      selectOption,
      hideDropdown,
      setOptionHovered,
      showCustomerService,
      toggleCustomerService
    };
  }
};
</script>

<style>
.container {
  background-image: url("./assets/images/backgroundTop.png");
  width: 1503px;
  z-index: -999;
}

.nav {
  display: flex;
  /* 使用flex佈局 */
  align-items: center;
  /* 垂直置中對齊 */
}

.logoTop {
  width: 220px;
  margin-left: 30px;
  margin-bottom: 30px;
  margin-top: 2px;
  cursor: pointer;
  transition: transform 0.3s;
}

.logoTop:hover {
  transform: scale(1.03);
}

.icon {
  width: 200px;
  margin-left: 420px;
  margin-bottom: 25px;
}

.login {
  width: 88px;
  height: 40px;
  margin-left: 384px;
  margin-top: -25px;
  color: white;
  font-size: 21px;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgb(115, 2, 135);
  border: 5px double rgb(209, 3, 245);
  cursor: pointer;
  transition: transform 0.3s;
}

.login:hover {
  transform: scale(1.05);
}

.userAccount {
  width: 400px;
  font-size: 20px;
  color: white;
  margin-top: -25px;
  margin-left: 80px;
  margin-right: 185px;
}

.coin {
  width: 22px;
  margin-left: -421px;
  margin-top: -24px;
}

.gameMoney {
  font-size: 20px;
  color: white;
  margin-left: 3px;
  margin-top: -24px;
}

.memberCenter {
  width: 120px;
  height: 30px;
  margin-left: 34px;
  margin-top: -25px;
  color: white;
  font-size: 21px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgb(115, 2, 135);
  border: 5px double rgb(209, 3, 245);
  cursor: pointer;
  transition: transform 0.3s;
  position: relative;
  display: inline-block;
  z-index: 2;
}

.memberCenter:hover {
  transform: scale(1.05);
}

.memberCenter:hover .dropdown {
  display: block;
}

.dropdown {
  position: absolute;
  top: 120%;
  left: 1px;
  display: none;
}


.dropdown-button {
  display: block;
  width: 125%;
  height: 30px;
  text-align: center;
  font-size: 18px;
  background-color: white;
  color: black;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}

.dropdown-button:hover {
  transform: scale(1.04);
}


.register {
  width: 90px;
  height: 40px;
  margin-left: 30px;
  margin-top: -25px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: rgb(115, 2, 135);
  border: 5px double rgb(209, 3, 245);
  cursor: pointer;
  transition: transform 0.3s;
}

.register:hover {
  transform: scale(1.05);
}

.footer1 {
  background-color: rgb(23, 23, 23);
  width: 1503px;
  height: 90px;
  margin-top: -5px;
}

.footer2 {
  background-color: rgb(23, 23, 23);
  width: 1503px;
  height: 90px;
}

.logoDown {
  width: 180px;
  margin-left: 310px;
  margin-top: 20px;
}

.pay {
  width: 180px;
  margin-left: 90px;
  margin-bottom: -6px;
}

.level {
  width: 50px;
  margin-left: 10px;
  margin-bottom: -6px;
}

.googlePlay {
  width: 180px;
  margin-left: 170px;
}

.arrow {
  width: 45px;
  bottom: 110px;
  right: 40px;
  position: fixed;
  z-index: 1;
  opacity: 0.5;
}

.waiter {
  width: 90px;
  bottom: 20px;
  right: 17px;
  position: fixed;
  z-index: 1;
  opacity: 0.8;
}

.customerService {
  width: 45px;
  bottom: 110px;
  right: 400px;
  position: fixed;
  z-index: 8;
  opacity: 1;
}

.closeBtn {
  width: 400px;
  margin-left: 330px;
  margin-bottom: -20px;
  z-index: 10;
}

.close {
  z-index: 10;
}

.community {
  width: 410px;
  margin-left: 360px;
  margin-bottom: 40px;
}

.terms {
  width: 400px;
  margin-left: -406px;
  margin-top: 70px;
}

.code {
  width: 100px;
  margin-left: 267px;
  margin-top: -90px;
}
</style>