<template>
  <div
    class="relative flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] w-full h-[400px] md:h-[480px] lg:h-[600px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1620882133512-5149956b1261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')]"
    style="background-position: 50%"
  >
    <classic-seller-filter class="rounded-xl z-20"></classic-seller-filter>
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-25 z-10"
    ></div>
  </div>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div>
      <classic-title
        :content="'依類別選擇'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
    </div>
    <div class="space-y-10 md:space-y-[60px]">
      <classic-title
        :content="'ITY 官方推薦特約學校'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-10 gap-y-10"
      >
        <organization-card
          v-for="(item, index) in organizationCardList"
          :key="index"
          :organizationCard="item"
        ></organization-card>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicSellerFilter from "@/vues/classic/classicSellerFilter.vue";
import organizationCard from "@/vues/cards/organizationCard.vue";
import nutcPhoto from "@/vues/photos/nutcPhoto.vue";
import ntuPhoto from "@/vues/photos/ntuPhoto.vue";
import nccuPhoto from "@/vues/photos/nccuPhoto.vue";
import ntpuPhoto from "@/vues/photos/ntpuPhoto.vue";
import ntustPhoto from "@/vues/photos/ntustPhoto.vue";
import ntutPhoto from "@/vues/photos/ntutPhoto.vue";
import ncuPhoto from "@/vues/photos/ncuPhoto.vue";
import nsysuPhoto from "@/vues/photos/nsysuPhoto.vue";
import nchuPhoto from "@/vues/photos/nchuPhoto.vue";
import ntubPhoto from "@/vues/photos/ntubPhoto.vue";
import tmuPhoto from "@/vues/photos/tmuPhoto.vue";
import ntuePhoto from "@/vues/photos/ntuePhoto.vue";
import { computed } from "vue";

export default {
  name: "sellerHomePage",
  components: {
    classicTitle,
    classicSellerFilter,
    organizationCard,
    // nutcPhoto,
    // ntuPhoto,
    // nccuPhoto,
    // ntpuPhoto,
    // ntustPhoto,
    // ntutPhoto,
    // ncuPhoto,
    // nsysuPhoto,
    // nchuPhoto,
    // ntubPhoto,
    // tmuPhoto,
    // ntuePhoto,
  },
  setup() {
    const _organizationCardList = [
      {
        organizationPhoto: nutcPhoto,
        organizationName: "國立臺中科技大學",
      },
      {
        organizationPhoto: ntuPhoto,
        organizationName: "國立臺灣大學",
      },
      {
        organizationPhoto: nccuPhoto,
        organizationName: "國立政治大學",
      },
      {
        organizationPhoto: ntpuPhoto,
        organizationName: "國立臺北大學",
      },
      {
        organizationPhoto: ntustPhoto,
        organizationName: "國立臺灣科技大學",
      },
      {
        organizationPhoto: ntutPhoto,
        organizationName: "國立臺北科技大學",
      },
      {
        organizationPhoto: ncuPhoto,
        organizationName: "國立中央大學",
      },
      {
        organizationPhoto: nsysuPhoto,
        organizationName: "國立中山大學",
      },
      {
        organizationPhoto: nchuPhoto,
        organizationName: "國立中興大學",
      },
      {
        organizationPhoto: ntubPhoto,
        organizationName: "國立臺北商業大學",
      },
      {
        organizationPhoto: tmuPhoto,
        organizationName: "臺北醫學大學",
      },
      {
        organizationPhoto: ntuePhoto,
        organizationName: "國立臺北教育大學",
      },
    ];
    const organizationCardList = computed(() => {
      const list = [];
      while (list.length < 9) {
        const index = Math.floor(Math.random() * _organizationCardList.length);
        const item = _organizationCardList[index];
        if (!list.includes(item)) {
          list.push(item);
        }
      }
      return list;
    });
    return { organizationCardList };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
