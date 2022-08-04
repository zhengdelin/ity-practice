<template>
  <div
    class="flex flex-col justify-center w-full sm:w-7/12 2xl:w-[940px] h-64 sm:h-[400px] space-y-8 sm:space-y-12 2xl:space-y-10 p-10 text-[#4B4B4B]"
  >
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <location-icon class="stroke-[#4B4B4B] fill-[#4B4B4B]"></location-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        地址：{{ location }}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div><time-icon class="stroke-[#4B4B4B] fill-[#4B4B4B]"></time-icon></div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        營業時間：{{ time }}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <price-icon class="stroke-[#4B4B4B] fill-[#4B4B4B]"></price-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        價格區間：{{ price }} 元左右
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <public-Holiday-icon
          class="stroke-[#4B4B4B] fill-[#4B4B4B]"
        ></public-Holiday-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        公休日：{{ publicHoliday }}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <website-Icon class="stroke-[#4B4B4B] fill-[#4B4B4B]"></website-Icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        網站：{{ website }}
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
    locationIcon,
    timeIcon,
    priceIcon,
    publicHolidayIcon,
    websiteIcon,
  },
  props: {
    location: String,
    time: String,
    price: Number,
    publicHoliday: String,
    website: String,
  },
};
</script>
