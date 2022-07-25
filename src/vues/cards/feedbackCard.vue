<template>
  <div class="w-full h-[1540px]">
    <critic-info-card></critic-info-card>
    <rating-item></rating-item>
    <feedback-content></feedback-content>
  </div>
</template>

<script>
import criticInfoCard from "@/vues/cards/criticInfoCard.vue";
import ratingItem from "@/vues/shows/ratingItem.vue";
import feedbackContent from "@/vues/shows/feedbackContent.vue";

export default {
  name: "feedbackCard",
  components: {
    criticInfoCard: criticInfoCard,
    ratingItem: ratingItem,
    feedbackContent: feedbackContent,
  },
};
</script>
