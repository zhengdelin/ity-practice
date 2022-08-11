<template>
  <div
    class="flex flex-col justify-center items-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] mb-20 2xl:mb-40 space-y-10 2xl:space-y-24"
  >
    <div
      class="flex flex-col justify-center items-center sm:flex-row space-y-10 sm:space-y-0 space-x-0 sm:space-x-10 w-full"
    >
      <div
        class="flex items-center w-full sm:w-2/5 2xl:w-[800px] h-80 sm:h-[600px] lg:h-[720px] xl:h-[768px]"
      >
        <Vue3Lottie
          :animationData="signupJSON"
          class="w-[300px] md:w-80 2xl:w-[600px] h-[300px] md:h-80 2xl:h-[600px]"
        />
      </div>
      <div
        class="flex flex-col items-center w-full sm:w-3/5 2xl:w-[800px] h-full space-y-10"
      >
        <p class="text-3xl md:text-4xl font-bold text-[#76448A]">註冊頁面</p>
        <classic-input-type-2
          v-for="(item, index) in classicInputType2List"
          :key="index"
          :classicInputType2="item"
        >
        </classic-input-type-2>
        <classic-radio-type-2></classic-radio-type-2>
        <!--<div class="flex justify-between items-center py-2 w-5/6 sm:w-full">
          <div
            class="flex justify-center items-center form-group form-check space-x-4 lg:space-x-6 2xl:space-x-8"
          >
            <input
              type="checkbox"
              class="form-check-input appearance-none w-6 xl:w-8 h-6 xl:h-8 border-2 border-[#E25150] rounded-sm bg-white checked:bg-[#B2415C] checked:border-[#AE2519] focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
              id="exampleCheck3"
              checked
            />
            <label
              class="form-check-label inline-block text-[#B2415C] text-base sm:text-lg xl:text-xl font-normal lg:font-medium xl:font-semibold"
              for="exampleCheck2"
              >記得我
            </label>
          </div>
        </div>-->
        <div class="w-3/4 sm:w-full lg:w-5/6 2xl:w-full">
          <router-link :to="{ name: '' }" class="flex justify-center w-full">
            <classic-button
              :name="'註冊'"
              class="w-full h-16 xl:h-20 2xl:h-[100px] rounded-lg bg-[#76448A] text-white"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
    <!--下方資訊 & 動畫-->
    <div class="space-y-10 2xl:space-y-[60px]">
      <div
        class="flex flex-col items-center text-2xl lg:text-3xl 2xl:text-4xl leading-10 lg:leading-[60px] 2xl:leading-[80px]"
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
      <div
        class="text-black font-semibold text-2xl lg:text-3xl leading-10 lg:leading-[60px]"
      >
        使用者可以依照個人需求選擇註冊身分
      </div>
    </div>
  </div>
</template>

<script>
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import classicRadioType2 from "@/vues/classic/classicRadioType2.vue";
import identityItem from "@/vues/shows/identityItem.vue";
import consumerIdentity from "@/vues/animation/consumerIdentity.vue";
import sellerIdentity from "@/vues/animation/sellerIdentity.vue";
import organizationIdentity from "@/vues/animation/organizationIdentity.vue";
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import signupJSON from "@/vues/json/signup.json";

export default {
  name: "signupPage",
  components: {
    Vue3Lottie,
    classicInputType2,
    classicButton,
    classicRadioType2,
    identityItem,
    // consumerIdentity,
    // sellerIdentity,
    // organizationIdentity,
  },
  setup() {
    const classicInputType2List = [
      { title: "帳號  Email Address" },
      { title: "密碼  Password" },
    ];
    const identityItemList = [
      { animation: consumerIdentity, content: "消費者端" },
      { animation: sellerIdentity, content: "店家端" },
      { animation: organizationIdentity, content: "組織端" },
    ];
    return { classicInputType2List, identityItemList, signupJSON };
  },
};
</script>
