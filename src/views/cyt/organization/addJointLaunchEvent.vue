<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-20 lg:space-y-[100px] xl:space-y-[120px] mb-20 2xl:mb-40 pt-5"
  >
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'活動 Hashtag'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div
        class="flex justify-start items-center space-x-5 sm:space-x-8 xl:space-x-10"
      >
        <badges-item
          v-for="(item, index) in badgesItemList"
          :key="index"
          :badgesItem="item"
        >
        </badges-item>
      </div>
    </div>
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'活動摘要'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="flex justify-center items-center">
        <classic-file-input
          :content="'新增活動圖片'"
          class="w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] bg-[#F6DEF6] rounded-lg"
        ></classic-file-input>
      </div>
      <classic-input-type-3
        v-for="(item, index) in classicInputType3SummaryList"
        :key="index"
        :classicInputType3="item"
      >
      </classic-input-type-3>
    </div>
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'活動內容'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <tinymce-editor v-model:content="content"></tinymce-editor>
    </div>
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'詳細資訊'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <classic-input-type-3
        v-for="(item, index) in classicInputType3DetailList"
        :key="index"
        :classicInputType3="item"
      >
      </classic-input-type-3>
      <classic-radio-type-3></classic-radio-type-3>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'jointLaunchEvents' }" class="w-full">
          <classic-button
            :name="'返回'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          :name="'發布聯合活動'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
        <!-- @click="post" -->
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import badgesItem from "@/vues/shows/badgesItem.vue";
import classicFileInput from "@/vues/classic/classicFileInput.vue";
import classicInputType3 from "@/vues/classic/classicInputType3.vue";
import classicRadioType3 from "@/vues/classic/classicRadioType3.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import { ref } from "vue";

export default {
  name: "addJointLaunchEvents",
  components: {
    classicTitle,
    badgesItem,
    classicFileInput,
    tinymceEditor,
    classicInputType3,
    classicRadioType3,
    classicButton,
  },
  setup() {
    const badgesItemList = [
      { content: "國立臺中科技大學學生" },
      { content: "資訊管理系學生" },
    ];
    const classicInputType3SummaryList = [
      { title: "活動標題" },
      { title: "活動期間" },
      { title: "如何領取優惠" },
    ];
    const classicInputType3DetailList = [
      { title: "優惠對象" },
      { title: "優惠領取上限" },
      { title: "注意事項" },
    ];
    const content = ref();
    content.value = "<p>撰寫聯合活動內容......</p>";

    // const post = () => {
    //   router.push({ name: "" });
    // };

    return {
      badgesItemList,
      classicInputType3SummaryList,
      classicInputType3DetailList,
      content,
    }; //post
  },
};
</script>

<style scoped></style>
