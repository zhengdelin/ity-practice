<template>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-10 sm:space-y-[60px] lg:space-y-20 mt-10 lg:mt-[60px] mb-20 2xl:mb-40"
  >
    <div>
      <classic-title
        :content="'優惠券店家'"
        class="w-full bg-[#76448A]"
      ></classic-title>
    </div>
    <div
      class="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
    >
      <find-offer-card
        v-for="(item, index) in findOfferCardList"
        :key="index"
        :findOfferCard="item"
      ></find-offer-card>
    </div>
  </div>
</template>

<script>
import classicTitle from "@/vues/classic/classicTitle.vue";
import findOfferCard from "@/vues/cards/findOfferCard.vue";

export default {
  name: "findOfferBeforeLoginPage",
  components: {
    classicTitle,
    findOfferCard,
  },
  setup() {
    const findOfferCardList = [
      {
        sellerName: "誰說海的味道都是鹹的",
      },
      {
        sellerName: "鮭魚洄游不是報恩就是報仇",
      },
      {
        sellerName: "米穀堡的相遇",
      },
      {
        sellerName: "低溫豬肋",
      },
    ];
    return { findOfferCardList };
  },
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
