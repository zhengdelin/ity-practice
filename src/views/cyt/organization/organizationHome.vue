<template>
  <div
    class="relative flex items-center justify-center px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] w-full h-[600px] bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1620882133512-5149956b1261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80')]"
    style="background-position: 50%"
  >
    <classic-organization-filter
      class="rounded-xl z-20"
    ></classic-organization-filter>
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
        :content="'ITY 官方推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <shop-card
          v-for="(item, index) in shopCardList"
          :key="index"
          :shopCard="item"
        ></shop-card>
      </div>
    </div>
    <div class="space-y-10 md:space-y-[60px]">
      <classic-title
        :content="'{organizationName1} 推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <shop-card
          v-for="(item, index) in shopCardList"
          :key="index"
          :shopCard="item"
        ></shop-card>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import classicOrganizationFilter from "@/vues/classic/classicOrganizationFilter.vue";
import shopCard from "@/vues/cards/shopCard.vue";
import curryPhoto from "@/vues/photos/curryPhoto.vue";
import bbqPhoto from "@/vues/photos/bbqPhoto.vue";
import porkPhoto from "@/vues/photos/porkPhoto.vue";
import scallopPhoto from "@/vues/photos/scallopPhoto.vue";
import oysterPhoto from "@/vues/photos/oysterPhoto.vue";
import noodlesPhoto from "@/vues/photos/noodlesPhoto.vue";
import hotpotPhoto from "@/vues/photos/hotpotPhoto.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import burritoPhoto from "@/vues/photos/burritoPhoto.vue";
import doughnutPhoto from "@/vues/photos/doughnutPhoto.vue";
import fruitPhoto from "@/vues/photos/fruitPhoto.vue";
import pizzaPhoto from "@/vues/photos/pizzaPhoto.vue";
import { computed } from "vue";

export default {
  name: "sellerHomePage",
  components: {
    classicTitle,
    classicOrganizationFilter,
    shopCard,
    //alertsItem,
  },
  setup() {
    const _shopCardList = [
      {
        sellerPhoto: curryPhoto,
        sellerName: "蘇坤蔚牛排 Sukhumvit STEAK",
      },
      {
        sellerPhoto: bbqPhoto,
        sellerName: "焰與醃",
      },
      {
        sellerPhoto: porkPhoto,
        sellerName: "低溫豬肋",
      },
      {
        sellerPhoto: scallopPhoto,
        sellerName: "深海大扇貝",
      },
      {
        sellerPhoto: oysterPhoto,
        sellerName: "吃生蠔會並ㄅㄧㄤˋ叫",
      },
      {
        sellerPhoto: noodlesPhoto,
        sellerName: "感受雜燴裡的旋律",
      },
      {
        sellerPhoto: hotpotPhoto,
        sellerName: "道地韓國養生海鮮大醬湯",
      },
      {
        sellerPhoto: sushiPhoto,
        sellerName: "誰說海的味道都是鹹的",
      },
      {
        sellerPhoto: burritoPhoto,
        sellerName: "各種奇怪食材才是捲餅",
      },
      {
        sellerPhoto: doughnutPhoto,
        sellerName: "世界第二好吃的甜甜圈",
      },
      {
        sellerPhoto: fruitPhoto,
        sellerName: "如果說台灣是水果王國",
      },
      {
        sellerPhoto: pizzaPhoto,
        sellerName: "既然要胖了那就多吃點",
      },
    ];

    const shopCardList = computed(() => {
      const list = [];
      while (list.length < 8) {
        const index = Math.floor(Math.random() * _shopCardList.length);
        const item = _shopCardList[index];
        if (!list.includes(item)) {
          list.push(item);
        }
      }
      return list;
    });
    return { shopCardList };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
