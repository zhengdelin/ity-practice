<!--Note:BeforeLogin-->
<template>
  <div
    class="space-y-10 sm:space-y-[60px] lg:space-y-[100px] xl:space-y-[120px]"
  >
    <feedback-card
      v-for="(item, index) in feedbackCardList"
      :key="index"
      :feedbackCard="item"
    ></feedback-card>
  </div>
</template>

<script>
import feedbackCard from "@/vues/cards/feedbackCard.vue";

export default {
  name: "feedbackPage",
  components: {
    feedbackCard,
  },
  setup() {
    const feedbackCardList = [
      { critic: "daniellife", gender: "男性", school: "國立臺中科技大學" },
      { critic: "tzuyu", gender: "女性", school: "國立臺灣大學" },
      { critic: "星野原", gender: "男性", school: "國立臺北大學" },
    ];
    return { feedbackCardList };
  },
};
</script>
