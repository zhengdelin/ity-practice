<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] py-[100px] space-y-16 xl:space-y-20 bg-[#F2F2F2]"
  >
    <!--功能列上排-->
    <div
      class="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-5 md:space-y-0"
    >
      <!--廣告後臺數據分析功能區塊-->
      <router-link
        :to="{ name: '' }"
        class="relative flex flex-col justify-center items-center w-full md:w-2/3 h-72 sm:h-80 md:h-[360px] lg:h-[400px] xl:h-[480px] 2xl:h-[600px] overflow-hidden bg-white p-10 space-y-6 sm:space-y-4 md:space-y-10"
        style="background-position: 50%"
      >
        <!--動畫-->
        <div>
          <Vue3Lottie
            :animationData="analyticsJSON"
            class="w-40 sm:w-48 xl:w-60 2xl:w-[400px] h-40 sm:h-48 xl:h-60 2xl:h-[400px]"
          />
        </div>
        <div class="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
          廣告後臺數據分析
        </div>
        <div
          class="invisible lg:visible absolute bottom-0 flex items-center pl-10 w-full h-0 lg:h-1/4 text-2xl font-semibold 2xl:font-bold text-white hover:bg-black opacity-0 hover:opacity-70 transform transition-all hover:translate-x-10"
        >
          Advertising backend data analysis
        </div>
      </router-link>

      <!--ITY Logo區塊-->
      <div
        class="flex justify-center items-center w-full md:w-1/3 h-40 sm:h-48 md:h-[360px] lg:h-[400px] xl:h-[480px] 2xl:h-[600px] bg-[#9763AB]"
      >
        <div>
          <ity-footer-logo
            class="w-32 sm:w-44 xl:w-60 2xl:w-72 h-32 sm:h-44 xl:h-60 2xl:h-2xl"
          ></ity-footer-logo>
        </div>
      </div>
    </div>

    <!--功能列下排-->
    <div
      class="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-5 md:space-y-0"
    >
      <!--購買點數功能區塊-->
      <router-link
        :to="{ name: '' }"
        class="relative flex flex-col justify-center items-center w-full md:w-1/2 h-72 sm:h-80 md:h-[360px] lg:h-[400px] xl:h-[480px] 2xl:h-[600px] overflow-hidden bg-[#9763AB] p-10 space-y-6 sm:space-y-4 md:space-y-10"
        style="background-position: 50%"
      >
        <!--動畫-->
        <div>
          <Vue3Lottie
            :animationData="premiumJSON"
            class="w-40 sm:w-48 xl:w-60 2xl:w-[400px] h-40 sm:h-48 xl:h-60 2xl:h-[400px]"
          />
        </div>
        <div
          class="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-white"
        >
          購買點數
        </div>
        <div
          class="invisible lg:visible absolute bottom-0 flex items-center pl-10 w-full h-0 lg:h-1/4 text-2xl font-semibold 2xl:font-bold text-black hover:bg-white opacity-0 hover:opacity-70 transform transition-all hover:translate-x-10"
        >
          Buy Points
        </div>
      </router-link>
      <!--新增廣告貼文功能區塊-->
      <router-link
        :to="{ name: 'sellerAddPost' }"
        class="relative flex flex-col justify-center items-center w-full md:w-1/2 h-72 sm:h-80 md:h-[360px] lg:h-[400px] xl:h-[480px] 2xl:h-[600px] overflow-hidden bg-white p-10 space-y-6 sm:space-y-4 md:space-y-10"
        style="background-position: 50%"
      >
        <!--動畫-->
        <div>
          <Vue3Lottie
            :animationData="advertisePostJSON"
            class="w-40 sm:w-48 xl:w-60 2xl:w-[400px] h-40 sm:h-48 xl:h-60 2xl:h-[400px]"
          />
        </div>
        <div class="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
          新增廣告貼文
        </div>
        <div
          class="invisible lg:visible absolute bottom-0 flex items-center pl-10 w-full h-0 lg:h-1/4 text-2xl font-semibold 2xl:font-bold text-white hover:bg-black opacity-0 hover:opacity-70 transform transition-all hover:translate-x-10"
        >
          Add a new advertisement post
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import analyticsJSON from "@/vues/json/data-analysis.json";
import premiumJSON from "@/vues/json/premium-gold.json";
import advertisePostJSON from "@/vues/json/adds.json";
import ityFooterLogo from "@/vues/icons/ityFooterLogo.vue";

export default {
  name: "sellerAdvertisePage",
  components: { Vue3Lottie, ityFooterLogo },
  setup() {
    return { analyticsJSON, premiumJSON, advertisePostJSON };
  },
};
</script>

<style scoped></style>
