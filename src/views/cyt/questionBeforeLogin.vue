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
      <question-item
        v-for="(item, index) in questionItemList"
        :key="index"
        :questionItem="item"
      ></question-item>
    </div>
    <p class="text-4xl font-bold text-[#4B4B4B] pt-20">
      <!--此間距仍須調整-->
      那就來使用 ITY / I特約 !!!
    </p>
    <div class="flex flex-col space-y-[300px]">
      <div class="flex flex-row space-x-[200px]">
        <appointment-map></appointment-map>
        <seller-search></seller-search>
      </div>
      <div class="flex flex-row space-x-[200px]">
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
      <identityItem
        v-for="(item, index) in identityItemList"
        :key="index"
        :identityItem="item"
      ></identityItem>
    </div>
    <Vue3Lottie
      :animationData="howTargetedTrafficWorksJSON"
      class="w-[800px] h-[800px]"
    />
  </div>
  <ity-footer></ity-footer>
</template>

<script>
/*Header*/
import ityHeader from "@/vues/shared/ityHeader.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import questionItem from "@/vues/shows/questionItem.vue";
/*Animation*/
import questionType1 from "@/vues/animation/questionType1.vue";
import questionType2 from "@/vues/animation/questionType2.vue";
import questionType3 from "@/vues/animation/questionType3.vue";
import appointmentMap from "@/vues/functionIntro/appointmentMap.vue";
import sellerSearch from "@/vues/functionIntro/sellerSearch.vue";
import sellerInfo from "@/vues/functionIntro/sellerInfo.vue";
import sellerCoupon from "@/vues/functionIntro/sellerCoupon.vue";
import identityItem from "@/vues/shows/identityItem.vue";
/*Animation*/
import consumerIdentity from "@/vues/animation/consumerIdentity.vue";
import sellerIdentity from "@/vues/animation/sellerIdentity.vue";
import organizationIdentity from "@/vues/animation/organizationIdentity.vue";
/*Footer*/
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
    // eslint-disable-next-line vue/no-unused-components
    questionType1: questionType1,
    // eslint-disable-next-line vue/no-unused-components
    questionType2: questionType2,
    // eslint-disable-next-line vue/no-unused-components
    questionType3: questionType3,
    appointmentMap: appointmentMap,
    sellerSearch: sellerSearch,
    sellerInfo: sellerInfo,
    sellerCoupon: sellerCoupon,
    identityItem: identityItem,
    // eslint-disable-next-line vue/no-unused-components
    consumerIdentity: consumerIdentity,
    // eslint-disable-next-line vue/no-unused-components
    sellerIdentity: sellerIdentity,
    // eslint-disable-next-line vue/no-unused-components
    organizationIdentity: organizationIdentity,
    ityFooter: ityFooter,
  },
  data() {
    return {
      questionItemList: [
        {
          content: "午餐時間時常猶豫不決、不知道要吃什麼 ?",
          animation: questionType1,
        },
        {
          content: "出門遊玩卻不知道當地特色美食...... ",
          animation: questionType2,
        },
        {
          content: "餐點分量、價錢與內心預期有所落差......",
          animation: questionType3,
        },
      ],
      identityItemList: [
        { animation: consumerIdentity, content: "消費者端" },
        { animation: sellerIdentity, content: "店家端" },
        { animation: organizationIdentity, content: "組織端" },
      ],
      howTargetedTrafficWorksJSON,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
