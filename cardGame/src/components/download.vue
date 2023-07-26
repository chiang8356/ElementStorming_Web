<template>
    <div class="containerDL">
        <div class="playTitle">立即遊玩 【元素風暴】</div>
        <div class="playContent">迫不及待展開遊戲了嗎? 點選下載，享受無盡的樂趣吧！</div>
        <img class="windows" src="../assets/images/windows.png" alt="windows">
        <img class="mac" src="../assets/images/mac.png" alt="mac">
        <img class="google" src="../assets/images/google.png" alt="google">
        <img class="volcano" src="../assets/images/volcano.png" alt="volcano">
    </div>
</template>

<script>
    import { ref } from "vue";

    export default {
        setup() {


            return {  };
        }
    }
</script>

<style>
    .containerDL{
        position: relative; /* 容器元素相對位置 */
    }

    .playTitle{
        color: white;
        font-size: 50px;
        font-weight: bold;
        letter-spacing: 20px;
        top: 15px;
        left: 410px;
        position: relative; 
        z-index: 1;
        display: inline-block; 
    }

    .playContent{
        color: white;
        font-size: 26px;
        font-weight: bold;
        letter-spacing: 10px;
        top: -45px;
        left: 313px;
        position: relative; 
        z-index: 1;
        display: inline-block; 
    }

    .windows{
        width: 300px;
        top: 245px;
        left: -780px;
        position: relative; 
        z-index: 1; 
        cursor: pointer;
        transition: transform 0.3s;
    }

    .windows:hover{
        transform: scale(1.03);
    }

    .mac{
        width: 298px;
        top: 238px;
        left: -620px;
        position: relative; 
        z-index: 1; 
        cursor: pointer;
        transition: transform 0.3s;
    }

    .mac:hover{
        transform: scale(1.03);
    }

    .google{
        width: 320px;
        top: 130px;
        left: 1040px;
        position: relative; 
        z-index: 1; 
        cursor: pointer;
        transition: transform 0.3s;
    }

    .google:hover{
        transform: scale(1.03);
    }

    .volcano{
        width: 1505px;
        height: 685px;
        margin-top: -325px;
        margin-left: -2px;
        opacity: 0.5;
        z-index: -999;
    }

</style>