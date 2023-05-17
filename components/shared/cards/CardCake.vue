<script setup lang="ts">
import LinkBase from '~/components/shared/link/LinkBase.vue';
import { ICakeCard } from '~/interfaces/ICakeCard';

defineProps<{
	cake: ICakeCard
}>();
</script>

<template>
  <LinkBase
      :to="`cake/${cake.id}`"
      class="card-cake"
  >
    <img
        :src="cake.img"
        alt="cake"
        class="card-cake__image"
    >
    <p class="card-cake__title title-h3">
      {{ cake.title }}
    </p>
  </LinkBase>
</template>

<style scoped lang="scss">
.card-cake {
  padding: 30px ;
  width: fit-content;
  border-radius: 15px;
  box-shadow: 0 3px 8px #C4D0D0;
  background-color: $merenga-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__image {
    width: 200px;
    aspect-ratio: 1;
    border-radius: 15px;
    object-fit: cover;
  }

  &__title {

  }
}
</style>
