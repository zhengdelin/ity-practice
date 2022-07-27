<template>
  <div
    class="flex flex-row border-b-4 border-[#BB8FCE] w-full h-[380px] space-x-5 p-10 bg-white drop-shadow-md"
  >
    <div
      class="flex w-[300px] h-[300px] overflow-hidden bg-no-repeat bg-cover bg-center"
    >
      <img
        class="w-full"
        src="https://images.unsplash.com/photo-1581781870027-04212e231e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      />
    </div>
    <div
      class="flex flex-col justify-center w-[630px] h-[300px] space-y-10 pl-20 text-[#4B4B4B]"
    >
      <p class="flex text-4xl">{{ name }}</p>
      <p class="flex text-2xl text-left">{{ desc }}</p>
    </div>
    <div
      class="flex items-center justify-end w-[590px] h-[300px] text-[#4B4B4B]"
    >
      <p class="text-3xl">商品價格：{{ price }} 元</p>
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
