<template>
  <div
    class="flex flex-row px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-x-10 mb-20 2xl:mb-40"
  >
    <div class="w-1/4 h-[2000px] bg-black"></div>
    <div class="w-3/4">
      <phone-card></phone-card>
    </div>
  </div>
</template>

<script>
import phoneCard from "@/vues/cards/consumerAccountPhoneCard.vue";

export default {
  components: { phoneCard },
  setup() {},
};
</script>
