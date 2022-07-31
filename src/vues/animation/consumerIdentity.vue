<template>
  <Vue3Lottie
    :animationData="onlineShoppingBlackFridayFridayJSON"
    class="w-[300px] h-[300px]"
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
