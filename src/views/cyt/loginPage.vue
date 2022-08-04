<template>
  <div
    class="flex flex-row px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-x-10 space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex justify-start w-[800px] h-full">
      <Vue3Lottie :animationData="loginJSON" class="w-[660px] h-[660px]" />
    </div>
    <div class="flex flex-col w-[800px] h-full">
      <p class="text-4xl font-bold text-[#76448A]">登入頁面</p>
      <classic-input-type-2
        v-for="(item, index) in classicInputType2List"
        :key="index"
        :classicInputType2="item"
      >
      </classic-input-type-2>
      <div class="flex justify-between items-center">
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-8 w-8 border border-[#AE2519] rounded-sm bg-white checked:bg-[#B2415C] checked:border-[#4B4B4B] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck3"
            checked
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="exampleCheck2"
            >Remember me</label
          >
        </div>
        <a
          href="#!"
          class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
          >Forgot password?</a
        >
      </div>
      <router-link :to="{ name: '' }" class="w-full">
        <classic-button
          :name="'登入 SIGN IN'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-lg bg-[#76448A] text-white"
        ></classic-button>
      </router-link>
      <div
        class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
      >
        <p class="text-center font-semibold mx-4 mb-0">OR</p>
      </div>
      <router-link :to="{ name: '' }" class="w-full">
        <classic-button
          :name="'註冊 SIGN UP'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-lg bg-[#B983CE] text-white"
        ></classic-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";
/*Lottiefiles*/
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import loginJSON from "@/vues/json/problem-solving-team.json";

export default {
  name: "loginPage",
  components: {
    Vue3Lottie,
    classicInputType2,
    classicButton,
  },
  setup() {
    const classicInputType2List = [
      { title: "帳號  Email Address" },
      { title: "密碼  Password" },
    ];
    return { classicInputType2List };
  },
  data() {
    return {
      loginJSON,
    };
  },
};
</script>
