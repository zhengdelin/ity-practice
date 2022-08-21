<template>
  <div
    class="h-full px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 2xl:space-y-14 mt-5 md:mt-8 lg:mt-10 mb-20 2xl:mb-40"
  >
    <div
      class="flex flex-col justify-center items-start w-full bg-[#F9F9F9] space-y-10 xl:space-y-12 2xl:space-y-14 p-10"
    >
      <div
        class="flex flex-row items-center space-x-5 md:space-x-8 xl:space-x-10"
      >
        <div>
          <identification-icon
            class="md:w-10 lg:w-12 xl:w-14 md:h-10 lg:h-12 xl:h-14"
          ></identification-icon>
        </div>
        <div class="text-xl 2xl:text-2xl font-bold text-[#4B4B4B]">
          { :props 店家名字 }
        </div>
      </div>
      <div
        class="flex flex-row items-center space-x-5 md:space-x-8 xl:space-x-10"
      >
        <div>
          <location-icon
            class="md:w-10 lg:w-12 xl:w-14 md:h-10 lg:h-12 xl:h-14"
          ></location-icon>
        </div>
        <div class="text-xl 2xl:text-2xl font-bold text-[#4B4B4B]">
          { :props 店家地址 }
        </div>
      </div>
      <classic-input-type-2
        v-for="(item, index) in classicInputType2List"
        :key="index"
        :classicInputType2="item"
      ></classic-input-type-2>
    </div>

    <div class="space-y-10">
      <classic-title
        :content="'撰寫文章內容'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <tinymce-editor></tinymce-editor>
    </div>
    <div
      class="flex justify-center sm:justify-end w-full border-[0.2px] border-black py-6 xl:py-8 sm:pr-5 lg:pr-10 xl:pr-14 2xl:pr-20"
    >
      <div class="flex flex-row space-x-5 lg:space-x-8 xl:space-x-10">
        <router-link :to="{ name: 'sellerAdvertise' }" class="w-full">
          <classic-button
            :name="'取消'"
            class="w-28 lg:w-40 xl:w-60 h-14 sm:h-16 xl:h-20 rounded-md border border-black bg-white hover:bg-[#F6F6F6] text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <router-link :to="{ name: '' }" class="w-full">
          <classic-button
            :name="'發布'"
            class="w-28 lg:w-40 xl:w-60 h-14 sm:h-16 xl:h-20 rounded-md bg-[#76448A] hover:bg-gradient-to-r hover:from-[#ec77ab] hover:to-[#7873f5] text-white"
          ></classic-button
          ><!--background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);-->
        </router-link>
        <router-link :to="{ name: 'sellerBuyPointsIntro' }" class="w-full">
          <classic-button
            :name="'購買點數'"
            class="w-28 lg:w-40 xl:w-60 h-14 sm:h-16 xl:h-20 rounded-md bg-[#B2415C] hover:bg-gradient-to-r hover:from-[#ed6ea0] hover:to-[#ec8c69] text-white"
          ></classic-button
          ><!--background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);-->
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import identificationIcon from "@/vues/icons/identificationIcon.vue";
import locationIcon from "@/vues/icons/locationIcon.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "addPostPage",
  components: {
    classicInputType2,
    identificationIcon,
    locationIcon,
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
