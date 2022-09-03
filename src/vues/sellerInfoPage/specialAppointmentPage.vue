<!--Note:BeforeLogin-->
<template>
  <div
    class="flex flex-row lg:flex-col space-x-5 lg:space-x-0 space-y-0 lg:space-y-6 2xl:space-y-8"
  >
    <classic-item
      v-for="(item, index) in classicItemList"
      :key="index"
      :classicItem="item"
    ></classic-item>
  </div>
</template>

<script>
import classicItem from "@/vues/classic/classicItem.vue";

export default {
  name: "specialAppointmentPage",
  components: {
    classicItem,
  },
  setup() {
    const classicItemList = [
      { name: "國立臺中科技大學" },
      { name: "國立臺中教育大學" },
      { name: "中國醫學大學" },
    ];
    return { classicItemList };
  },
};
</script>
