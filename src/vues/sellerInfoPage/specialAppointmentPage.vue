<template>
  <div
    class="flex flex-row lg:flex-col space-x-5 lg:space-x-0 space-y-0 lg:space-y-6 2xl:space-y-8"
  >
    <classicItem :name="'國立臺中科技大學'"></classicItem>
    <classicItem :name="'國立臺中教育大學'"></classicItem>
    <classicItem :name="'中國醫學大學'"></classicItem>
  </div>
</template>

<script>
import classicItem from "@/vues/shows/classicItem.vue";

export default {
  name: "specialAppointmentPage",
  components: {
    classicItem: classicItem,
  },
};
</script>
