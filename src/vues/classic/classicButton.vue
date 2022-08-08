<!--Use:loginPage, signUpPage,-->
<!--Use:-->
<!--Use:sellerContractIntro, cards/pushNotificationCard, sellerSignedContract, sellerInfo, reviseSellerInfo,-->
<!--Use:-->
<template>
  <div class="flex justify-center items-center cursor-pointer">
    <p class="text-lg lg:text-xl 2xl:text-2xl font-semibold">
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
