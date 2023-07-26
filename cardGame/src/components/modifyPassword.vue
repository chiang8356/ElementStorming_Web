<template>
    <div class="containerMD">
        <div class="modifyTitle">修改密碼</div>
        <div class="name1">真實姓名:</div>
        <input class="modifyName" type="text" v-model="data.modifyName" readonly>
        <div class="mail1">電子郵件:</div>
        <input class="modifyMail" type="text" v-model="data.modifyMail" readonly>
        <div class="account2">帳號:</div>
        <input class="modifyAccount" type="text" v-model="data.modifyAccount" readonly>
        <div class="password2">新密碼:</div>
        <input class="modifyPassword" type="password" v-model="modifyPassword" placeholder="請輸入8-12位的英文數字混合" required>
        <div class="checkPassword1">確認密碼:</div>
        <input class="modifyCheckPassword" type="password" v-model="modifyCheckPassword" placeholder="請輸入8-12位的英文數字混合" required>
        <div class="modifyMessage">{{ modifyErrorMessage }}</div>
        <button @click="checkbtn" class="checkbtn">確認</button>
        <img class="gray2" src="../assets/images/gray.png" alt="gray">
        <img class="galaxy" src="../assets/images/galaxy.png" alt="galaxy">
    </div>
</template>

<script>
    import { reactive, ref, onMounted } from 'vue';
    import axios from 'axios';

    export default {
        setup() {
            const data = reactive({
                modifyName: "",
                modifyMail: "",
                modifyAccount: "",
            });

            
            const modifyPassword = ref(""); 
            const modifyCheckPassword = ref(""); 
            const modifyErrorMessage = ref(""); 

            const fetchUserData = () => {
                axios.post('http://localhost:8080/users/getbyhttpsession', {})
                    .then(response => {
                        const userData = response.data;
                        data.modifyName = userData.name;
                        data.modifyMail = userData.email;
                        data.modifyAccount = userData.account;
                    })
                    .catch(error => {
                        console.error('Failed to fetch user data:', error);
                    });
            };

            onMounted(() => {
                fetchUserData();
            });


            //限制密碼8-12位英文數字
            const validatePassword = (password) => {
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
                return passwordRegex.test(password);
            };

            const checkbtn = () => {
                if (modifyPassword.value !== modifyCheckPassword.value) {
                    modifyErrorMessage.value = "新密碼和確認密碼不一致!";
                    modifyPassword.value = "";
                    modifyCheckPassword.value = "";
                } else if (!validatePassword(modifyPassword.value)) {
                    modifyErrorMessage.value = "請輸入正確格式的密碼!";
                    modifyPassword.value = "";
                    modifyCheckPassword.value = "";
                } else {
                    axios.put('http://localhost:8080/users/updatepassword', {
                        newpassword: modifyPassword.value,
                    })
                    .then(function (response) {
                        if (response.status === 200) {
                            modifyErrorMessage.value = "修改成功!";
                            modifyPassword.value = "";
                            modifyCheckPassword.value = "";
                        }
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
            };

            return {
                data,
                modifyPassword,
                modifyCheckPassword,
                modifyErrorMessage,
                checkbtn,
            };
        },
    };
</script>





<style>
    .containerMD{
        position: relative; /* 容器元素相對位置 */
    }

    .modifyTitle{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 60px;
        left: 707px;
        transform: scale(2.0);
        letter-spacing: 20px;
        display: inline-block; 
    }

    .name1{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 125px;
        left: 415px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .modifyName{
        color: gray;
        width: 280px;
        height: 30px;
        top: 125px;
        left: 439px;
        font-size: 17px;
        position: relative; 
        z-index: 2;
    }

    .mail1{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 190px;
        left: 28px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .modifyMail{
        color: gray;
        width: 280px;
        height: 30px;
        top: 190px;
        left: 52px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .account2{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 251px;
        left: -305px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .modifyAccount{
        color: gray;
        width: 280px;
        height: 30px;
        top: 252px;
        left: -290px;
        font-size: 17px;
        position: relative; 
        z-index: 2;
    }

    .password2{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 315px;
        left: -673px;
        transform: scale(1.4);
        letter-spacing: 6px; 
        display: inline-block;
    }

    .modifyPassword{
        width: 280px;
        height: 30px;
        top: 269px;
        left: 683px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .checkPassword1{
        color: white;
        font-weight: bold;
        text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
        position: relative; 
        z-index: 2; 
        top: 330px;
        left: 273px;
        transform: scale(1.4);
        letter-spacing: 6px;
        display: inline-block; 
    }

    .modifyCheckPassword{
        width: 280px;
        height: 30px;
        top: 330px;
        left: 297px;
        font-size: 17px; 
        position: relative; 
        z-index: 2; 
    }

    .modifyMessage{
        width: 255px;
        top: 432px;
        left: 633px;
        font-size: 20px;
        color: rgb(204, 4, 4);
        font-weight: bold;
        text-align: center;
        letter-spacing: 2px;
        position: absolute; 
        z-index: 2;
    }

    .checkbtn{
        width: 100px;
        height: 50px;
        top: 445px;
        left: 36px;
        color: white;
        font-size: 22px;
        font-weight: bold;
        text-align: right;
        letter-spacing: 12px;
        background-color: rgb(152, 3, 87);
        border: 4px outset rgb(189, 18, 115);
        cursor: pointer;
        transition: transform 0.3s;
        position: relative;
        z-index: 2;
    }

    .checkbtn:hover{
        transform: scale(1.05);
    }

    .galaxy{
        width: 1505px;
        height: 686px;
        margin-top: -115px;
        opacity: 0.8;
        z-index: -999;
    }

    .gray2{
        width: 510px;
        height: 540px;
        opacity: 1.0;
        position: absolute;
        top: 25px;
        left: 500px;
        z-index: 1;
    }
</style>
