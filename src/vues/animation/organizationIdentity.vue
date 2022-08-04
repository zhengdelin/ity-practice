<template>
  <Vue3Lottie :animationData="teamBlueJSON" class="w-[300px] h-[300px]" />
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import teamBlueJSON from "@/vues/json/team-blue.json";

export default {
  name: "organizationAnimation",
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      teamBlueJSON,
    };
  },
};
</script>
