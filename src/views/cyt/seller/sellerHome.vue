<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div>
      <classic-title
        :content="'依類別選擇'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
    </div>
    <div class="space-y-[60px]">
      <classic-title
        :content="'ITY 官方推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <div class="flex flex-row space-x-10">
        <shop-card
          v-for="(item, index) in shopCardList"
          :key="index"
          :shopCard="item"
        ></shop-card>
      </div>
    </div>
    <div>
      <classic-title
        :content="'推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <shop-card></shop-card>
    </div>
    <div>
      <classic-title
        :content="'推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <shop-card></shop-card>
    </div>
    <div>
      <classic-title
        :content="'推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <shop-card></shop-card>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import shopCard from "@/vues/cards/shopCard.vue";
import curryPhoto from "@/vues/photos/curryPhoto.vue";
import bbqPhoto from "@/vues/photos/bbqPhoto.vue";
import porkPhoto from "@/vues/photos/porkPhoto.vue";
import scallopPhoto from "@/vues/photos/scallopPhoto.vue";

export default {
  name: "sellerHomePage",
  components: {
    classicTitle,
    shopCard,
  },
  setup() {
    const shopCardList = [
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
    ];
    return { shopCardList };
  },
};
</script>
