<script setup lang="ts">
import { type Restaurant, restaurantsRatings } from '~/composables/restaurants';

defineProps<{
  restaurant: Restaurant
}>();
</script>

<template>
  <v-rating
    :model-value="restaurantsRatings.get(restaurant?.id)"
    active-color="primary"
    color="primary"
    half-increments
    readonly
  />
</template>
