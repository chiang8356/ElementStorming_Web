<template>
    <div class="containerRG">
        <div class="registerTitle">歡迎註冊</div>
        <div class="name">真實姓名:</div>
        <input class="keyName" type="text" v-model="keyName" required>
        <div class="idNumber">身分證字號:</div>
        <input class="keyIdNumber" type="text" v-model="keyIdNumber" required>
        <div class="phone">手機號碼:</div>
        <input class="keyPhone" type="text" v-model="keyPhone" required>
        <div class="mail">電子郵件:</div>
        <input class="keyMail" type="text" v-model="keyMail" required>
        <div class="account1">帳號:</div>
        <input class="keyAccount1" type="text" v-model="keyAccount1" required>
        <div class="password1">密碼:</div>
        <input class="keyPassword1" type="password" v-model="keyPassword1" placeholder="請輸入8-12位的英文數字混合" required>
        <div class="checkPassword">確認密碼:</div>
        <input class="keyCheckPassword" type="password" v-model="keyCheckPassword" placeholder="請輸入8-12位的英文數字混合" required>
        <div class="registerMessage">{{ registerErrorMessage }}</div>
        <button @click="registerbtn" class="registerbtn">註冊</button>
        <img class="gray1" src="../assets/images/gray.png" alt="gray">
        <img class="jungle" src="../assets/images/jungle.png" alt="jungle">
    </div>
</template>

<script>
    import { ref } from "vue";
    import axios from "axios";

    export default {
        setup() {
             const keyName = ref('');
            const keyIdNumber = ref('');
            const keyPhone = ref('');
            const keyMail = ref('');
            const keyAccount1 = ref('');
            const keyPassword1 = ref('');
            const keyCheckPassword = ref('');
            const registerErrorMessage = ref('');

            // 限制密碼8-12位英文數字
            const validatePassword = (password) => {
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
                return passwordRegex.test(password);
            };

            
            const registerbtn = () => {
            // 檢查是否有任何欄位空白，跳出"欄位不可以空白!"
            if (
                keyName.value === "" ||
                keyIdNumber.value === "" ||
                keyPhone.value === "" ||
                keyMail.value === "" ||
                keyAccount1.value === "" ||
                keyPassword1.value === "" ||
                keyCheckPassword.value === ""
            ) {
                registerErrorMessage.value = "欄位不可以空白!";
            }

            // 檢查密碼跟確認密碼是否相同，且符合限制的格式
            if (keyPassword1.value === keyCheckPassword.value && validatePassword(keyPassword1.value)) {
                registerErrorMessage.value = "";

            // 前端用post請求將資料傳送到指定路徑 (8080是springboot的port號)
                axios.post('http://localhost:80/users/register', {
                    // name: keyName.value,
                    // id_number: keyIdNumber.value,
                    // phone: keyPhone.value,
                    email: keyMail.value,
                    username: keyAccount1.value,
                    password: keyPassword1.value
                })
                .then(function (response) {
                    //註冊成功，跳出"註冊成功!"，清空全部的輸入值
                    if (response.status === 200) {
                        registerErrorMessage.value = "註冊成功!";
                        keyMail.value = "";
                        keyAccount1.value = "";
                        keyPassword1.value = "";
                        keyCheckPassword.value = "";
                    }
                    console.log(response);
                })
            } else {
                //輸入的密碼與確認密碼不相同，跳出""密碼跟確認密碼不一致!"，清空密碼與確認密碼的輸入值
                if (keyPassword1.value !== keyCheckPassword.value) {
                    registerErrorMessage.value = "密碼跟確認密碼不一致!";
                    keyPassword1.value = "";
                    keyCheckPassword.value = "";
                //驗證密碼是否符合限制的格式，如果不符合會是false，加上!變true，跳出"請輸入正確格式的密碼!"，清空密碼與確認密碼的輸入值
                } else if (!validatePassword(keyPassword1.value)) {
                    registerErrorMessage.value = "請輸入正確格式的密碼!";
                    keyPassword1.value = "";
                    keyCheckPassword.value = "";
                }
            }
        };



            return {
                keyName,
                keyIdNumber,
                keyPhone,
                keyMail,
                keyAccount1,
                keyPassword1,
                keyCheckPassword,
                registerErrorMessage,
                registerbtn,
            };
        }
    }
</script>


<style>
    .containerRG{
        position: relative; /* 容器元素相對位置 */
    }

    .registerTitle{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 25px;
        left: 707px;
        transform: scale(2.0);
        letter-spacing: 20px;
        display: inline-block; 
    }

    .name{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 105px;
        left: 425px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyName{
        width: 280px;
        height: 30px;
        top: 105px;
        left: 449px;
        font-size: 17px;
        position: relative; 
        z-index: 2;
    }

    .idNumber{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 160px;
        left: 14px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyIdNumber{
        width: 280px;
        height: 30px;
        top: 160px;
        left: 41px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .phone{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 215px;
        left: -369px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyPhone{
        width: 280px;
        height: 30px;
        top: 215px;
        left: -346px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .mail{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 270px;
        left: -755px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyMail{
        width: 280px;
        height: 30px;
        top: 223px;
        left: 693px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .account1{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 275px;
        left: 335px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyAccount1{
        width: 280px;
        height: 30px;
        top: 278px;
        left: 350px;
        font-size: 17px;
        position: relative; 
        z-index: 2;
    }

    .password1{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 328px;
        left: -7px;
        transform: scale(1.4);
        letter-spacing: 6px; 
        display: inline-block;
    }

    .keyPassword1{
        width: 280px;
        height: 30px;
        top: 330px;
        left: 8px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .checkPassword{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 380px;
        left: -400px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .keyCheckPassword{
        width: 280px;
        height: 30px;
        top: 382px;
        left: -378px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .registerMessage{
        width: 250px;
        top: 480px;
        left: 640px;
        font-size: 20px;
        color: rgb(204, 4, 4);
        font-weight: bold;
        text-align: center;
        letter-spacing: 2px;
        position: absolute; 
        z-index: 2;
    }

    .registerbtn{
        width: 100px;
        height: 50px;
        top: 490px;
        left: -640px;
        color: white;
        font-size: 22px;
        font-weight: bold;
        text-align: right;
        letter-spacing: 12px;
        background-color: rgb(1, 48, 14);
        border: 4px outset rgb(4, 101, 1);
        cursor: pointer;
        transition: transform 0.3s;
        position: relative;
        z-index: 2;
    }

    .registerbtn:hover{
        transform: scale(1.05);
    }

    .jungle{
        width: 1504px;
        height: 685px;
        margin-top: -114px;
        opacity: 0.8;
        z-index: -999;
    }

    .gray1{
        width: 510px;
        height: 590px;
        opacity: 1.0;
        position: absolute;
        top: 5px;
        left: 500px;
        z-index: 1;
    }
</style>