<template>
  <div
    class="flex items-center justify-center px-4 py-8 xl:p-0 2xl:px-12 w-full h-20 sm:h-32 2xl:h-40 bg-[#F2F2F2] rounded-lg sm:rounded-xl"
  >
    <div
      class="flex flex-row items-center space-x-6 sm:space-x-4 2xl:space-x-16"
    >
      <checkIcon class="w-7 2xl:w-[50px] h-7 2xl:h-[50px]"></checkIcon>
      <div class="text-lg 2xl:text-2xl font-medium sm:font-semibold">
        有開啟預定餐點服務
      </div>
    </div>
  </div>
</template>

<script>
import checkIcon from "@/vues/icons/checkIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    checkIcon: checkIcon,
  },
};
</script>
