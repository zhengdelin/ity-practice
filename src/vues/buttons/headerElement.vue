<!--Use:shared/ityHeaderBeforeLogin, ityConsumerHeader, itySellerHeader, ityOrganizationHeader-->
<template>
  <template v-if="headerElement.type === 'router'">
    <router-link
      :to="{ name: headerElement.routeName }"
      class="flex items-center justify-center space-x-1.5 sm:space-x-3 lg:space-x-6 2xl:space-x-8 w-24 sm:w-32 2xl:w-[220px] h-11 sm:h-14 2xl:h-[100px] bg-white hover:bg-[#F6F6F6] cursor-pointer"
    >
      <p
        class="text-sm sm:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider text-[#2D2D2D]"
      >
        {{ headerElement.name }}
      </p>
      <component
        :is="headerElement.icon"
        class="w-5 h-5 2xl:w-[30px] 2xl:h-[30px]"
      />
    </router-link>
  </template>
  <template v-if="headerElement.type === 'button'">
    <div
      class="flex items-center justify-center space-x-1.5 sm:space-x-3 lg:space-x-6 2xl:space-x-8 w-24 sm:w-32 2xl:w-[220px] h-11 sm:h-14 2xl:h-[100px] bg-white hover:bg-[#F6F6F6] cursor-pointer"
      @click="headerElement.onclick"
    >
      <p
        class="text-sm sm:text-base xl:text-lg 2xl:text-xl font-semibold tracking-wider text-[#2D2D2D]"
      >
        {{ headerElement.name }}
      </p>
      <component
        :is="headerElement.icon"
        class="w-5 h-5 2xl:w-[30px] 2xl:h-[30px]"
      />
    </div>
  </template>
</template>

<script>
export default {
  props: {
    headerElement: {
      type: Object,
      default: () => ({
        type: "router",
      }),
    },
  },
};
</script>
