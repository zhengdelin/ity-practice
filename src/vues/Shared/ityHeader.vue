<template>
  <div class="w-full h-[150px] bg-white">
    <div class="flex flex-row justify-end">
      <header-element></header-element>
      <header-element></header-element>
      <header-element></header-element>
    </div>
  </div>
</template>

<script>
import headerElement from "@/vues/buttons/headerElement.vue";

export default {
  name: "sharedHeader",
  components: {
    headerElement: headerElement,
  },
};
</script>
