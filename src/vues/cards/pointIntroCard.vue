<!--Use:sellerBuyPointsIntro-->
<template>
  <div
    class="flex flex-col items-center xl:h-[400px] bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
  >
    <img
      class="object-cover w-full md:w-48 h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
      src="https://images.unsplash.com/photo-1546142711-1e28c0540deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 sm:mb-5 xl:mb-8 text-3xl md:text-2xl lg:text-3xl xl:text-2xl 2xl:text-4xl font-bold tracking-tight text-[#2D2D2D]"
      >
        {{ pointIntroCard.title }}
      </h5>
      <p
        class="mb-3 text-xl md:text-base lg:text-xl xl:text-base 2xl:text-xl font-normal text-black"
      >
        {{ pointIntroCard.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pointIntroCard: { type: Object, default: () => ({}) },
  },
  setup() {},
};
</script>
