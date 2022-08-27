<template>
  <router-link :to="{ name: 'addJointLaunchEvent' }">
    <div
      class="fixed flex justify-center items-center right-5 xl:right-16 2xl:right-10 top-1/6 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[120px] h-14 sm:h-16 lg:h-20 2xl:h-[120px] bg-[#9763AB] cursor-pointer rounded-full"
    >
      <newspaper-Icon></newspaper-Icon></div
  ></router-link>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-20 lg:space-y-[100px] xl:space-y-[120px] mb-20 2xl:mb-40 pt-5"
  >
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'{organizationName1} 官方推薦聯合活動'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div
        class="grid justify-items-center grid-cols-2 md:grid-cols-3 bg-white gap-x-2 sm:gap-x-4 md:gap-x-5 2xl:gap-x-10 gap-y-5 sm:gap-y-6 md:gap-y-8 2xl:gap-y-10"
      >
        <event-card
          v-for="(item, index) in recommendEventCardList"
          :key="index"
          :eventCard="item"
        ></event-card>
      </div>
    </div>
    <div class="space-y-10 sm:space-y-12 md:space-y-10 xl:space-y-[60px]">
      <classic-title
        :content="'國立臺中科技大學學生會 聯合活動發布紀錄'"
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
import recommendEventPhoto from "@/vues/photos/recommendEventPhoto.vue";
import eventPhoto from "@/vues/photos/eventPhoto.vue";
import { computed } from "vue";

export default {
  name: "jointLaunchEvents",
  components: { newspaperIcon, classicTitle, eventCard }, //recommendEventPhoto,eventPhoto
  setup() {
    const _recommendEventCardList = [
      {
        eventPhoto: recommendEventPhoto,
        eventName: "蘇坤蔚牛排 X 中科大資訊管理系 資訊人の好康",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "公館遊樂泡芙 X 法律人",
        organizationName: "國立臺灣大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "貓空推薦咖啡廳 X 商院專屬",
        organizationName: "國立政治大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "奶凍王 X 中央電資 聖誕傳情",
        organizationName: "國立中央大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "不用排隊巧克力甜點系列 甜點先生 X 清大科管",
        organizationName: "國立清華大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "米菓鍋物 X 陽交女生限定",
        organizationName: "國立陽明交通大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "特色主題餐廳 席拉米 X 高科第一校區限定",
        organizationName: "國立高雄科技大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "學餐排行第一推薦 X 臺科大全體師生",
        organizationName: "國立臺灣科技大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "皮擦焗烤 X 義守大學醫學系",
        organizationName: "義守大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "台南必吃小吃店 老曾羊肉 X 成大醫學院",
        organizationName: "國立成功大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "犇揆 X 臺北大學公共行政學院",
        organizationName: "國立臺北大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "暖心關東煮推薦 三輪車 X 中興昆蟲限定",
        organizationName: "國立中興大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "南部手指雞首選 咖啡架構 X 臺南大學全體師生",
        organizationName: "國立臺南大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "大火快炒粒粒分明 力大炒飯 X 中國醫臺中校區限定",
        organizationName: "中國醫學大學",
      },
      {
        eventPhoto: recommendEventPhoto,
        eventName: "質感咖啡店推薦 咖啡客運 X 高醫香粧系",
        organizationName: "高雄醫學大學",
      },
    ];
    const recommendEventCardList = computed(() => {
      const list = [];
      while (list.length < 3) {
        const index = Math.floor(
          Math.random() * _recommendEventCardList.length
        );
        const item = _recommendEventCardList[index];
        if (!list.includes(item)) {
          list.push(item);
        }
      }
      return list;
    });
    const eventCardList = [
      {
        eventPhoto: eventPhoto,
        eventName: "蘇坤蔚牛排 X 中科大資訊管理系 資訊人の好康",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "公館遊樂泡芙 X 法律人",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "貓空推薦咖啡廳 X 商院專屬",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "奶凍王 X 中央電資 聖誕傳情",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "不用排隊巧克力甜點系列 甜點先生 X 清大科管",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "米菓鍋物 X 陽交女生限定",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "特色主題餐廳 席拉米 X 高科第一校區限定",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "學餐排行第一推薦 X 臺科大全體師生",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "皮擦焗烤 X 義守大學醫學系",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "台南必吃小吃店 老曾羊肉 X 成大醫學院",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "犇揆 X 臺北大學公共行政學院",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "暖心關東煮推薦 三輪車 X 中興昆蟲限定",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "南部手指雞首選 咖啡架構 X 臺南大學全體師生",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "大火快炒粒粒分明 力大炒飯 X 中國醫臺中校區限定",
        organizationName: "國立臺中科技大學",
      },
      {
        eventPhoto: eventPhoto,
        eventName: "質感咖啡店推薦 咖啡客運 X 高醫香粧系",
        organizationName: "國立臺中科技大學",
      },
    ];
    // const eventCardList = computed(() => {
    //   const list = [];
    //   while (list.length < 12) {
    //     const index = Math.floor(Math.random() * _eventCardList.length);
    //     const item = _eventCardList[index];
    //     if (!list.includes(item)) {
    //       list.push(item);
    //     }
    //   }
    //   return list;
    // });
    return { recommendEventCardList, eventCardList };
  },
};
</script>

<style scoped></style>
