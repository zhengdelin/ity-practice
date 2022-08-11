<!--Use:sellerSystemFunction-->
<template>
  <Vue3Lottie
    :animationData="questionSocialMediaJSON"
    class="w-[280px] md:w-[380px] h-[280px] md:h-[380px]"
  />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import questionSocialMediaJSON from "@/vues/json/social-media-interaction.json";

export default {
  name: "questionSix",
  components: {
    Vue3Lottie,
  },
  setup() {
    return { questionSocialMediaJSON };
  },
};
</script>
