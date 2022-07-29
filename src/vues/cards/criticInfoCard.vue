<template>
  <div
    class="flex flex-row items-center w-full h-48 sm:h-64 lg:h-80 2xl:h-[400px] pl-10 lg:pl-20 space-x-10 sm:space-x-14 lg:space-x-32 bg-white"
  >
    <div
      class="flex w-32 md:w-48 lg:w-[250px] h-32 md:h-48 lg:h-[250px] rounded-full overflow-hidden bg-no-repeat bg-cover bg-black"
    >
      <img
        class="w-full h-full"
        src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
    </div>
    <div class="flex flex-col space-y-10">
      <p class="flex text-4xl lg:text-6xl text-[#76448A] font-bold">
        {{ critic }}
      </p>
      <div class="flex flex-row text-lg sm:text-xl lg:text-3xl font-semibold">
        <p class="flex">{{ gender }}</p>
        <div class="flex">&nbsp;&nbsp;/&nbsp;&nbsp;</div>
        <p class="flex">{{ school }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    critic: {
      type: String,
    },
    gender: {
      //先暫設string
      type: String,
    },
    school: {
      type: String,
    },
  },
};
</script>
