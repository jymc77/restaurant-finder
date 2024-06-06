<script setup lang="ts">
import { type Restaurant } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();
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
    <RestaurantMeanRating
      v-if="restaurant.reviews.length > 0"
      :restaurant="restaurant"
    />
    <p v-else class="text-sm p-4 text-gray-300 italic">
      No-rating
    </p>
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
