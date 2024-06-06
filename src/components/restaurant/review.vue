<script setup lang="ts">
import { type Restaurant } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();
</script>

<template>
  <VCard class="va-company-review" tag="li">
    <VCardText class="flex flex-col gap-4">
      <div v-for="review of restaurant.reviews" :key="review.id" class="">
        <v-rating
          :model-value="review.rating"
          active-color="primary"
          color="primary"
          half-increments
          density="compact"
          readonly
        />
        <p class="whitespace-pre-line">
          {{ review.text }}
        </p>
      </div>
    </VCardText>
  </VCard>
</template>
