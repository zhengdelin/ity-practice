<template>
  <div class="space-y-5">
    <menu-item :name="'ししゃも'" :desc="'4378324'" :price="300"></menu-item>
    <menu-item :name="'すじこ'" :desc="'4378324'" :price="500"></menu-item>
    <menu-item :name="'くんたま'" :desc="'4378324'" :price="200"></menu-item>
  </div>
</template>

<script>
import menuItem from "@/vues/shows/menuItem.vue";

export default {
  name: "postPage",
  components: {
    menuItem: menuItem,
  },
};
</script>
