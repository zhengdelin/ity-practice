<template>
  <div
    class="flex items-center justify-center px-4 py-8 sm:p-0 2xl:px-12 w-full sm:w-5/12 h-24 sm:h-32 2xl:h-[180px] bg-[#ECECEC]"
  >
    <div
      class="flex flex-row items-center justify-center w-4/5 2xl:w-[540px] h-16 2xl:h-20 space-x-8 sm:space-x-6 rounded-xl bg-white text-[#76448A] hover:bg-[#B983CE] hover:text-white"
    >
      <div>
        <phone-icon
          class="sm:w-5 sm:h-5 lg:w-7 lg:h-7 stroke-[#76448A] fill-white"
        ></phone-icon>
      </div>
      <div>
        <p class="text-xl sm:text-base lg:text-xl xl:text-2xl">{{ tel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import phoneIcon from "@/vues/icons/phoneIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    phoneIcon: phoneIcon,
  },
  props: {
    tel: String,
  },
};
</script>
