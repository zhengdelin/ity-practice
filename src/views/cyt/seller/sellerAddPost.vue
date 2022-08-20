<template>
  <div
    class="h-full px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 2xl:space-y-20 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row space-x-40">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <div
        class="flex flex-col justify-center items-start w-2/3 bg-[#F6F6F6] space-y-10"
      >
        <div class="text-xl 2xl:text-2xl font-bold text-[#4B4B4B]">
          { props 店家名字 }
        </div>
        <div class="text-xl 2xl:text-2xl font-bold text-[#4B4B4B]">
          { props 店家地址 }
        </div>
        <classic-input-type-2
          v-for="(item, index) in classicInputType2List"
          :key="index"
          :classicInputType2="item"
        ></classic-input-type-2>
      </div>
    </div>
    <div class="space-y-10">
      <classic-title
        :content="'撰寫文章內容'"
        class="w-full bg-[#76448A]"
      ></classic-title
      ><tinymce-editor></tinymce-editor>
    </div>
    <div class="flex justify-end w-full border-[0.5px] border-black py-8 pr-20">
      <div class="flex flex-row bg-[#4B4B4B] space-x-10">
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'預覽'"
            class="w-60 h-20 rounded-md border border-black bg-white hover:bg-[#F6F6F6] text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'發布'"
            class="w-60 h-20 rounded-md bg-[#76448A] hover:bg-gradient-to-r hover:from-[#ec77ab] hover:to-[#7873f5] text-white"
          ></classic-button
          ><!--background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);-->
        </router-link>
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'購買點數'"
            class="w-60 h-20 rounded-md bg-[#B2415C] hover:bg-gradient-to-r hover:from-[#ed6ea0] hover:to-[#ec8c69] text-white"
          ></classic-button
          ><!--background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);-->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/cards/sellerCard.vue";
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "addPostPage",
  components: {
    sellerCard,
    classicInputType2,
    classicTitle,
    tinymceEditor,
    classicButton,
  },
  setup() {
    const classicInputType2List = [{ title: "文章標題 Title" }];
    return { classicInputType2List };
  },
};
</script>
