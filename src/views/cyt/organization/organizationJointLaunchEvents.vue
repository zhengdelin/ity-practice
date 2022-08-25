<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] mb-20 2xl:mb-40"
  >
    <classic-title
      :content="'官方推薦聯合活動'"
      class="w-full bg-[#76448A] mt-14"
    ></classic-title>
    <classic-title
      :content="'聯合活動發布紀錄'"
      class="w-full bg-[#76448A]"
    ></classic-title>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";

export default {
  name: "jointLaunchEvents",
  components: { classicTitle },
};
</script>

<style scoped></style>
