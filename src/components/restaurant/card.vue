<script setup lang="ts">
import { type Restaurant, type Review } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();

function ratingAverage(reviews: Review[]) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  return averageRating;
}
</script>

<template>
  <VCard>
    <VImg
      height="100"
      cover
      :src="restaurant?.photos?.[0]"
    />
    <VCardTitle>
      {{ restaurant?.name }}
    </VCardTitle>
    <v-rating
      :model-value="ratingAverage(restaurant?.reviews)"
      active-color="primary"
      color="primary"
      half-increments
      readonly
    />
    <VCardText>
      <RestaurantLocation :location="restaurant?.location" />
    </VCardText>
    <VCardActions class="mt-auto">
      <VBtn color="primary" variant="tonal" :to="`/restaurants/${restaurant?.id}`">
        see more
      </VBtn>
    </VCardActions>
  </VCard>
</template>
