<template>
  <div class="px-[140px]">
    <div class="flex flex-row space-x-20">
      <seller-card></seller-card>
      <!--Seller Picture-->
      <div class="w-[1220px] h-[400px] bg-black"></div>
    </div>
    <div class="flex flex-row space-x-20">
      <seller-Info-Card></seller-Info-Card>
      <contact-card></contact-card>
    </div>
  </div>
</template>

<script>
import sellerCard from "@/vues/Card/sellerCard.vue";
import sellerInfoCard from "@/vues/Card/sellerInfoCard.vue";
import contactCard from "@/vues/Card/contactCard.vue";

export default {
  name: "sellerInfo",
  components: {
    sellerCard: sellerCard,
    sellerInfoCard: sellerInfoCard,
    contactCard: contactCard,
  },
};
</script>

<style scoped></style>
