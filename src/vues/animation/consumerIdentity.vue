<template>
  <Vue3Lottie
    :animationData="onlineShoppingBlackFridayFridayJSON"
    class="w-60 md:w-64 xl:w-72 2xl:w-[300px] h-60 md:h-64 xl:h-72 2xl:h-[300px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import onlineShoppingBlackFridayFridayJSON from "@/vues/json/online-shopping-black-friday.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      onlineShoppingBlackFridayFridayJSON,
    };
  },
  methods: {},
};
</script>
