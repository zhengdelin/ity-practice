<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-[100px] mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <div
        class="flex items-center w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] bg-white drop-shadow lg:drop-shadow-md 2xl:drop-shadow-lg"
      >
        <div
          class="flex flex-col sm:flex-row items-center w-full sm:pl-8 md:pl-10 lg:pl-14 xl:pl-16 2xl:pl-20 sm:pr-4 sm:space-x-6 md:space-x-10 lg:space-x-12 xl:space-x-24 space-y-2 sm:space-y-0"
        >
          <div
            class="flex w-16 sm:w-28 md:w-36 lg:w-40 xl:w-48 2xl:w-60 h-16 sm:h-28 md:h-36 lg:h-40 xl:h-48 2xl:h-60 rounded-full overflow-hidden bg-no-repeat bg-cover bg-black"
          >
            <img
              class="w-full h-full"
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            />
          </div>
          <div
            class="flex flex-col sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-14"
          >
            <p
              class="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-[#76448A] font-bold"
            >
              :critic
            </p>
            <div
              class="flex flex-row text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold"
            >
              <p class="flex">:gender</p>
              <div class="flex">&nbsp;&nbsp;/&nbsp;&nbsp;</div>
              <p class="flex">:school</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 評分區塊 -->
    <div class="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
      <classic-title
        :content="'評分'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <classic-select-input></classic-select-input>
      </div>
    </div>

    <!-- 撰寫評分內容區塊 -->
    <div class="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
      <classic-title
        :content="'撰寫評分內容'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <tinymce-editor v-model:content="content"></tinymce-editor>
      </div>
    </div>

    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'eachsellerPage' }" class="w-full">
          <classic-button
            :name="'取消'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          :name="'發布'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/cards/sellerCard.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicSelectInput from "@/vues/classic/classicSelectInput.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import { ref } from "vue";

export default {
  name: "addFeedbackPage",
  components: {
    sellerCard,
    classicTitle,
    classicSelectInput,
    tinymceEditor,
    classicButton,
  },
  setup() {
    const content = ref();
    content.value = "<p>撰寫評分內容......</p>";
    return { content };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
