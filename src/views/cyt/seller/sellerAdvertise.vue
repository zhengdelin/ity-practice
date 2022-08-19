<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] py-[100px] space-y-20 bg-[#F2F2F2]"
  >
    <!--功能列上排-->
    <div class="flex flex-row space-x-10">
      <!--廣告後臺數據分析功能區塊-->
      <router-link
        :to="{ name: '' }"
        class="relative w-2/3 overflow-hidden"
        style="background-position: 50%"
      >
        <div class="w-full h-[600px] bg-white p-10 space-y-10">
          <!--動畫-->
          <div>
            <Vue3Lottie
              :animationData="analyticsJSON"
              class="w-[400px] h-[400px]"
            />
          </div>
          <div class="text-4xl font-semibold">廣告後臺數據分析</div>
        </div>
        <div
          class="absolute bottom-0 flex items-center pl-10 w-full h-1/4 text-2xl font-semibold text-black hover:bg-white opacity-0 hover:opacity-80 transform transition-all hover:translate-x-10"
        >
          Advertising backend data analysis
        </div>
      </router-link>

      <!--ITY Logo區塊-->
      <div
        class="flex justify-center items-center w-1/3 h-[600px] bg-[#9763AB]"
      >
        <div><ity-footer-logo></ity-footer-logo></div>
      </div>
    </div>

    <!--功能列下排-->
    <div class="flex flex-row space-x-10">
      <!--購買點數功能區塊-->
      <router-link
        :to="{ name: '' }"
        class="relative w-1/2 overflow-hidden"
        style="background-position: 50%"
      >
        <div class="w-full h-[600px] bg-[#9763AB] p-10 space-y-10">
          <!--動畫-->
          <div>
            <Vue3Lottie
              :animationData="premiumJSON"
              class="w-[400px] h-[400px]"
            />
          </div>
          <div class="text-4xl font-semibold text-white">購買點數</div>
        </div>
        <div
          class="absolute bottom-0 flex items-center pl-10 w-full h-1/4 text-2xl font-semibold text-black hover:bg-white opacity-0 hover:opacity-60 transform transition-all hover:translate-x-10"
        >
          Buy Points
        </div>
      </router-link>
      <!--新增廣告貼文功能區塊-->
      <router-link
        :to="{ name: '' }"
        class="relative w-1/2 overflow-hidden"
        style="background-position: 50%"
      >
        <div class="w-full h-[600px] bg-white p-10 space-y-10">
          <!--動畫-->
          <div>
            <Vue3Lottie
              :animationData="advertisePostJSON"
              class="w-[400px] h-[400px]"
            />
          </div>
          <div class="text-4xl font-semibold">新增廣告貼文</div>
        </div>
        <div
          class="absolute bottom-0 flex items-center pl-10 w-full h-1/4 text-2xl font-semibold text-black hover:bg-white opacity-0 hover:opacity-80 transform transition-all hover:translate-x-10"
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
