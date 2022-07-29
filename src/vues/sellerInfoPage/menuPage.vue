<template>
  <div class="space-y-5">
    <menu-item
      :name="'ししゃも'"
      :desc="'パンケーキ目当てで行ったのですが、メニューから無くなっており残念でしたが'"
      :price="300"
    ></menu-item>
    <menu-item
      :name="'すじこ'"
      :desc="'高層階で、夕方から夜くらいの時間帯の明るさが美しくておすすめです。'"
      :price="500"
    ></menu-item>
    <menu-item
      :name="'くんたま'"
      :desc="'新宿小田急サザンタワーのラウンジでアフタヌーンティー。'"
      :price="200"
    ></menu-item>
  </div>
</template>

<script>
import menuItem from "@/vues/shows/menuItem.vue";

export default {
  name: "menuPage",
  components: {
    menuItem: menuItem,
  },
};
</script>
