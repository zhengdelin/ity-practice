<template>
  <div class="space-y-4">
    <classicItem :name="'國立臺中科技大學'"></classicItem>
    <classicItem :name="'國立臺中教育大學'"></classicItem>
    <classicItem :name="'中國醫學大學'"></classicItem>
  </div>
  -->
</template>

<script>
import classicItem from "@/vues/shows/classicItem.vue";

export default {
  name: "postPage",
  components: {
    classicItem: classicItem,
  },
};
</script>
