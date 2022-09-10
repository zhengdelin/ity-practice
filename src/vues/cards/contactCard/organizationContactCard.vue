<template>
  <div
    class="flex flex-col items-center justify-center px-4 py-8 xl:py-5 sm:p-0 2xl:px-12 w-full sm:w-5/12 h-60 lg:h-72 xl:h-[300px] 2xl:h-80 bg-[#ECECEC] space-y-8 lg:space-y-10"
  >
    <router-link
      :to="{ name: '' }"
      class="flex items-center justify-center w-full"
    >
      <div
        class="flex flex-row justify-center items-center border-2 border-[#76448A] w-4/5 2xl:w-[540px] h-16 lg:h-20 xl:h-[90px] 2xl:h-[100px] bg-[#B983CE] space-x-6 rounded-md"
      >
        <div
          class="font-semibold ext-xl sm:text-base lg:text-xl xl:text-2xl text-white"
        >
          發送特約邀請
        </div>
        <div>
          <paper-airplane-icon
            class="w-8 sm:w-6 lg:w-8 xl:w-7 2xl:w-8 h-8 sm:h-6 lg:h-8 xl:h-7 2xl:h-8 stroke-white"
          ></paper-airplane-icon>
        </div>
      </div>
    </router-link>

    <div
      class="flex flex-row items-center justify-center w-4/5 2xl:w-[540px] h-16 2xl:h-20 space-x-8 sm:space-x-6 rounded-xl bg-white hover:bg-gradient-to-r hover:from-[#fad0c4] hover:to-[#fecfef] text-[#76448A] hover:text-[#4B4B4B]"
    >
      <!-- background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%); -->
      <div>
        <phone-icon
          class="sm:w-5 sm:h-5 lg:w-7 lg:h-7 stroke-[#76448A] fill-white"
        ></phone-icon>
      </div>
      <div class="xl:font-medium text-xl sm:text-base lg:text-xl xl:text-2xl">
        {{ tel }}
      </div>
    </div>
  </div>
</template>

<script>
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import paperAirplaneIcon from "@/vues/icons/paperAirplaneIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    phoneIcon,
    paperAirplaneIcon,
  },
  props: {
    tel: String,
  },
};
</script>
