<!--Note:BeforeLogin-->
<template>
  <div class="space-y-5">
    <menu-item
      v-for="(item, index) in menuItemList"
      :key="index"
      :menuItem="item"
    ></menu-item>
  </div>
</template>

<script>
import menuItem from "@/vues/shows/menuItem.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import shrimpPhoto from "@/vues/photos/shrimpPhoto.vue";
import oysterPhoto from "@/vues/photos/oysterPhoto.vue";

export default {
  name: "menuPage",
  components: {
    menuItem,
    // sushiPhoto,
    // shrimpPhoto,
    // oysterPhoto,
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
    return { menuItemList };
  },
};
</script>
