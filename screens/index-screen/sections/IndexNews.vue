<script setup lang="ts">
import { ICakeCard } from '~/interfaces/ICakeCard.ts';
import CardCake from '~/components/shared/cards/CardCake.vue';

const cakes: ICakeCard[] = [
	{
		id: 1,
		title: 'Орео',
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg'
	}
];
</script>

<template>
  <div class="index-news">
    <div class="container">
      <h3 class="index-news__title title-h3">
        Новинки
      </h3>
      <div class="index-news__cakes">
        <CardCake
            v-for="cake in cakes"
            :key="cake.id"
            class="index-news__cake"
            :cake="cake"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-news {
  margin-top: 100px;
}
</style>
