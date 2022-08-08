<template>
  <seller-banners></seller-banners>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <classic-title :content="'我收到的特約邀請'" class="w-full"></classic-title>
    <div
      class="flex flex-col md:flex-row items-center space-x-0 md:space-x-5 2xl:space-x-10 space-y-5 md:space-y-0"
    >
      <notification-card
        v-for="(item, index) in notificationCardList"
        :key="index"
        :notificationCard="item"
      ></notification-card>
    </div>
  </div>
</template>

<script>
import sellerBanners from "@/vues/shows/sellerBanners.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import notificationCard from "@/vues/cards/pushNotificationCard.vue";
import nutcPhoto from "@/vues/photos/nutcPhoto.vue";
import ntuPhoto from "@/vues/photos/ntuPhoto.vue";

export default {
  name: "receivedContract",
  components: {
    sellerBanners,
    classicTitle,
    notificationCard,
    // nutcPhoto,
    // ntuPhoto,
  },
  setup() {
    const notificationCardList = [
      {
        avater: nutcPhoto,
        organizationName: "國立臺中科技大學",
      },
      {
        avater: ntuPhoto,
        organizationName: "國立臺灣大學",
      },
    ];
    return { notificationCardList };
  },
};
</script>
