<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-20 lg:space-y-[100px] xl:space-y-[120px] mb-20 2xl:mb-40 pt-5"
  >
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'活動 Hashtag'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <!-- <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <event-card
          v-for="(item, index) in recommendEventCardList"
          :key="index"
          :eventCard="item"
        ></event-card>
      </div> -->
    </div>
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'活動摘要'"
        class="w-full bg-[#76448A]"
      ></classic-title>
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
        class="w-full bg-[#76448A]"
      ></classic-title>
      <classic-input-type-3
        v-for="(item, index) in classicInputType3DetailList"
        :key="index"
        :classicInputType3="item"
      >
      </classic-input-type-3>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicInputType3 from "@/vues/classic/classicInputType3.vue";
import tinymceEditor from "@/vues/shared/tinymceEditor.vue";
import { ref } from "vue";

export default {
  name: "addJointLaunchEvents",
  components: { classicTitle, tinymceEditor, classicInputType3 },
  setup() {
    const classicInputType3SummaryList = [
      { title: "活動標題" },
      { title: "活動期間" },
      { title: "如何領取優惠" },
    ];
    const classicInputType3DetailList = [
      { title: "優惠對象" },
      { title: "是否需登入才可領取優惠" },
      { title: "優惠領取上限" },
      { title: "注意事項" },
    ];
    const content = ref();
    content.value = "<p>撰寫聯合活動內容......</p>";
    return {
      classicInputType3SummaryList,
      classicInputType3DetailList,
      content,
    };
  },
};
</script>

<style scoped></style>
