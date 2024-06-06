<script setup lang="ts">
defineProps<{
  results: number
}>();
const emits = defineEmits([`filter:rating`]);

const ratingFilterItems = [
  { title: `all restaurants`, value: 0 },
  { title: `5 stars`, value: 5 },
  { title: `4 stars or more`, value: 4 },
  { title: `3 stars or more`, value: 3 },
  { title: `2 stars or more`, value: 2 },
  { title: `1 star or more`, value: 1 },
];

const select = ref(ratingFilterItems[0]);
</script>

<template>
  <VCard variant="outlined">
    <VCardText>
      <div class="flex flex-wrap items-center justify-between gap-8">
        <strong>Filter the restaurants by ratings</strong>
        <VSelect
          v-model="select"
          :items="ratingFilterItems"
          variant="solo"
          hide-details="auto"
          placeholder="all restaurants"
          @update:model-value="emits(`filter:rating`, $event)"
        />
      </div>
      <p v-if="results">
        {{ results }} restaurant(s) found
      </p>
    </VCardText>
  </VCard>
</template>
