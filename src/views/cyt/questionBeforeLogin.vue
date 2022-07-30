<template>
  <ity-header></ity-header>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="space-y-40">
      <!--此間距仍須調整-->
      <classic-title :content="'系統介紹'"></classic-title>
      <p class="text-4xl font-bold text-[#4B4B4B]">這些問題應該如何解決呢</p>
    </div>
    <div class="flex flex-row space-x-[190px]">
      <question-item></question-item>
      <question-item></question-item>
      <question-item></question-item>
    </div>
    <p class="text-4xl font-bold text-[#4B4B4B] pt-20">
      <!--此間距仍須調整-->
      那就來使用 ITY / I特約 !!!
    </p>
    <div class="flex flex-col space-y-[300px]">
      <div class="flex flex-row">
        <appointment-map></appointment-map>
        <seller-search></seller-search>
      </div>
      <div class="flex flex-row">
        <seller-info></seller-info>
        <seller-coupon></seller-coupon>
      </div>
    </div>
    <div class="flex flex-col items-center text-4xl">
      <p class="flex text-black">針對不同使用者，ITY制定不同的系統</p>
      <div class="flex flex-row">
        <p class="text-black">分為</p>
        <p class="text-[#6F6F6F]">消費者端 / 店家端 / 組織端(學生會)</p>
      </div>
    </div>
    <!--身分動畫-->
    <div class="flex justify-between space-x-10">
      <identity-item :content="'消費者端'"></identity-item>
      <identity-item :content="'店家端'"></identity-item>
      <identity-item :content="'組織端'"></identity-item>
    </div>
    <Vue3Lottie
      :animationData="howTargetedTrafficWorksJSON"
      class="w-[800px] h-[800px]"
    />
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import questionItem from "@/vues/shows/questionItem.vue";
import appointmentMap from "@/vues/functionIntro/appointmentMap.vue";
import sellerSearch from "@/vues/functionIntro/sellerSearch.vue";
import sellerInfo from "@/vues/functionIntro/sellerInfo.vue";
import sellerCoupon from "@/vues/functionIntro/sellerCoupon.vue";
import identityItem from "@/vues/shows/identityItem.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";

import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import howTargetedTrafficWorksJSON from "@/vues/json/how-targeted-traffic-works.json";

export default {
  name: "questionPage",
  components: {
    Vue3Lottie,
    ityHeader: ityHeader,
    classicTitle: classicTitle,
    questionItem: questionItem,
    appointmentMap: appointmentMap,
    sellerSearch: sellerSearch,
    sellerInfo: sellerInfo,
    sellerCoupon: sellerCoupon,
    identityItem: identityItem,
    ityFooter: ityFooter,
  },
  data() {
    return {
      howTargetedTrafficWorksJSON,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
