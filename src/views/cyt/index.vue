<template>
  <ity-header></ity-header>
  <div class="px-[140px] space-y-20 mb-40">
    <div class="flex flex-row space-x-10">
      <seller-card></seller-card>
      <!--Seller Picture-->
      <div class="w-[1220px] h-[400px] overflow-hidden bg-no-repeat bg-cover">
        <img
          class="w-full"
          src="https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
    <div class="flex flex-row space-x-20">
      <seller-Info-Card></seller-Info-Card>
      <contact-card></contact-card>
    </div>
    <div class="w-full h-40 bg-black"></div>
    <div><seller-post></seller-post></div>
    <div><menu-item></menu-item></div>
    <div><feedback-card></feedback-card></div>
  </div>
  <ity-footer></ity-footer>
</template>

<script>
import ityHeader from "@/vues/shared/ityHeader.vue";
import sellerCard from "@/vues/cards/sellerCard.vue";
import sellerInfoCard from "@/vues/cards/sellerInfoCard.vue";
import contactCard from "@/vues/cards/contactCard.vue";
import sellerPost from "@/vues/shows/sellerPost.vue";
import ityFooter from "@/vues/shared/ityFooter.vue";
//暫放
import menuItem from "@/vues/shows/menuItem.vue";
import feedbackCard from "@/vues/cards/feedbackCard.vue";

export default {
  name: "sellerInfoPage",
  components: {
    ityHeader: ityHeader,
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    contactCard: contactCard,
    sellerPost: sellerPost,
    ityFooter: ityFooter,
    menuItem: menuItem,
    feedbackCard: feedbackCard,
  },
};
</script>

<style scoped></style>
