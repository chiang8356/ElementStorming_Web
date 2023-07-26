<template>
    <div class="containerCard">
        <div class="cardTitle">{{ title }}</div>
        <div class="cardContent">{{ content }}</div>
        <div class="cardDate">{{ date }}</div>
        <img class="cardPack" :src="cardPack" alt="cardPack">
        <img class="cardPack1" :src="cardPack1" alt="cardPack1">
        <img class="planet" src="../assets/images/planet.png" alt="planet">
    </div>
</template>

<script>
    import { ref } from "vue";
    import cardPack from "../assets/images/cardPack.png";
    import cardPack1 from "../assets/images/cardPack1.png";

    export default{                
        setup(){

            const title = ref("限時傳奇卡牌  任你抽");
            const content = ref("活動將在7月19日開跑！在這場限時活動中，獨特且強大的傳奇卡牌正等著你，它將為你帶來前所未有的遊戲體驗。傳奇卡牌具有超凡的能力，能輕鬆擊敗對手！趕快前往遊戲商店，抽取傳奇卡牌，時間有限，你絕不能錯過這個難得的機會！");
            const date = ref("07/14/2023");

            return {title, content, date, cardPack, cardPack1};
        }
    }
</script>

<style>
    .containerCard{
        position: relative; /* 容器元素相對位置 */
    }

    .cardTitle{
        font-size: 30px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: -200px;
        left: 150px;
        position: relative; 
        z-index: 2;
        letter-spacing: 20px;
        display: inline-block; 
    }

    .cardContent{
        width: 545px;
        font-size: 20px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: justify;
        top: 100px;
        left: -328px;
        position: relative; 
        z-index: 2;
        letter-spacing: 5px; 
        line-height: 2.5;
        display: inline-block;
    }

    .cardDate{
        font-size: 18px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: 160px;
        left: -470px;
        position: relative; 
        z-index: 2; 
        letter-spacing: 5px;
        display: inline-block; 
    }
    
    .cardPack{
        width: 213px;
        top: 113px;
        right: 20px;
        position: relative; 
        z-index: 2; 
    }

    .cardPack1{
        width: 211px;
        top: -200px;
        right: -820px;
        position: relative; 
        z-index: 2; 
    }

    .planet{
        width: 1503px;
        height: 685px;
        margin-top: -635px;
        opacity: 0.6;
        z-index: -999;
    }
</style>