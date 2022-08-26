<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] mb-20 2xl:mb-40"
  >
    <div
      class="fixed flex justify-center items-center right-10 top-1/6 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[120px] h-14 sm:h-16 lg:h-20 2xl:h-[120px] bg-[#9763AB] cursor-pointer rounded-full"
    >
      <newspaper-Icon></newspaper-Icon>
    </div>
    <div class="space-y-10 md:space-y-[60px]">
      <classic-title
        :content="'{organizationName1} 官方推薦聯合活動'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <!-- <shop-card
          v-for="(item, index) in shopCardList"
          :key="index"
          :shopCard="item"
        ></shop-card> -->
      </div>
    </div>
    <div class="space-y-10 md:space-y-[60px]">
      <classic-title
        :content="'{organizationName1} 聯合活動發布紀錄'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <event-card
          v-for="(item, index) in eventCardList"
          :key="index"
          :eventCard="item"
        ></event-card>
      </div>
    </div>
  </div>
</template>

<script>
import newspaperIcon from "@/vues/icons/newspaperIcon.vue";
import classicTitle from "@/vues/classic/classicTitle.vue";
import eventCard from "@/vues/cards/eventCard.vue";
import { computed } from "vue";

export default {
  name: "jointLaunchEvents",
  components: { newspaperIcon, classicTitle, eventCard },
  setup() {
    const _eventCardList = [
      // {
      //   sellerPhoto: curryPhoto,
      //   organizationName: "NUTC",
      //   sellerName: "蘇坤蔚牛排 Sukhumvit STEAK",
      // },
      // {
      //   sellerPhoto: bbqPhoto,
      //   organizationName: "NUTC",
      //   sellerName: "焰與醃",
      // },
      // {
      //   sellerPhoto: porkPhoto,
      //   organizationName: "NUTC",
      //   sellerName: "低溫豬肋",
      // },
      // {
      //   sellerPhoto: scallopPhoto,
      //   organizationName: "NTU",
      //   sellerName: "深海大扇貝",
      // },
      // {
      //   sellerPhoto: oysterPhoto,
      //   organizationName: "NTU",
      //   sellerName: "吃生蠔會並ㄅㄧㄤˋ叫",
      // },
      // {
      //   sellerPhoto: noodlesPhoto,
      //   organizationName: "NTU",
      //   sellerName: "感受雜燴裡的旋律",
      // },
      // {
      //   sellerPhoto: hotpotPhoto,
      //   organizationName: "NCCU",
      //   sellerName: "道地韓國養生海鮮大醬湯",
      // },
      // {
      //   sellerPhoto: sushiPhoto,
      //   organizationName: "NCCU",
      //   sellerName: "誰說海的味道都是鹹的",
      // },
      // {
      //   sellerPhoto: burritoPhoto,
      //   organizationName: "NCCU",
      //   sellerName: "各種奇怪食材才是捲餅",
      // },
      // {
      //   sellerPhoto: doughnutPhoto,
      //   organizationName: "NTPU",
      //   sellerName: "世界第二好吃的甜甜圈",
      // },
      // {
      //   sellerPhoto: fruitPhoto,
      //   organizationName: "NTPU",
      //   sellerName: "如果說台灣是水果王國",
      // },
      // {
      //   sellerPhoto: pizzaPhoto,
      //   organizationName: "NTPU",
      //   sellerName: "既然要胖了那就多吃點",
      // },
    ];

    const eventCardList = computed(() => {
      const list = [];
      while (list.length < 12) {
        const index = Math.floor(Math.random() * _eventCardList.length);
        const item = _eventCardList[index];
        if (!list.includes(item)) {
          list.push(item);
        }
      }
      return list;
    });
    return { eventCardList };
  },
};
</script>

<style scoped></style>
