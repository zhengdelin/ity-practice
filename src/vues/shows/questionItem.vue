<template>
  <div class="flex flex-col items-center space-y-0 lg:space-y-8 2xl:space-y-10">
    <!--questionContent-->
    <div
      class="flex justify-center items-center w-[400px] xl:w-[420px] h-40 xl:h-[250px] bg-[#F2F2F2] rounded-xl p-6"
    >
      <p class="font-semibold text-xl md:text-2xl xl:text-3xl leading-[60px]">
        {{ questionItem.content }}
      </p>
    </div>
    <!--questionAnimation-->
    <component :is="questionItem.animation" class="w-[380px] h-[380px]" />
  </div>
</template>

<script>
export default {
  name: "questionItem",
  props: {
    questionItem: { type: Object, default: () => ({}) },
  },
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
