<template>
    <div class="containerMP">
        <div class="mainTitle">刺激好玩，瘋狂樂趣</div>
        <div class="mainContent">全新的多人線上卡牌遊戲<br>帶給你不一樣的遊戲體驗！</div>
        <button @click="changeDownload" class="downloadbtn">立即下載</button>
        <img class="women" src="../assets/images/women.png" alt="women">
        <img class="cards" src="../assets/images/cards.png" alt="cards">
        <img class="tree" src="../assets/images/tree.png" alt="tree">
        <img class="forest" src="../assets/images/forest.png" alt="forest">

        <div class="welcome">歡迎加入 元素風暴 : 卡牌大師</div>
        <div class="text">這是一款容易上手，絕對讓你愛不釋手的策略卡牌遊戲！</div>
        <div class="text1">快來加入遊戲，開始施放法術，召喚厲害的手下，粉碎你的敵人吧！</div>

        <!--輪播圖-->
        <div class="swiperbox">
            <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true"
                :pagination="{ clickable: true }" :autoplay="{ delay: 3000, disableOnInteraction: false }" :navigation="true"
                :speed="1500" :modules="modules">
                <swiper-slide>
                    <div class="swiper-image-container">
                        <img src="@/assets/images/swiper1.png" alt="swiper1" class="swiper-image" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-image-container">
                        <img src="@/assets/images/swiper2.png" alt="swiper2" class="swiper-image" />
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="swiper-image-container">
                        <img src="@/assets/images/swiper3.png" alt="swiper3" class="swiper-image" />
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="news">
            <img class="latestNews" src="../assets/images/latestNews.png" alt="latestNews">
            <img class="threeCardpack" :src="threeCardpack" alt="threeCardpack">
        </div>

        <img class="cardMark" src="../assets/images/mark.png" alt="mark">
        <div class="newsCardTitle" @click="changeNewsCard">{{ newsCardTitle }}</div>
        <div class="newsCardContent">{{ newsCardContent }}</div>
        <div class="newsCardDate">{{ newsCardDate }}</div>

        <img class="redMonster" :src="redMonster" alt="redMonster">
        <img class="rankMark" src="../assets/images/mark.png" alt="mark">
        <div class="newsRankTitle" @click="changeNewsRank">{{ newsRankTitle }}</div>
        <div class="newsRankContent">{{ newsRankContent }}</div>
        <div class="newsRankDate">{{ newsRankDate }}</div>

        <img class="fourCards" :src="fourCards" alt="fourCards">
        <img class="heroMark" src="../assets/images/mark.png" alt="mark">
        <div class="newsHeroTitle" @click="changeNewsHero">{{ newsHeroTitle }}</div>
        <div class="newsHeroContent">{{ newsHeroContent }}</div>
        <div class="newsHeroDate">{{ newsHeroDate }}</div>

        <img class="introduce" src="../assets/images/introduce.png" alt="introduce">
        <div class="play">愛怎麼玩，就怎麼玩</div>
        <div class="elementalStorm">什麼是元素風暴 : 卡牌大師?</div>
        <div class="cardGame">適合每一個玩家的卡牌策略遊戲，可以與好友在遊戲中透過卡牌來進行對戰，也能在排名中提升名次，或是在單人模式中對付狡詐又機智的電腦對手，遊戲中有多種玩法，趕快下載遊戲一起來玩吧！</div>
        <img class="manyCards" src="../assets/images/manyCards.png" alt="manyCards">

        <div class="character">華麗角色，展現實力</div>
        <div class="gameCharacter">擁有獨一無二的遊戲角色</div>
        <div class="animalCharacter">多種動物角色供玩家選擇，在遊戲中可以選擇自己喜愛的角色。</div>
        <img class="player" src="../assets/images/player.png" alt="player">

        <div class="collect">收集卡牌，打造套牌</div>
        <div class="effect">每種卡牌有不一樣的特殊效果</div>
        <div class="hurt">派出相剋的卡牌造成對手更大的傷害，降低敵人的血量，輕鬆擊敗對手。</div>
        <img class="threeCards" src="../assets/images/threeCards.png" alt="threeCards">

        <div class="videoContainer">
            <img class="watchVideo" src="../assets/images/watchVideo.png" alt="watchVideo">
            <video width="936" height="464" controls poster="../assets/video/picture.png" style="margin-left: 280px;margin-top: 50px;">
                <source src="../assets/video/video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="videoTitle">盡情玩樂，享受對戰的快感！</div>
        <div class="videoContent">無論你喜歡哪種玩法，《元素風暴 : 卡牌大師》都有適合你的模式！在遊戲中你將迎接各種有趣的挑戰和驚喜！</div>


    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import threeCardpack from "../assets/images/threeCardpack.png"
import redMonster from "../assets/images/redMonster.png"
import fourCards from "../assets/images/fourCards.png"

const modules = [Autoplay, Pagination, Navigation, A11y];

export default {

    components: {
        Swiper,
        SwiperSlide
    },

    setup() {
        const router = useRouter();

        // 點立即下載跳轉到 download
        const changeDownload = () => {
            router.push({ name: "download" });
        };

        const changeNewsCard = () => {
            router.push({ name: "newsCard" });
        };

        const changeNewsRank = () => {
            router.push({ name: "newsRank" });
        };

        const changeNewsHero = () => {
            router.push({ name: "newsHero" });
        };

        const newsCardTitle = ref("限時傳奇卡牌  任你抽");
        const newsCardContent = ref("在這個限時的活動中，你將有機會獲得獨特且強大的傳奇卡牌，讓你在遊戲中輕鬆擊敗對手。");
        const newsCardDate = ref("07/14/2023");

        const newsRankTitle = ref("排行榜爭霸戰  準備開始");
        const newsRankContent = ref("準備好了嗎？讓我們一起迎接排行榜爭霸戰的挑戰！展現最好的自己，向冠軍的榮耀出發吧！");
        const newsRankDate = ref("07/08/2023");

        const newsHeroTitle = ref("英雄夥伴  即將回歸");
        const newsHeroContent = ref("眾多傳奇英雄即將回歸，等待你的召喚。這些英雄夥伴擁有強大的能力和獨特的技能，將成為你冒險旅程中得力的助手。");
        const newsHeroDate = ref("06/30/2023");

        return {
            changeDownload,
            changeNewsCard,
            changeNewsRank,
            changeNewsHero,
            modules,
            threeCardpack,
            newsCardTitle,
            newsCardContent,
            newsCardDate,
            redMonster,
            newsRankTitle,
            newsRankContent,
            newsRankDate,
            fourCards,
            newsHeroTitle,
            newsHeroContent,
            newsHeroDate,
        };
    }
}
</script>


<style>
.containerMP {
    position: relative;
    /* 容器元素相對位置 */
}

.mainTitle {
    color: white;
    font-size: 58px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    top: 5px;
    left: 90px;
    letter-spacing: 20px;
    z-index: 1;
    position: relative;
    display: inline-block;
}

.mainContent {
    color: rgb(236, 236, 236);
    font-size: 32px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    top: 150px;
    left: -610px;
    letter-spacing: 10px;
    line-height: 1.6;
    z-index: 1;
    position: relative;
    display: inline-block;
}

.downloadbtn {
    width: 170px;
    height: 55px;
    top: 260px;
    left: -1110px;
    color: white;
    font-size: 27px;
    font-weight: bold;
    text-align: right;
    letter-spacing: 10px;
    background-color: rgb(123, 128, 3);
    border: 4px solid rgb(190, 180, 3);
    cursor: pointer;
    transition: transform 0.3s;
    position: relative;
    z-index: 2;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.8);
}

.downloadbtn:hover {
    transform: scale(1.05);
}

.women {
    width: 300px;
    top: 150px;
    left: 310px;
    position: relative;
    z-index: 1;
}

.cards {
    width: 480px;
    top: -120px;
    left: 400px;
    position: relative;
    z-index: 2;
}

.tree {
    width: 320px;
    top: 120px;
    left: 400px;
    position: relative;
    z-index: 1;
}

.forest {
    width: 1503px;
    height: 685px;
    margin-top: -584px;
    opacity: 0.45;
    z-index: -999;
}

.welcome {
    color: rgb(32, 215, 243);
    font-size: 46px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    text-align: center;
    letter-spacing: 8px;
    margin-top: 40px;
    position: relative;
    z-index: 2;
}

.text {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    text-align: center;
    letter-spacing: 2px;
    margin-top: 50px;
    position: relative;
    z-index: 2;
}

.text1 {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 8px 8px 16px rgba(0, 0, 0, 1);
    text-align: center;
    letter-spacing: 2px;
    margin-top: 25px;
    position: relative;
    z-index: 2;
}

/*swiper輪播圖*/
.swiperbox {
    margin-top: 90px;
    height: 400px;
}

.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events {
    height: 400px;
}

.swiper-image-container {
    display: flex;
    justify-content: center;
}

/*圖片 */
.swiper-image {
    width: 70%;
    /* 設定圖片的寬度為容器的100% */
    height: auto;
    /* 根據圖片比例自動調整高度 */
}

/*左右箭頭 */
.swiper-button-next {
    color: white;
    scale: 0.8;
    top: 168px;
    right: 150px;
}

.swiper-button-prev {
    color: white;
    scale: 0.8;
    top: 168px;
    left: 150px;
}

/*底下圓圈 */
.swiper-horizontal>.swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: 40px;
    z-index: 10;
    scale: 1.3;
}

/*底下圓圈 */
.swiper-pagination-bullet {
    background-color: rgb(212, 212, 212)
}

.news {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.latestNews {
    width: 260px;
    margin-top: 50px;
    margin-left: 200px;
}

.threeCardpack {
    width: 730px;
    margin-top: 50px;
    /* 與news1容器的垂直間距 */
    margin-bottom: 50px;
    margin-left: 370px;
}

.cardMark {
    width: 34px;
    margin-left: 270px;
    display: inline-block;
}

.newsCardTitle {
    font-size: 32px;
    color: rgb(231, 228, 73);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-left: 20px;
    letter-spacing: 15px;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s;
}

.newsCardTitle:hover {
    transform: scale(1.02);
    color: rgb(169, 169, 3);
}

.newsCardContent {
    width: 850px;
    font-size: 22px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    margin-left: 330px;
    letter-spacing: 5px;
    line-height: 1.5;
}

.newsCardDate {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    margin-left: 1030px;
    letter-spacing: 5px;
}

.redMonster {
    width: 550px;
    margin-top: 10px;
    margin-left: 450px;
    margin-bottom: 75px;
}

.rankMark {
    width: 34px;
    margin-left: -730px;
    display: inline-block;
}

.newsRankTitle {
    font-size: 32px;
    color: rgb(231, 228, 73);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-left: 20px;
    letter-spacing: 15px;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s;
}

.newsRankTitle:hover {
    transform: scale(1.02);
    color: rgb(169, 169, 3);
}

.newsRankContent {
    width: 850px;
    font-size: 22px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    margin-left: 330px;
    letter-spacing: 5px;
    line-height: 1.5;
}

.newsRankDate {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    margin-left: 1026px;
    letter-spacing: 5px;
}

.fourCards {
    width: 800px;
    margin-top: 70px;
    margin-left: 340px;
    margin-bottom: 75px;
}

.heroMark {
    width: 34px;
    margin-left: -870px;
    display: inline-block;
}

.newsHeroTitle {
    font-size: 32px;
    color: rgb(231, 228, 73);
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-left: 20px;
    letter-spacing: 15px;
    display: inline-block;
    cursor: pointer;
    transition: transform 0.3s;
}

.newsHeroTitle:hover {
    transform: scale(1.02);
    color: rgb(169, 169, 3);
}

.newsHeroContent {
    width: 850px;
    font-size: 22px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    margin-left: 330px;
    letter-spacing: 5px;
    line-height: 1.5;
}

.newsHeroDate {
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-top: 5px;
    margin-left: 1030px;
    letter-spacing: 5px;
}

.introduce {
    width: 260px;
    margin-top: 120px;
    margin-left: 200px;
}

.play {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-decoration: underline;
    letter-spacing: 5px;
}

.elementalStorm {
    color: rgb(58, 218, 175);
    font-size: 25px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}

.cardGame {
    width: 530px;
    color: white;
    font-size: 21px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    line-height: 40px;
}

.manyCards {
    width: 400px;
    top: -270px;
    right: -900px;
    position: relative;
}

.character {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-top: -180px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-decoration: underline;
    letter-spacing: 5px;
}

.gameCharacter {
    color: rgb(58, 218, 175);
    font-size: 25px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}

.animalCharacter {
    color: white;
    font-size: 21px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    line-height: 40px;
}

.player {
    width: 700px;
    margin-top: 50px;
    margin-left: 405px;
}

.collect {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-top: 130px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-decoration: underline;
    letter-spacing: 5px;
}

.effect {
    color: rgb(58, 218, 175);
    font-size: 25px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}

.hurt {
    color: white;
    font-size: 21px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 275px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    line-height: 40px;
}

.threeCards {
    width: 730px;
    margin-top: 50px;
    margin-left: 385px;
}

.videoContainer {
    display: flex;
    flex-direction: column;
}

.watchVideo {
    width: 260px;
    margin-top: 140px;
    margin-left: 200px;
}

.video {
    margin-top: 50px;
    margin-left: 280px;
}

.videoTitle {
    color: white;
    font-size: 28px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 285px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
}

.videoContent {
    color: white;
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
    margin-left: 285px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: 120px;
}
</style>

