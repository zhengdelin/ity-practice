<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-20 sm:space-y-[100px] lg:space-y-[120px] 2xl:space-y-40 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <!-- 店家資訊區塊 -->
    <div class="space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-[60px]">
      <classic-title
        :content="'店家資訊'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div class="flex flex-col space-y-8 lg:space-y-10 xl:space-y-12">
        <!-- <show-item
          :title="'店家名稱'"
          :content="'誰說海的味道都是鹹的'"
        ></show-item>
        <show-item
          :title="'地址'"
          :content="'R東西線 ／ 新福島駅 徒歩4分'"
        ></show-item>
        <show-item :title="'營業時間'" :content="'09:00 - 20:00'"></show-item> -->
        <show-item
          v-for="(item, index) in showItemList"
          :key="index"
          :showItem="item"
        ></show-item>
      </div>
    </div>
    <!-- 菜單區塊 -->
    <div class="space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-[60px]">
      <classic-title
        :content="'菜單'"
        class="w-full bg-[#76448A]"
      ></classic-title>
      <div>
        <classic-quantity-select
          v-for="(item, index) in classicQuantitySelectList"
          :key="index"
          :classicQuantitySelect="item"
        ></classic-quantity-select>
      </div>
      <!-- total field -->
      <div
        class="flex justify-center items-center w-full h-20 sm:h-24 lg:h-32 xl:h-[150px] bg-[#B983CE]"
      >
        <div
          class="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl text-white tracking-widest"
        >
          TOTAL : NT { 1160 }
        </div>
      </div>
    </div>
    <!-- 備註區塊 -->
    <div
      class="flex flex-col justify-center items-center space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-[60px]"
    >
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
import showItem from "@/vues/shows/showItem.vue";
import classicQuantitySelect from "@/vues/classic/classicQuantitySelect.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import classicInputType2 from "@/vues/classic/classicInputType2.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "placeOrderPage",
  components: {
    classicTitle,
    showItem,
    classicQuantitySelect,
    classicInputType2,
    classicButton,
  },
  setup() {
    const showItemList = [
      {
        title: "店家名稱",
        content: "誰說海的味道都是鹹的",
      },
      {
        title: "地址",
        content: "R東西線 ／ 新福島駅 徒歩4分",
      },
      {
        title: "營業時間",
        content: "09:00 - 20:00",
      },
    ];
    const classicQuantitySelectList = [
      {
        photo: sushiPhoto,
        name: "ししゃも",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 300,
      },
      {
        photo: sushiPhoto,
        name: "すじこ",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 500,
      },
      {
        photo: sushiPhoto,
        name: "いぶりがっこ",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 200,
      },
      {
        photo: sushiPhoto,
        name: "くんたま",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 200,
      },
      {
        photo: sushiPhoto,
        name: "チーズ",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 250,
      },
      {
        photo: sushiPhoto,
        name: "ゆでタン",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 530,
      },
      {
        photo: sushiPhoto,
        name: "会津馬刺し",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 580,
      },
    ];
    const classicInputType2List = [{ title: "備註欄位" }];
    return {
      showItemList,
      classicQuantitySelectList,
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
