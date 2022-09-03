<!--Note:BeforeLogin-->
<template>
  <div class="space-y-5">
    <menu-item
      v-for="(item, index) in menuItemList"
      :key="index"
      :menuItem="item"
    ></menu-item>
    <click-div
      v-for="(item, index) in clickDivList"
      :key="index"
      :clickDiv="item"
    ></click-div>
  </div>
</template>

<script>
import menuItem from "@/vues/shows/menuItem.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import shrimpPhoto from "@/vues/photos/shrimpPhoto.vue";
import oysterPhoto from "@/vues/photos/oysterPhoto.vue";
import clickDiv from "@/vues/buttons/clickDiv.vue";
import menuAnimation from "@/vues/animation/menuAnimation.vue";

export default {
  name: "menuPage",
  components: {
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
    const clickDivList = [{ animation: menuAnimation, title: "新增菜單" }];
    return { menuItemList, clickDivList };
  },
};
</script>
