<template>
  <div><feedback-card></feedback-card></div>
</template>

<script>
import feedbackCard from "@/vues/cards/feedbackCard.vue";

export default {
  name: "postPage",
  components: {
    feedbackCard: feedbackCard,
  },
};
</script>
