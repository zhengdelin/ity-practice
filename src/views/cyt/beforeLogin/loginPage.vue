<template>
  <div
    class="flex flex-col justify-center items-center sm:flex-row px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] mb-20 2xl:mb-40 space-y-10 sm:space-y-0 space-x-0 sm:space-x-10"
  >
    <div
      class="flex items-center w-full sm:w-2/5 h-80 sm:h-[600px] lg:h-[720px] xl:h-[768px] 2xl:w-[800px]"
    >
      <Vue3Lottie
        :animationData="loginJSON"
        class="w-[300px] md:w-80 2xl:w-[600px] h-[300px] md:h-80 2xl:h-[600px]"
      />
    </div>
    <div
      class="flex flex-col items-center w-full sm:w-3/5 2xl:w-[800px] h-full space-y-10"
    >
      <p class="text-3xl md:text-4xl font-bold text-[#76448A]">登入頁面</p>
      <classic-input-type-2
        v-for="(item, index) in classicInputType2List"
        :key="index"
        :classicInputType2="item"
      >
      </classic-input-type-2>
      <div class="flex justify-between items-center py-2 w-5/6 sm:w-full">
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
        <router-link :to="{ name: '' }">
          <div
            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out text-base sm:text-lg xl:text-xl font-normal lg:font-medium xl:font-semibold text-right"
          >
            忘記密碼 ?
          </div>
        </router-link>
      </div>
      <div class="w-3/4 sm:w-full lg:w-5/6 2xl:w-full">
        <router-link :to="{ name: '' }" class="flex justify-center w-full">
          <classic-button
            :name="'登入'"
            class="w-full h-16 xl:h-20 2xl:h-[100px] rounded-lg bg-[#76448A] text-white"
          ></classic-button>
        </router-link>
        <div
          class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
        >
          <p class="text-center font-semibold mx-4 mb-0">OR</p>
        </div>
        <router-link
          :to="{ name: 'signUpPage' }"
          class="flex justify-center w-full"
        >
          <classic-button
            :name="'註冊'"
            class="w-full h-16 xl:h-20 2xl:h-[100px] rounded-lg bg-[#B983CE] text-white"
          ></classic-button>
        </router-link>
      </div>
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
    return { classicInputType2List, loginJSON };
  },
};
</script>
