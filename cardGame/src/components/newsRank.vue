<template>
    <div class="containerRank">
        <div class="rankTitle">{{ title }}</div>
        <div class="rankContent">{{ content }}</div>
        <div class="rankDate">{{ date }}</div>
        <img class="bottle" :src="bottle" alt="bottle">
        <img class="mountain" src="../assets/images/mountain.png" alt="mountain">
    </div>
</template>

<script>
    import { ref } from "vue";
    import bottle from "../assets/images/bottle.png";

    export default{                
        setup(){

            const title = ref("排行榜爭霸戰 準備開始");
            const content = ref("排行榜爭霸戰即將於7月13日開始，活動至7月17日截止，排行榜前三名者將獲得豐富的獎品！準備好迎接排行榜爭霸戰了嗎？展現你的策略智慧和卡牌技巧，精心選擇你的牌組，創造出令人驚艷的實力，爭奪冠軍的寶座！");
            const date = ref("07/08/2023");

            return {title, content, date, bottle, };
        }
    }
</script>

<style>
    .containerRank{
        position: relative; /* 容器元素相對位置 */
    }

    .rankTitle{
        font-size: 30px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: -50px;
        left: 480px;
        position: relative; 
        z-index: 2;
        letter-spacing: 20px;
        display: inline-block; 
    }

    .rankContent{
        width: 850px;
        font-size: 20px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        text-align: justify;
        top: 140px;
        left: -210px;
        position: relative; 
        z-index: 2;
        letter-spacing: 5px; 
        line-height: 2.5;
        display: inline-block;
    }

    .rankDate{
        font-size: 18px;
        color: white;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        top: -10px;
        left: 1030px;
        position: relative; 
        z-index: 2; 
        letter-spacing: 5px;
        display: inline-block; 
    }
    
    .bottle{
        width: 400px;
        top: 250px;
        left: 400px;
        position: relative; 
        z-index: 2; 
    }

    .mountain{
        width: 1503px;
        height: 686px;
        margin-top: -368px;
        opacity: 0.5;
        z-index: -999;
    }
</style>