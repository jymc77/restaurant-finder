<script setup lang="ts">
import { type Restaurant, restaurantsRatings, useFetchRestaurants } from '~/composables/restaurants';

const { data: restaurants, isError } = useFetchRestaurants();
// on definit une référence contenant la valeur du filtre de la note moyenne
const filterRating = ref(0);

// computed servant à générer une liste de restaurants filtrés
const filteredRestaurants = computed(() => {
  return restaurants.value
    ? restaurants.value.reduce((acc, restaurant) => {
      // on va chercher la note moyenne du restaurant dans le map restaurantsRatings
      const rating = restaurantsRatings.get(restaurant.id);
      // on ajoute le restaurant si la note est superieure ou égale à la valeur du filtre
      if (rating >= filterRating.value)
        acc.push(restaurant);

      return acc;
    }, [] as Restaurant[])
    : null;
});
defineExpose({ filteredRestaurants });
</script>

<template>
  <div>
    <RatingFilter :results="filteredRestaurants?.length || 0" @filter:rating="filterRating = $event" />
    <LoadingError v-if="isError" />
    <div v-else-if="restaurants" class="grid gap-4 grid-cols-1 mt-4 sm:grid-cols-3">
      <RestaurantCard
        v-for="restaurant of filteredRestaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div>
  </div>
</template>

<style></style>
