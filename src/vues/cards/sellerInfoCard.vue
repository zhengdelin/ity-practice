<template>
  <div
    class="flex flex-col justify-center w-full sm:w-7/12 2xl:w-[940px] h-64 sm:h-[400px] space-y-8 sm:space-y-12 2xl:space-y-10 p-10 bg-[#F9F9F9] text-[#4B4B4B]"
  >
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><location-icon></location-icon></div>
      <p
        class="text-base sm:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        地址：
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><time-icon></time-icon></div>
      <p
        class="text-base sm:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        營業時間：
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><price-icon></price-icon></div>
      <p
        class="text-base sm:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        價格區間：
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><public-Holiday-icon></public-Holiday-icon></div>
      <p
        class="text-base sm:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        公休日：
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><website-Icon></website-Icon></div>
      <p
        class="text-base sm:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        網站：
      </p>
    </div>
  </div>
</template>

<script>
import locationIcon from "@/vues/icons/locationIcon.vue";
import timeIcon from "@/vues/icons/timeIcon.vue";
import priceIcon from "@/vues/icons/priceIcon.vue";
import publicHolidayIcon from "@/vues/icons/publicHolidayIcon.vue";
import websiteIcon from "@/vues/icons/websiteIcon.vue";

export default {
  name: "sellerInfo",
  components: {
    locationIcon: locationIcon,
    timeIcon: timeIcon,
    priceIcon: priceIcon,
    publicHolidayIcon: publicHolidayIcon,
    websiteIcon: websiteIcon,
  },
};
</script>
