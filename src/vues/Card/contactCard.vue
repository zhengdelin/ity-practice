<template>
  <div class="flex items-center p-16 w-[660px] h-[180px] bg-[#ECECEC]">
    <div
      class="flex flex-row items-center justify-center w-[540px] h-20 space-x-6 rounded-xl bg-white text-[#76448A]"
    >
      <div><phone-icon></phone-icon></div>
      <div><p>0971-635-338</p></div>
    </div>
  </div>
</template>

<script>
import phoneIcon from "@/vues/Icon/phoneIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    phoneIcon: phoneIcon,
  },
};
</script>
