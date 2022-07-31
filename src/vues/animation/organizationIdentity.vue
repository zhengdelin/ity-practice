<template>
  <Vue3Lottie
    :animationData="teamBlueJSON"
    class="w-60 md:w-64 xl:w-72 2xl:w-[300px] h-60 md:h-64 xl:h-72 2xl:h-[300px]"
  />
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
  methods: {},
};
</script>
