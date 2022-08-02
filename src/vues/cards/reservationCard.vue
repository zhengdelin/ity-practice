<template>
  <div
    class="flex items-center justify-center px-4 py-8 sm:p-0 2xl:px-12 w-full sm:w-5/12 h-20 sm:h-32 2xl:h-40 bg-[#F2F2F2] rounded-xl"
  >
    <div class="flex flex-row items-center space-x-16">
      <checkIcon class="w-8 2xl:w-[50px] h-8 2xl:h-[50px]"></checkIcon>
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
    //phoneIcon: phoneIcon,
  },
  /*props: {
    tel: String,
  },*/
};
</script>
