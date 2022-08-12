<template>
  <div
    class="flex flex-col items-center justify-center w-full h-[500px] rounded bg-black p-10"
  >
    <div class="w-1/2 h-3/6 bg-white">
      <component
        :is="organizationCard.organizationPhoto"
        class="w-full h-full rounded-full"
      />
    </div>
    <div
      class="flex justify-center items-center w-full h-1/6 text-2xl bg-[#9763AB]"
    >
      <p>{{ organizationCard.organizationName }}</p>
    </div>
    <div
      class="flex flex-row justify-center items-center w-full h-2/6 bg-[#D33520] space-x-10"
    >
      <router-link :to="{ name: '' }">
        <classic-button
          :name="'MORE'"
          class="w-40 2xl:h-[60px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </router-link>
      <router-link :to="{ name: '' }">
        <classic-button
          :name="'檢舉'"
          class="w-40 2xl:h-[60px] rounded-md border border-black bg-white text-[#2D2D2D]"
        ></classic-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  props: {
    organizationCard: { type: Object, default: () => ({}) },
  },
  components: {
    classicButton,
  },
  setup() {},
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
