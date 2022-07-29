<template>
  <div
    class="flex flex-row items-center border-b-4 border-[#BB8FCE] w-full h-56 md:h-80 lg:h-96 2xl:h-[380px] space-x-5 p-10 bg-white drop-shadow-md"
  >
    <div
      class="flex w-1/3 lg:w-4/12 2xl:w-full h-40 sm:h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-[300px] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <img
        class="w-full"
        src="https://images.unsplash.com/photo-1581781870027-04212e231e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
    </div>
    <div
      class="flex flex-col lg:flex-row space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 w-2/3 lg:w-8/12 2xl:w-full"
    >
      <div
        class="flex flex-col justify-center w-full 2xl:w-[630px] 2xl:h-[300px] space-y-5 lg:space-y-10 pl-0 lg:pl-10 2xl:pl-20 text-[#4B4B4B]"
      >
        <p
          class="flex text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold text-[#76448A]"
        >
          {{ name }}
        </p>
        <p
          class="flex text-sm lg:text-base xl:text-2xl text-left lg:font-medium"
        >
          {{ desc }}
        </p>
      </div>
      <div
        class="flex items-center justift-start lg:justify-end w-full 2xl:w-[590px] 2xl:h-[300px] lg:font-semibold text-[#4B4B4B]"
      >
        <p class="text-base lg:text-xl xl:text-3xl">商品價格：{{ price }} 元</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
};
</script>
