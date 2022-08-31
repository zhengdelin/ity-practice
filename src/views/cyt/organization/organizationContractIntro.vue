<template>
  <div
    class="h-full px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 2xl:space-y-20 mb-20 2xl:mb-40"
  >
    <div
      class="flex flex-col items-center w-full space-y-10 sm:space-y-[100px] pt-10"
    >
      <contract-card
        v-for="(item, index) in contractCardList"
        :key="index"
        :contractCard="item"
      >
      </contract-card>
      <div
        class="flex flex-col justify-center items-center w-5/6 sm:w-full h-56 2xl:h-[340px] border-2 border-[#4B4B4B] font-semibold space-y-5 sm:space-y-10 p-4"
      >
        <p class="text-lg 2xl:text-4xl text-[#6F6F6F]">那就交給 ITY 吧 !</p>
        <p class="text-base 2xl:text-3xl text-[#6F6F6F]">
          我們除了簡化紙本簽呈一切繁複的過程，還給予使用者更方便、更有系統性的簽核功能
        </p>
        <p class="text-lg 2xl:text-4xl text-black">
          快加入 ITY，成為眾人引頸翹望的美食霸主吧
        </p>
      </div>
    </div>
    <router-link
      :to="{ name: 'organizationContractStatus' }"
      class="flex justify-center w-full pt-5"
    >
      <classic-button
        :name="'開始'"
        class="w-2/3 lg:w-1/2 h-12 md:h-16 xl:h-20 2xl:h-[100px] rounded-md md:rounded-lg bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
      ></classic-button>
    </router-link>
  </div>
</template>

<script>
import contractCard from "@/vues/cards/contractCard";
import contractAnimation1 from "@/vues/animation/contractCardType1";
import contractAnimation2 from "@/vues/animation/contractCardType2";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "contractIntro",
  components: {
    contractCard,
    classicButton,
    // contractAnimation1,
    // contractAnimation2,
  },
  setup() {
    const contractCardList = [
      {
        title: "CONTRACT MANAGEMENT",
        question1: "紙本合約書怎麼找都找不到?",
        question2: "已簽約但尚未付款的合約書如何處理?",
        question3: "同個客戶的合約書太多，沒有完整的系統架構?",
        animation: contractAnimation1,
        else: "⬅ ⬆ 簽合約的時候是不是時常有這些情形",
      },
      {
        title: "ONLINE CONTRACT",
        question1: "申請流程須準備一堆紙本文件，超容易弄丟",
        question2: "重要關頭，忘記帶印泥、原子筆沒水",
        question3: "紙本文件審核冗長，毫無效率可言",
        animation: contractAnimation2,
        else: "⬅ ⬆ 又或是......",
      },
    ];
    return { contractCardList };
  },
};
</script>
