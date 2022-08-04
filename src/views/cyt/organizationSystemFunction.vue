<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'組織端系統介紹'"
      class="w-full mt-14"
    ></classic-title>
    <p
      class="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#4B4B4B] pt-10 xl:pt-20 pb-[30px] xl:pb-[60px]"
    >
      這些問題應該如何解決呢
    </p>
    <!--呈現三個問題 + 動畫-->
    <div class="flex flex-col items-center md:flex-row space-x-0 md:space-x-10">
      <!--1920/2xl:space-x-[190px]-->
      <question-item
        v-for="(item, index) in questionItemList"
        :key="index"
        :questionItem="item"
      ></question-item>
    </div>
    <p
      class="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#4B4B4B] py-[60px]"
    >
      那就來使用 ITY / I特約 !!!
    </p>
    <!--功能列表-->
    <div class="flex flex-col space-y-40 2xl:space-y-[300px]">
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <online-contract></online-contract>
        <joint-launch-events></joint-launch-events>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <appointment-post></appointment-post>
        <contacting-function></contacting-function>
      </div>
    </div>
    <div
      class="flex flex-col items-center text-2xl lg:text-3xl 2xl:text-4xl leading-10 lg:leading-[60px] 2xl:leading-[80px] pt-20 xl:pt-[200px] pb-20 xl:pb-[100px]"
    >
      <p class="flex text-[#6F6F6F] font-semibold">
        針對不同使用者，ITY制定不同的系統
      </p>
      <div class="flex flex-row">
        <p class="text-[#6F6F6F] font-semibold">分為&nbsp;</p>
        <p class="text-black font-bold">消費者端 / 店家端 / 組織端(學生會)</p>
      </div>
    </div>
    <!--三種身分端動畫-->
    <div
      class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-10 space-y-10 md:space-y-0"
    >
      <identityItem
        v-for="(item, index) in identityItemList"
        :key="index"
        :identityItem="item"
      ></identityItem>
    </div>
    <!--最底下動畫-->
    <Vue3Lottie
      :animationData="howTargetedTrafficWorksJSON"
      class="w-[300px] sm:w-[380px] lg:w-[480px] xl:w-[600px] 2xl:w-[800px] h-[300px] sm:h-[380px] lg:h-[480px] xl:h-[600px] 2xl:h-[800px]"
    />
  </div>
</template>

<script>
/*Item*/
import classicTitle from "@/vues/classic/classicTitle.vue";
import questionItem from "@/vues/shows/questionItem.vue";
import identityItem from "@/vues/shows/identityItem.vue";
/*Animation*/
import questionType7 from "@/vues/animation/questionType7.vue";
import questionType8 from "@/vues/animation/questionType8.vue";
import questionType9 from "@/vues/animation/questionType9.vue";
import consumerIdentity from "@/vues/animation/consumerIdentity.vue";
import sellerIdentity from "@/vues/animation/sellerIdentity.vue";
import organizationIdentity from "@/vues/animation/organizationIdentity.vue";
/*Functions*/
import onlineContract from "@/vues/functionIntro/seller/onlineContract.vue";
import jointLaunchEvents from "@/vues/functionIntro/organization/jointLaunchEvent.vue";
import appointmentPost from "@/vues/functionIntro/organization/appointmentPost.vue";
import contactingFunction from "@/vues/functionIntro/organization/contactFunction.vue";
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import howTargetedTrafficWorksJSON from "@/vues/json/how-targeted-traffic-works.json";

export default {
  name: "organizationSystemFunctionPage",
  components: {
    Vue3Lottie,
    classicTitle,
    questionItem,
    // questionType7,
    // questionType8,
    // questionType9,
    onlineContract,
    jointLaunchEvents,
    appointmentPost,
    contactingFunction,
    identityItem,
    // consumerIdentity,
    // sellerIdentity,
    // organizationIdentity,
  },
  setup() {
    const questionItemList = [
      {
        content: "忍受風吹雨淋拿紙本文件與商店簽訂特約",
        animation: questionType7,
      },
      {
        content: "總是無法整合各校學生會組織 ?",
        animation: questionType8,
      },
      {
        content: "紙本張貼各系所優惠活動總是效果不彰 ?",
        animation: questionType9,
      },
    ];
    const identityItemList = [
      { animation: consumerIdentity, content: "消費者端" },
      { animation: sellerIdentity, content: "店家端" },
      { animation: organizationIdentity, content: "組織端" },
    ];
    return { questionItemList, identityItemList };
  },
  data() {
    return {
      howTargetedTrafficWorksJSON,
    };
  },
};
</script>

<style scoped></style>
