<template>
  <div
    class="relative flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] w-full h-[200px] md:h-[300px] lg:h-[400px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')]"
    style="background-position: 50%"
  >
    <div class="flex flex-col z-20 space-y-5 md:space-y-7 xl:space-y-10">
      <div
        class="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-white"
      >
        購買會員點數 享受獨家功能
      </div>
      <div
        class="flex flex-row items-end space-x-2 md:space-x-3 lg:text-x-6 2xl:space-x-5"
      >
        <div class="text-xl md:text-2xl xl:text-3xl text-white">
          Support ITY
        </div>
        <div class="text-sm md:text-base xl:text-xl text-white">
          Increase your brand exposure
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-40 z-10"
    ></div>
  </div>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 xl:space-y-[100px] mb-20 2xl:mb-40"
  >
    <div
      class="grid justify-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 mt-10 xl:mt-20 2xl:mt-24"
    >
      <point-intro-card
        v-for="(item, index) in pointIntroCardList"
        :key="index"
        :pointIntroCard="item"
      ></point-intro-card>
    </div>
    <router-link :to="{ name: '' }" class="flex justify-center w-full pt-5">
      <classic-button
        :name="'開始'"
        class="w-2/3 lg:w-1/2 h-16 md:h-20 xl:h-24 2xl:h-[100px] rounded-md md:rounded-lg bg-[#9763AB] hover:bg-gradient-to-r hover:from-[#fccb90] hover:to-[#d57eeb] text-white"
      ></classic-button>
    </router-link>
  </div>
</template>

<script>
import pointIntroCard from "@/vues/cards/pointIntroCard.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "buyPointsIntroPage",
  components: { pointIntroCard, classicButton },
  setup() {
    const pointIntroCardList = [
      {
        title: "推播功能",
        content:
          "購買ITY POI NT可以使用ITY會員推播功能讓您的文章能夠被更多潛在消費者看見!",
      },
      {
        title: "後臺管理",
        content:
          "將廣告推播後，可使用ITY「廣告後臺數據分析」系統，檢視綜合數據，進而調整店家營運、行銷策略......",
      },
      {
        title: "信賴關係",
        content:
          "購買ITY POINT代表您信賴本公司的產品，我們將不定期以電子郵件形式寄送優惠資訊",
      },
    ];
    return { pointIntroCardList };
  },
};
</script>
