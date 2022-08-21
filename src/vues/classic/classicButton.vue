<!--Use:loginPage, signUpPage,-->
<!--Use:cards/consumerAccountInfoCard, cards/consumerAccountPhoneCard, cards/shopCard, cards/likedShopCard, classic/classicAdvancedFilter, classic/classicConsumerFilter-->
<!--Use:classic/classicSellerFilter, cards/organizationCard, sellerContractIntro, cards/pushNotificationCard, sellerSignedContract, sellerSignedOnlineContract, sellerAddPost, sellerBuyPointsIntro, sellerMakeCoupon, sellerInfo, reviseSellerInfo,-->
<!--Use:classic/classicOrganizationFilter-->
<template>
  <div class="flex justify-center items-center cursor-pointer">
    <p class="text-lg lg:text-xl 2xl:text-2xl font-medium xl:font-semibold">
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>
