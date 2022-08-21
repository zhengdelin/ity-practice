<!--Use:functionIntro/beforeLogin/appointmentMap, sellerCoupon, sellerInfo, sellerSearch-->
<!--Use:functionIntro/consumer/feedbackSeller, orderFood, prosecutedSeller, saveSeller-->
<!--Use:functionIntro/seller/advertisingMS, exclusiveCoupon, onlineContract, promotedAds, prosecuteFeedback, reviseSellerInfo, sellerContactFunction-->
<!--Use:functionIntro/organization/appointmentMap, contactFunction, jointLaunchEvent, onlineSign-->
<template>
  <div
    class="flex justify-center items-center w-60 xl:w-[380px] h-20 xl:h-[120px] font-semibold text-xl xl:text-3xl bg-[#F6F6F6] rounded-lg border-[0.5px] border-black"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
