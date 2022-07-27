<template>
  <div
    class="flex flex-col items-center w-[380px] h-[400px] space-y-10 bg-[#4B4B4B]"
  >
    <div class="flex w-60 h-60 rounded-full mt-10">
      <img
        class="rounded-full"
        src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
      />
    </div>
    <div class="flex text-2xl font-semibold text-white">{{ seller }}</div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: String,
    },
  },
};
</script>
