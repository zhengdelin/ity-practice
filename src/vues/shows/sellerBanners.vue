<!-- This example requires Tailwind CSS v2.0+ -->
<!--Use:sellerReceivedContract, sellerSignedContract, sellerSignedOnlineContract-->
<template>
  <div class="bg-[#B983CE]">
    <div
      class="mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 xl:py-4 2xl:py-5"
    >
      <!--max-w-7xl-->
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-[#DDA4F1]">
            <advertiseIcon class="stroke-white"></advertiseIcon>
          </span>
          <p
            class="ml-3 font-semibold text-sm sm:text-base lg:text-lg 2xl:text-xl text-white truncate"
          >
            <span class="md:hidden">
              即日起至12/30前加入店家，享有平台優惠折扣
            </span>
            <span class="hidden md:inline">
              【早鳥限時優惠】即日起至12/30前加入店家，享有平台優惠折扣
            </span>
          </p>
        </div>
        <div
          class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
        >
          <router-link :to="{ name: '' }" class="w-full">
            <div
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#76448A] hover:bg-[#9763AB]"
            >
              查看更多
            </div>
          </router-link>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="-mr-1 flex p-2 rounded-md bg-[#DDA4F1] hover:bg-[#76448A] focus:outline-none focus:ring-2 focus:bg-[#9763AB] focus:ring-white sm:-mr-2"
          >
            <span class="sr-only">Dismiss</span>
            <colsedIcon class="stroke-white"></colsedIcon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import advertiseIcon from "@/vues/icons/advertiseIcon.vue";
import colsedIcon from "@/vues/icons/colsedIcon.vue";

export default {
  components: {
    advertiseIcon,
    colsedIcon,
  },
  setup() {},
};
</script>
