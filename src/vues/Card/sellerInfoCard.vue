<template>
  <div
    class="flex flex-col w-[940px] h-[500px] space-y-4 pt-10 pl-10 bg-[#F9F9F9]"
  >
    <div class="flex flex-row space-x-4">
      <!--icon-->
      <div><location-icon></location-icon></div>
      <p>地址：</p>
    </div>
    <div class="flex flex-row space-x-4">
      <!--icon-->
      <div><time-icon></time-icon></div>
      <p>營業時間：</p>
    </div>
    <div class="flex flex-row space-x-4">
      <!--icon-->
      <div><price-icon></price-icon></div>
      <p>價格區間：</p>
    </div>
    <div class="flex flex-row space-x-4">
      <!--icon-->
      <div><public-Holiday-icon></public-Holiday-icon></div>
      <p>公休日：</p>
    </div>
    <div class="flex flex-row space-x-4">
      <!--icon-->
      <div><website-Icon></website-Icon></div>
      <p>網站：</p>
    </div>
  </div>
</template>

<script>
import locationIcon from "@/vues/Icon/locationIcon.vue";
import timeIcon from "@/vues/Icon/timeIcon.vue";
import priceIcon from "@/vues/Icon/priceIcon.vue";
import publicHolidayIcon from "@/vues/Icon/publicHolidayIcon.vue";
import websiteIcon from "@/vues/Icon/websiteIcon.vue";

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
