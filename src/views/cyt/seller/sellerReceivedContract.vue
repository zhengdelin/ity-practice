<template>
  <seller-banners
    :showable="bannerShowable"
    @onCancelClick="onCancelClick"
  ></seller-banners>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <classic-title :content="'我收到的特約邀請'" class="w-full"></classic-title>
    <div
      class="grid justify-items-center grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-6 2xl:gap-x-10 gap-y-5 sm:gap-y-6 2xl:gap-y-10"
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
import nccuPhoto from "@/vues/photos/nccuPhoto.vue";
import { ref } from "@vue/reactivity";

export default {
  name: "receivedContract",
  components: {
    sellerBanners,
    classicTitle,
    notificationCard,
    // nutcPhoto,
    // ntuPhoto,
    // nccuPhoto,
  },
  setup() {
    const bannerShowable = ref(true);
    const onCancelClick = () => {
      bannerShowable.value = false;
    };
    const notificationCardList = [
      {
        avater: nutcPhoto,
        organizationName: "國立臺中科技大學",
      },
      {
        avater: ntuPhoto,
        organizationName: "國立臺灣大學",
      },
      {
        avater: nccuPhoto,
        organizationName: "國立政治大學",
      },
    ];
    return { bannerShowable, onCancelClick, notificationCardList };
  },
};
</script>
