<script setup lang="ts">
import CardCake from '~/components/shared/cards/CardCake.vue';
import { ICakeCard } from '~/interfaces/ICakeCard';
import { SwiperAutoplay, SwiperNavigation, SwiperController, ref } from '#imports';

const props = withDefaults(defineProps<{
	cakes: ICakeCard[],
	delay?: number
}>(), { delay: 3000 });

const swiperInstance = ref(null);

function setSwiperInstance(swiper: any) {
	swiperInstance.value = swiper;
}

function next() {
	swiperInstance.value.slideNext();
}

</script>

<template>
	<div class="swiper-cake">
		<Swiper
				:modules="[SwiperAutoplay, SwiperNavigation, SwiperController]"
				:autoplay="{
				delay: props.delay,
				disableOnInteraction: true,
			}"
				:slides-per-view="3"
				:space-between="10"
				:loop="true"
				@swiper="setSwiperInstance"
		>
			<SwiperSlide
					v-for="cake in props.cakes"
					:key="cake.id"
			>
				<CardCake :cake="cake"/>
			</SwiperSlide>
		</Swiper>
		<button class="swiper-cake__next" @click="next()">
			<img src="/images/icons/right-slide-arrow.svg" alt="right">
		</button>
	</div>
</template>

<style scoped lang="scss">
.swiper-cake {
	position: relative;
	&__next {
		position: absolute;
		right: -100px;
		top: calc(50% - 27px);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background-color: $merenga-white;
		border: none;
		width: 54px;
		aspect-ratio: 1;
	}
}
</style>
