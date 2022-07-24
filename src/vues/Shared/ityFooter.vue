<template>
  <div class="w-full h-[400px] bg-[#B983CE]">
    <div class="flex flex-row justify-center pt-12 space-x-10">
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white"
      >
        <facebook-icon></facebook-icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white"
      >
        <instagram-Icon></instagram-Icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white"
      >
        <twitter-icon></twitter-icon>
      </div>
      <div
        class="flex justify-center items-center w-20 h-20 rounded-full bg-white"
      >
        <playstore-Icon></playstore-Icon>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <ity-logo></ity-logo>
    </div>
    <!--版權聲明-->
    <div class="flex justify-center mt-8 text-white">
      <p>Copyright © ITY / I 特約 All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import facebookIcon from "@/vues/Icon/facebookIcon.vue";
import instagramIcon from "@/vues/Icon/instagramIcon.vue";
import twitterIcon from "@/vues/Icon/twitterIcon.vue";
import playstoreIcon from "@/vues/Icon/playstoreIcon.vue";
import ityLogo from "@/vues/Icon/ityLogo.vue";

export default {
  name: "sharedFooter",
  components: {
    facebookIcon: facebookIcon,
    instagramIcon: instagramIcon,
    twitterIcon: twitterIcon,
    playstoreIcon: playstoreIcon,
    ityLogo: ityLogo,
  },
};
</script>
