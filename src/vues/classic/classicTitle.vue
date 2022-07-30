<template>
  <div
    class="flex justify-start items-center pl-10 w-full h-[100px] bg-[#76448A]"
  >
    <p class="text-3xl font-semibold text-white">
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
    },
  },
};
</script>
