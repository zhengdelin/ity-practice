<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 2xl:space-y-[120px] mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <!-- 店家資訊區塊 -->
    <div class="space-y-[60px]">
      <classic-title
        :content="'店家資訊'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div class="flex flex-col space-y-8 lg:space-y-10 xl:space-y-12">
        <!--這個做成component-->
        <div class="flex flex-row h-16 xl:h-20 space-x-5 xl:space-x-10">
          <div
            class="flex justify-center items-center rounded-sm xl:rounded w-1/3 xl:w-1/6 text-lg xl:text-xl text-white bg-[#909090]"
          >
            店家名稱
          </div>
          <div
            class="flex justify-start items-center w-2/3 xl:w-5/6 pl-5 xl:pl-10 text-base xl:text-xl bg-[#F9F9F9] truncate"
          >
            誰說海的味道都是鹹的
          </div>
        </div>
        <!--這個做成component-->
        <div class="flex flex-row h-16 xl:h-20 space-x-5 xl:space-x-10">
          <div
            class="flex justify-center items-center rounded-sm xl:rounded w-1/3 xl:w-1/6 text-lg xl:text-xl text-white bg-[#909090]"
          >
            地址
          </div>
          <div
            class="flex justify-start items-center w-2/3 xl:w-5/6 pl-5 xl:pl-10 text-base xl:text-xl bg-[#F9F9F9] truncate"
          >
            R東西線 ／ 新福島駅 徒歩4分
          </div>
        </div>
        <!--這個做成component-->
        <div class="flex flex-row h-16 xl:h-20 space-x-5 xl:space-x-10">
          <div
            class="flex justify-center items-center rounded-sm xl:rounded w-1/3 xl:w-1/6 text-lg xl:text-xl text-white bg-[#909090]"
          >
            營業時間
          </div>
          <div
            class="flex justify-start items-center w-2/3 xl:w-5/6 pl-5 xl:pl-10 text-base xl:text-xl bg-[#F9F9F9] truncate"
          >
            營業時間：09:00 - 20:00
          </div>
        </div>
      </div>
    </div>
    <!-- 菜單區塊 -->
    <div class="space-y-[60px]">
      <classic-title
        :content="'菜單'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <!-- total field -->
      <div
        class="flex justify-center items-center w-full h-[150px] bg-[#B983CE]"
      >
        <div class="text-4xl text-white tracking-widest">
          TOTAL : NT { 1160 }
        </div>
      </div>
    </div>
    <!-- 備註區塊 -->
    <div class="space-y-[60px]">
      <classic-title
        :content="'備註'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <classic-input-type-2
        v-for="(item, index) in classicInputType2List"
        :key="index"
        :classicInputType2="item"
      >
      </classic-input-type-2>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex flex-row w-4/5 space-x-10">
        <router-link :to="{ name: 'reservationPage' }" class="w-full">
          <classic-button
            :name="'取消'"
            class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md border border-black bg-white text-[#2D2D2D]"
          ></classic-button>
        </router-link>
        <classic-button
          @click="save"
          :name="'下訂餐點'"
          class="w-full h-16 lg:h-20 xl:h-24 2xl:h-[100px] rounded-md bg-[#76448A] text-white"
        ></classic-button>
      </div>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
// import badgesItem from "@/vues/shows/badgesItem.vue";
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "placeOrderPage",
  components: {
    classicTitle,
    // badgesItem,
    classicInputType2,
    classicButton,
  },
  setup() {
    // const badgesItemList = [
    //   { content: "國立臺中科技大學學生" },
    //   { content: "資訊管理系學生" },
    // ];
    // const classicInputType3SummaryList = [
    //   { title: "活動標題" },
    //   { title: "活動期間" },
    //   { title: "如何領取優惠" },
    // ];
    const classicInputType2List = [{ title: "備註欄位" }];
    return {
      //   badgesItemList,
      //   classicInputType3SummaryList,
      classicInputType2List,
    };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
