<script setup lang="ts">
import { useFetchRestaurants } from '~/composables/restaurants';

const { data: restaurants, isError } = useFetchRestaurants();
</script>

<template>
  <div>
    <RatingFilter />
    <LoadingError v-if="isError" />
    <div v-else-if="restaurants" class="grid gap-4 grid-cols-1 mt-4 sm:grid-cols-3">
      <RestaurantCard
        v-for="restaurant of restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>
