<!--Use:beforeLoginHome, systemFunctionBeforeLogin-->
<!--Use:consumerSystemFunction, consumerFindOffer, myCoupon, likedSeller, reservationPage-->
<!--Use:sellerHome, sellerSystemFunction, sellerReceivedContract, sellerSignedContract, sellerSignedOnlineContract, sellerContractStatus, sellerContractStatus, sellerAddPost-->
<!--Use:organizationHome, organizationSystemFunction-->
<template>
  <div
    class="flex justify-start items-center pl-6 lg:pl-8 2xl:pl-10 w-full h-14 sm:h-16 xl:h-20 2xl:h-[100px] bg-[#76448A]"
  >
    <p class="text-lg lg:text-xl xl:text-3xl font-semibold text-white">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>
