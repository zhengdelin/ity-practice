<!--Use:sellerHome-->
<template>
  <div
    class="flex flex-col w-60 sm:w-64 md:w-full h-96 md:h-[400px] xl:h-[480px] 2xl:h-[600px] rounded-xl drop-shadow-md lg:drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
  >
    <div
      class="relative w-60 sm:w-64 md:w-full h-1/2 rounded-t-xl overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <component
        :is="shopCard.sellerPhoto"
        class="w-full h-full rounded-t-xl"
      />
      <div
        class="cursor-default absolute top-6 right-0 flex items-center justify-center w-1/2 h-8 md:h-10 lg:h-12 rounded-l-md lg:rounded-l-lg bg-[#B983CE] opacity-80 hover:bg-gradient-to-r hover:from-[#84fab0] hover:to-[#8fd3f4]"
      >
        <p
          class="font-medium xl:font-semibold tracking-wider text-base xl:text-xl text-white"
        >
          {{ shopCard.organizationName }} 特約
        </p>
      </div>
      <div
        class="cursor-default absolute top-[72px] md:top-20 2xl:top-24 right-0 flex items-center justify-center w-1/2 h-8 md:h-10 lg:h-12 rounded-l-md lg:rounded-l-lg bg-white opacity-80 hover:bg-[#ECECEC] space-x-2 px-1 xl:px-2"
      >
        <tag-icon></tag-icon>
        <p
          class="font-medium xl:font-semibold tracking-wider text-base xl:text-xl text-[#4B4B4B]"
        >
          On sale
        </p>
      </div>
      <!-- background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%); -->
    </div>
    <div
      class="border border-[#ECECEC] w-60 sm:w-64 md:w-full h-1/2 bg-white rounded-b-xl"
    >
      <!--店家名字 + 兩標籤-->
      <div class="h-5/12 space-y-2 md:space-y-4 2xl:space-y-10">
        <p
          class="text-lg lg:text-xl xl:text-2xl font-bold text-[#2D2D2D] pt-5 md:pt-8 2xl:pt-10 truncate px-2"
        >
          {{ shopCard.sellerName }}
        </p>
        <div
          class="flex justify-start space-x-4 md:space-x-5 pl-3 md:pl-4 2xl:pl-10"
        >
          <badge-item-type-1 :badgeContent="'台中'"></badge-item-type-1>
          <badge-item-type-2 :badgeContent="'泰式'"></badge-item-type-2>
        </div>
      </div>
      <!--卡片按鈕-->
      <div
        class="flex flex-row justify-between items-center h-7/12 rounded-b-xl p-5 md:p-4 xl:p-6 2xl:p-10"
      >
        <router-link :to="{ name: 'eachsellerPage' }"
          ><!--暫時連接到此頁面而已-->
          <classic-button
            :name="'MORE'"
            class="w-20 sm:w-24 lg:w-20 xl:w-24 2xl:w-28 h-10 md:h-12 2xl:h-[60px] bg-[#E07860] hover:bg-gradient-to-r hover:from-[#ed6ea0] hover:to-[#ec8c69] rounded-md text-white tracking-widest"
          ></classic-button>
        </router-link>
        <div class="flex flex-row">
          <router-link :to="{ name: 'loginPage' }"
            ><!--暫時連接到此頁面而已-->
            <div
              class="flex justify-center items-center w-16 md:w-14 xl:w-16 2xl:w-20 h-16 md:h-14 lg:h-[60px] xl:h-16 2xl:h-20 hover:bg-[#F6F6F6]"
            >
              <love-icon
                class="w-[30px] md:w-8 lg:w-7 xl:w-9 2xl:w-10 h-[30px] md:h-8 lg:h-7 xl:h-9 2xl:h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300"
              ></love-icon>
            </div>
          </router-link>
          <router-link :to="{ name: 'loginPage' }"
            ><!--暫時連接到此頁面而已-->
            <div
              class="flex justify-center items-center w-16 md:w-14 xl:w-16 2xl:w-20 h-16 md:h-14 lg:h-[60px] xl:h-16 2xl:h-20 hover:bg-[#F6F6F6]"
            >
              <menu-icon
                class="w-[30px] md:w-8 lg:w-7 xl:w-9 2xl:w-10 h-[30px] md:h-8 lg:h-7 xl:h-9 2xl:h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300"
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
import tagIcon from "@/vues/icons/tagIcon.vue";
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
    tagIcon,
    loveIcon,
    menuIcon,
  },
  setup() {},
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
