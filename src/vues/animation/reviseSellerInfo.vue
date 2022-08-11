<!--Use:sellerInfo-->
<template>
  <Vue3Lottie
    :animationData="shopJSON"
    class="w-52 sm:w-44 md:w-48 2xl:w-40 h-52 sm:h-44 ms:h-48 2xl:h-40"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import shopJSON from "@/vues/json/shop.json";

export default {
  name: "sellerAnimation",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { shopJSON };
  },
};
</script>
