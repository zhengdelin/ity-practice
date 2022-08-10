<!--https://www.npmjs.com/package/vue-resize-observer-->
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
      <!--v-resize:debounce.3="onResize"-->
      <div class="flex flex-row 2xl:space-x-10" v-resize="onResize">
        <shop-card
          v-for="(item, index) in shopCardList"
          :key="index"
          :shopCard="item"
        ></shop-card>
      </div>
    </div>
    <div class="space-y-[60px]">
      <classic-title
        :content="'{organizationName1}推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <shop-card></shop-card>
    </div>
    <div class="space-y-[60px]">
      <classic-title
        :content="'{organizationName2}推薦店家'"
        class="w-full bg-[#DDA4F1]"
      ></classic-title>
      <shop-card></shop-card>
    </div>
    <div class="space-y-[60px]">
      <classic-title
        :content="'{organizationName3}推薦店家'"
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
import oysterPhoto from "@/vues/photos/oysterPhoto.vue";
import noodlesPhoto from "@/vues/photos/noodlesPhoto.vue";
import hotpotPhoto from "@/vues/photos/hotpotPhoto.vue";
import sushiPhoto from "@/vues/photos/sushiPhoto.vue";
import burritoPhoto from "@/vues/photos/burritoPhoto.vue";
import doughnutPhoto from "@/vues/photos/doughnutPhoto.vue";
import fruitPhoto from "@/vues/photos/fruitPhoto.vue";
import pizzaPhoto from "@/vues/photos/pizzaPhoto.vue";
import VueResizeObserver from "vue-resize-observer";
// import resizeDirective from 'v-resize-observer';

export default {
  name: "sellerHomePage",
  components: {
    classicTitle,
    shopCard,
  },
  directives: { resize: VueResizeObserver },
  // directives: {
  //   resize: resizeDirective.directive,
  // },
  data() {
    return {
      itemWidth: "1/4",
    };
    // return {
    //   itemWidth: "1/3",
    // };
  },
  methods: {
    onResize() {
      var baseItems = 4;
      var proportion =
        this.$el.clientWidth / this.$parent.$el.clientWidth + 0.02; //0.02誤差值
      var items = Math.floor(proportion * baseItems);
      if (items == 4) {
        if (window.innerWidth >= 1024) {
          if (this.itemWidth != "1/4") this.itemWidth = "1/4";
        } else if (window.innerWidth < 1024 && window.innerWidth >= 640) {
          if (this.itemWidth != "1/3") this.itemWidth = "1/3";
        } else if (window.innerWidth < 640 && window.innerWidth >= 350) {
          if (this.itemWidth != "1/2") this.itemWidth = "1/2";
        } else if (window.innerWidth < 350) {
          this.itemWidth = "1";
        }
      } else if (items == 3) {
        this.itemWidth = "1/3";
      } else if (items == 2) {
        this.itemWidth = "1/2";
      }
    },
    // onResize() {
    //   var baseItems = 4;
    //   var proportion =
    //     this.$el.clientWidth / this.$parent.$el.clientWidth + 0.02; //0.02誤差值
    //   var items = Math.floor(proportion * baseItems);
    //   if (items == 4) {
    //     if (window.innerWidth >= 1024) {
    //       if (this.itemWidth != "1/4") this.itemWidth = "1/4";
    //     } else if (window.innerWidth < 1024 && window.innerWidth >= 640) {
    //       if (this.itemWidth != "1/3") this.itemWidth = "1/3";
    //     } else if (window.innerWidth < 640 && window.innerWidth >= 350) {
    //       if (this.itemWidth != "1/2") this.itemWidth = "1/2";
    //     } else if (window.innerWidth < 350) {
    //       this.itemWidth = "1";
    //     }
    //   } else if (items == 3) {
    //     this.itemWidth = "1/3";
    //   } else if (items == 2) {
    //     this.itemWidth = "1/2";
    //   }
    // },
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
    return { shopCardList };
  },
};
</script>
