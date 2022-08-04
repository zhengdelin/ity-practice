<template>
  <div class="w-full h-fit shadow-xl">
    <critic-info-card
      :critic="'daniellife'"
      :gender="'Male'"
      :school="'國立臺中科技大學'"
    ></critic-info-card>
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
    criticInfoCard,
    ratingItem,
    feedbackContent,
  },
};
</script>
