<!--Use:-->
<template>
  <router-link :to="{ name: 'eachJointLaunchEvent' }" class="bg-white">
    <div
      class="flex flex-col w-60 sm:w-64 md:w-full h-96 md:h-[400px] xl:h-[480px] 2xl:h-[600px] rounded-xl drop-shadow-md lg:drop-shadow-lg bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 overflow-hidden"
    >
      <div
        class="w-60 sm:w-64 md:w-full h-2/3 2xl:h-[450px] overflow-hidden bg-no-repeat bg-cover bg-center"
      >
        <component
          :is="eventCard.eventPhoto"
          class="w-full h-full rounded-t-xl"
        />
      </div>
      <div
        class="flex flex-col justify-center items-center w-full h-1/3 font-semibold text-white space-y-5 xl:space-y-8"
      >
        <div
          class="w-full px-5 xl:px-8 text-lg lg:text-xl xl:text-2xl truncate"
        >
          {{ eventCard.eventName }}
        </div>
        <div class="text-sm lg:text-base xl:text-xl">
          {{ eventCard.organizationName }}學生會
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    eventCard: { type: Object, default: () => ({}) },
  },
  components: {},
  setup() {},
};
</script>

<style scoped>
:deep(img) {
  object-fit: cover;
}
</style>
