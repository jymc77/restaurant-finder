<script setup lang="ts">
import { useFetchRestaurant } from '~/composables/restaurants';

const { params } = useRoute();
const { data: restaurant, isError } = useFetchRestaurant({ restaurantId: params.restaurantId });
</script>

<template>
  <VAlert v-if="isError" type="warning" class="mt-4">
    TODO: It might be an Fetch error
    <br>
    You should fix that
  </VAlert>
  <div v-else class="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_16rem] gap-6">
    <VCard v-if="restaurant">
      <VImg
        v-for="photo in restaurant.photos"
        :key="photo"
        :src="restaurant.photos[0]"
        height="250"
        cover
        gradient="to top, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <VCardTitle class="!text-4xl text-white">
          {{ restaurant.name }}
        </VCardTitle>
        <RestaurantMeanRating
          v-if="restaurant.reviews.length > 0"
          :restaurant="restaurant"
        />
      </VImg>
      <VCardText>
        <div class="grid grid-cols-2 gap-4">
          <RestaurantLocation :location="restaurant.location" />
          <KeyValue icon="mdi-phone">
            <p class="text-body-1">
              {{ restaurant.phone }} <br>
              {{ restaurant.display_phone }}
            </p>
          </KeyValue>
        </div>
      </VCardText>
      <VCardActions class="mt-auto">
        <VBtn color="primary" variant="tonal" to="/">
          Go back
        </VBtn>
      </VCardActions>
    </VCard>
    <aside>
      <ul class="pa-0">
        <RestaurantReview v-if="restaurant" :restaurant="restaurant" />
      </ul>
    </aside>
  </div>
</template>
