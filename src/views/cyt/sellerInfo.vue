<template>
  <ity-header></ity-header>
  <div
    class="px-5 sm:px-10 lg:px-20 xl:px-[120px] 2xl:px-[140px] space-y-6 sm:space-y-10 mb-20 2xl:mb-40"
  >
    <div class="flex flex-row justify-between space-x-5 lg:space-x-10">
      <seller-card :seller="'誰說海的味道都是鹹的'"></seller-card>
      <!--Seller Picture-->
      <div
        class="w-7/12 sm:w-8/12 md:w-3/4 2xl:w-[1220px] h-40 sm:h-56 xl:h-64 2xl:h-[400px] overflow-hidden bg-no-repeat bg-cover"
      >
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row space-x-0 sm:space-x-10 2xl:space-x-20 space-y-5 sm:space-y-0"
    >
      <seller-Info-Card
        :location="'臺中市梧棲區'"
        :time="'09:00-22:00'"
        :price="160"
        :publicHoliday="'星期二、星期五'"
        :website="'https://retty.me/'"
        class="bg-[#F6DEF6] rounded-xl 2xl:h-[480px]"
      ></seller-Info-Card>
      <div class="flex flex-col items-center">
        <reservation-card></reservation-card>
        <div class="flex flex-row sm:flex-col items-center space-between">
          <revise-seller-info></revise-seller-info>
          <classic-button
            :name="'編輯個人資訊'"
            class="w-full 2xl:w-[520px] h-16 2xl:h-[84px] rounded-xl"
          ></classic-button>
        </div>
      </div>
    </div>
    <div class="relative" @click="backTop()">
      <div
        class="fixed flex justify-center items-center right-5 bottom-10 z-50 p-5 w-14 sm:w-16 lg:w-20 2xl:w-[100px] h-14 sm:h-16 lg:h-20 2xl:h-[100px] bg-[#B2415C] cursor-pointer"
      >
        <!--p-2 sm:p-4 bottom-4 sm:bottom-6 right-4 sm:right-6 h-12 w-12 sm:h-20 sm:w-20-->
        <back-To-Top-Icon></back-To-Top-Icon>
      </div>
    </div>
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import reservationCard from "@/vues/cards/reservationCard.vue";
import reviseSellerInfo from "@/vues/animation/reviseSellerInfo.vue";
import classicButton from "@/vues/classic/classicButton.vue";
import backToTopIcon from "@/vues/icons/backToTopIcon.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";

export default {
  name: "eachSellerInfo",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    reservationCard: reservationCard,
    reviseSellerInfo: reviseSellerInfo,
    classicButton: classicButton,
    backToTopIcon: backToTopIcon,
    ityFooter: ityFooter,
  },
  data() {
    return {};
  },
  methods: {
    backTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
