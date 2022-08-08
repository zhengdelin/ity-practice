<template>
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
      class="flex flex-col sm:flex-row space-x-0 sm:space-x-5 2xl:space-x-10 space-y-5 sm:space-y-0"
    >
      <seller-Info-Card
        :location="'臺中市梧棲區'"
        :time="'09:00-22:00'"
        :price="160"
        :publicHoliday="'星期二、星期五'"
        :website="'https://retty.me/'"
        class="bg-[#F6DEF6] rounded-lg sm:rounded-xl 2xl:h-[480px]"
      ></seller-Info-Card>
      <div
        class="flex flex-col items-center justify-center sm:justify-between w-full sm:w-5/12 2xl:h-[480px]"
      >
        <reservation-card></reservation-card>
        <div
          class="flex flex-row sm:flex-col items-center space-x-20 sm:space-x-0 w-4/5 sm:w-full"
        >
          <revise-seller-animation></revise-seller-animation>
          <router-link
            :to="{ name: 'reviseSellerInfo' }"
            class="flex justify-center w-full"
          >
            <classic-button
              :name="'編輯個人資訊'"
              class="w-full 2xl:w-[520px] h-16 2xl:h-[84px] rounded-md xl:rounded-xl bg-[#76448A] text-white"
            ></classic-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import reservationCard from "@/vues/cards/reservationCard.vue";
import reviseSellerAnimation from "@/vues/animation/reviseSellerInfo.vue";
import classicButton from "@/vues/classic/classicButton.vue";

export default {
  name: "eachSellerInfo",
  components: {
    sellerCard,
    sellerInfoCard,
    reservationCard,
    reviseSellerAnimation,
    classicButton,
  },
};
</script>

<style scoped></style>
