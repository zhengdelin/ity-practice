<!--Note:BeforeLogin-->
<template>
  <div class="space-y-5">
    <menu-item
      v-for="(item, index) in menuItemList"
      :key="index"
      :menuItem="item"
    ></menu-item>
    <!-- addMenuItem -->
    <div
      class="flex justify-center items-center w-full h-48 md:h-64 lg:h-72 2xl:h-[300px] p-10 bg-gradient-to-r from-[#ddd6f3] to-[#faaca8] hover:from-[#f3e7e9] hover:to-[#e3eeff] drop-shadow-md cursor-pointer"
    >
      <Vue3Lottie
        :animationData="addJSON"
        class="w-36 md:w-48 lg:w-52 xl:w-60 2xl:w-[280px] h-36 md:h-48 lg:h-52 xl:h-60 2xl:h-[280px]"
      />
    </div>
    <!-- 當沒有任何菜單品項時才出現此點擊區域 -->
    <click-div
      v-for="(item, index) in clickDivList"
      :key="index"
      :clickDiv="item"
    ></click-div>
  </div>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import addJSON from "@/vues/json/add-files-button.json";
import menuItem from "@/vues/shows/menuItem.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import shrimpPhoto from "@/vues/photos/shrimpPhoto.vue";
import oysterPhoto from "@/vues/photos/oysterPhoto.vue";
import clickDiv from "@/vues/buttons/clickDiv.vue";
import menuAnimation from "@/vues/animation/menuAnimation.vue";

export default {
  name: "menuPage",
  components: {
    Vue3Lottie,
    menuItem,
    // sushiPhoto,
    // shrimpPhoto,
    // oysterPhoto,
    clickDiv,
    // menuAnimation,
  },
  setup() {
    const menuItemList = [
      {
        photo: sushiPhoto,
        name: "寿司",
        desc: "パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが",
        price: 300,
      },
      {
        photo: shrimpPhoto,
        name: "エビ",
        desc: "高層階で、夕方から夜くらいの時間帯の明るさが美しくておすすめです。",
        price: 500,
      },
      {
        photo: oysterPhoto,
        name: "かき",
        desc: "新宿小田急サザンタワーのラウンジでアフタヌーンティー。",
        price: 200,
      },
    ];
    const clickDivList = [
      {
        animation: menuAnimation,
        title: "目前尚未有任何菜單 快新增菜單品項吧 !",
      },
    ];
    return { menuItemList, addJSON, clickDivList };
  },
};
</script>
