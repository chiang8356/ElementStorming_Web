<template>
    <div class="containerHero">
        <div class="heroTitle">{{ title }}</div>
        <div class="heroContent">{{ content }}</div>
        <div class="heroDate">{{ date }}</div>
        <img class="smallFox" :src="smallFox" alt="smallFox">
        <img class="bigFox" :src="bigFox" alt="bigFox">
        <img class="cat" src="../assets/images/cat.png" alt="cat">
    </div>
</template>

<script>
    import { ref } from "vue";
    import smallFox from "../assets/images/smallFox.png";
    import bigFox from "../assets/images/bigFox.png";

    export default{                
        setup(){

            const title = ref("英雄夥伴 即將回歸");
            const content = ref("限時活動於7月5日至7月11日，在活動期間內，你可以隨機召喚這些英雄夥伴來增強你的牌組。每位英雄都有自己獨特的技能，他們可以提供額外的攻擊力、防禦力或者特殊的法術效果，讓你在戰鬥中佔據優勢！");
            const date = ref("06/30/2023");

            return {title, content, date, smallFox, bigFox};
        }
    }
</script>

<style>
    .containerHero{
        position: relative; /* 容器元素相對位置 */
    }

    .heroTitle{
        font-size: 30px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: -50px;
        left: 559px;
        position: relative; 
        z-index: 2;
        letter-spacing: 20px;
        display: inline-block; 
    }

    .heroContent{
        width: 1000px;
        font-size: 20px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: justify;
        top: 140px;
        left: -200px;
        position: relative; 
        z-index: 2;
        letter-spacing: 5px; 
        line-height: 2.5;
        display: inline-block;
    }

    .heroDate{
        font-size: 18px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: -86px;
        left: 1086px;
        position: relative; 
        z-index: 2; 
        letter-spacing: 5px;
        display: inline-block; 
    }
    
    .smallFox{
        width: 140px;
        top: 280px;
        left: 200px;
        position: relative; 
        z-index: 2; 
    }

    .bigFox{
        width: 170px;
        top: 280px;
        left: 250px;
        position: relative; 
        z-index: 2; 
    }

    .cat{
        width: 1503px;
        height: 685px;
        margin-top: -408px;
        opacity: 0.5;
        z-index: -999;
    }
</style>