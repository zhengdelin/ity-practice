<template>
  <ity-header></ity-header>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'賣家端系統介紹'"
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
        <online-sign></online-sign>
        <exclusive-coupon></exclusive-coupon>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <promoted-ads></promoted-ads>
        <advertising-m-s></advertising-m-s>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <revise-seller-info></revise-seller-info>
        <prosecution-evaluation></prosecution-evaluation>
      </div>
      <div
        class="flex flex-col md:flex-row space-x-0 md:space-x-10 2xl:space-x-[200px] space-y-20 md:space-y-0"
      >
        <seller-contacting-function></seller-contacting-function>
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
    <div class="relative" @click="backTop()">
      <div
        class="fixed flex justify-center items-center right-5 bottom-10 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[100px] h-14 sm:h-16 lg:h-20 2xl:h-[100px] bg-[#B2415C] cursor-pointer"
      >
        <!--p-2 sm:p-4 bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-20 sm:w-20-->
        <back-To-Top-Icon></back-To-Top-Icon>
      </div>
    </div>
  </div>
  <ity-footer></ity-footer>
</template>

<script>
/*Header*/
import ityHeader from "@/vues/shared/ityHeader.vue";
/*Item*/
import classicTitle from "@/vues/classic/classicTitle.vue";
import questionItem from "@/vues/shows/questionItem.vue";
import identityItem from "@/vues/shows/identityItem.vue";
/*Animation*/
import questionType4 from "@/vues/animation/questionType4.vue";
import questionType5 from "@/vues/animation/questionType5.vue";
import questionType6 from "@/vues/animation/questionType6.vue";
import consumerIdentity from "@/vues/animation/consumerIdentity.vue";
import sellerIdentity from "@/vues/animation/sellerIdentity.vue";
import organizationIdentity from "@/vues/animation/organizationIdentity.vue";
import backToTopIcon from "@/vues/icons/backToTopIcon.vue";
/*Functions*/
import onlineSign from "@/vues/functionIntro/organization/onlineSign.vue";
import exclusiveCoupon from "@/vues/functionIntro/seller/exclusiveCoupon.vue";
import promotedAds from "@/vues/functionIntro/seller/promoteAds.vue";
import advertisingMS from "@/vues/functionIntro/seller/advertisingMS.vue";
import reviseSellerInfo from "@/vues/functionIntro/seller/reviseSellerInfo.vue";
import prosecutionEvaluation from "@/vues/functionIntro/seller/prosecuteFeedback.vue";
import sellerContactingFunction from "@/vues/functionIntro/seller/sellerContactFunction.vue";
/*Footer*/
import ityFooter from "@/vues/shared/ityFooter.vue";
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import howTargetedTrafficWorksJSON from "@/vues/json/how-targeted-traffic-works.json";

export default {
  name: "sellerSystemFunctionPage",
  components: {
    Vue3Lottie,
    ityHeader: ityHeader,
    classicTitle: classicTitle,
    questionItem: questionItem,
    // eslint-disable-next-line vue/no-unused-components
    questionType4: questionType4,
    // eslint-disable-next-line vue/no-unused-components
    questionType5: questionType5,
    // eslint-disable-next-line vue/no-unused-components
    questionType6: questionType6,
    onlineSign: onlineSign,
    exclusiveCoupon: exclusiveCoupon,
    promotedAds: promotedAds,
    advertisingMS: advertisingMS,
    reviseSellerInfo: reviseSellerInfo,
    prosecutionEvaluation: prosecutionEvaluation,
    sellerContactingFunction: sellerContactingFunction,
    identityItem: identityItem,
    // eslint-disable-next-line vue/no-unused-components
    consumerIdentity: consumerIdentity,
    // eslint-disable-next-line vue/no-unused-components
    sellerIdentity: sellerIdentity,
    // eslint-disable-next-line vue/no-unused-components
    organizationIdentity: organizationIdentity,
    backToTopIcon: backToTopIcon,
    ityFooter: ityFooter,
  },
  data() {
    return {
      questionItemList: [
        {
          content: "利潤分配總是與外送平台業者意見分歧 ?",
          animation: questionType4,
        },
        {
          content: "總是被消費者抱怨紙本優惠券不易保存......",
          animation: questionType5,
        },
        {
          content: "使用社群軟體推廣成效總是不如預期......",
          animation: questionType6,
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
  methods: {
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
