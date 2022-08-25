<!--Use:-->
<template>
  <div
    class="flex flex-col justify-center w-full sm:w-9/12 2xl:w-3/4 h-60 sm:h-80 space-y-8 sm:space-y-12 2xl:space-y-10 p-10 text-[#4B4B4B]"
  >
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <organization-name-icon
          class="stroke-[#4B4B4B]"
        ></organization-name-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        {{ organizationName }} 學生會
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <location-icon class="fill-[#4B4B4B]"></location-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        {{ location }}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <phone-icon class="stroke-[#4B4B4B]"></phone-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        {{ telephone }}
      </p>
    </div>
    <div class="flex flex-row items-center space-x-4 h-4 2xl:h-10">
      <!--icon-->
      <div>
        <user-icon class="stroke-[#4B4B4B] fill-[#4B4B4B]"></user-icon>
      </div>
      <p
        class="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-medium sm:font-semibold text-left"
      >
        {{ representative }}
      </p>
    </div>
  </div>
</template>

<script>
import organizationNameIcon from "@/vues/icons/identificationIcon.vue";
import locationIcon from "@/vues/icons/locationIcon.vue";
import phoneIcon from "@/vues/icons/phoneIcon.vue";
import userIcon from "@/vues/icons/userIcon.vue";

export default {
  name: "organizationInfo",
  components: {
    organizationNameIcon,
    locationIcon,
    phoneIcon,
    userIcon,
  },
  props: {
    organizationName: String,
    location: String,
    telephone: String,
    representative: String,
  },
};
</script>
