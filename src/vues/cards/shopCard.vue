<!--Use:sellerHome-->
<template>
  <div class="flex flex-col 2xl:w-[380px] h-[600px] rounded-xl">
    <div
      class="2xl:w-[380px] h-1/2 bg-slate-700 rounded-t-xl overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <component
        :is="shopCard.sellerPhoto"
        class="w-full h-full rounded-t-xl"
      />
    </div>
    <div class="2xl:w-[380px] h-1/2 bg-white rounded-b-xl">
      <!--店家名字 + 兩標籤-->
      <div class="h-3/5 space-y-10">
        <p class="text-lg lg:text-2xl font-bold text-[#2D2D2D] pt-10">
          {{ shopCard.sellerName }}
        </p>
        <div class="flex justify-start space-x-5 pl-10">
          <badge-item-type-1 :badgeContent="'台中'"></badge-item-type-1>
          <badge-item-type-2 :badgeContent="'泰式'"></badge-item-type-2>
        </div>
      </div>
      <!--卡片按鈕-->
      <div
        class="flex flex-row items-center h-2/5 rounded-b-xl p-10 space-x-2 sm:space-x-5"
      >
        <router-link :to="{ name: '' }">
          <classic-button
            :name="'MORE'"
            class="w-24 2xl:w-[150px] h-[60px] bg-[#E07860] rounded-md text-white tracking-widest"
          ></classic-button>
        </router-link>
        <div class="flex flex-row space-x-0">
          <router-link :to="{ name: '' }">
            <div
              class="flex justify-center items-center w-16 lg:w-20 h-16 lg:h-20"
            >
              <love-icon
                class="w-[30px] 2xl:w-10 h-[30px] 2xl:h-10"
              ></love-icon>
            </div>
          </router-link>
          <router-link :to="{ name: '' }">
            <div
              class="flex justify-center items-center w-16 lg:w-20 h-16 lg:h-20"
            >
              <menu-icon
                class="w-[30px] 2xl:w-10 h-[30px] 2xl:h-10"
              ></menu-icon>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classicButton from "@/vues/classic/classicButton.vue";
import badgeItemType1 from "@/vues/shows/badgeItemType1.vue";
import badgeItemType2 from "@/vues/shows/badgeItemType2.vue";
import loveIcon from "@/vues/icons/loveIcon.vue";
import menuIcon from "@/vues/icons/clipboardListIcon.vue";

export default {
  props: {
    shopCard: { type: Object, default: () => ({}) },
  },
  components: {
    classicButton,
    badgeItemType1,
    badgeItemType2,
    loveIcon,
    menuIcon,
  },
  setup() {},
};
</script>

<style scoped>
:deep(img){
  object-fit:cover;
}
</style>
