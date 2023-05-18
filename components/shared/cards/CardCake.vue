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
		<p class="card-cake__title">
			Торт "{{ cake.title }}"
		</p>
		<template v-if="!!cake.price && !!cake.weight">
			<p class="card-cake__info">
				<strong>{{ cake.price }} ₽ /</strong> {{ cake.weight }}кг
			</p>
		</template>
	</LinkBase>
</template>

<style scoped lang="scss">
.card-cake {
	padding: 20px adpval(20, 30);
	width: fit-content;
	border-radius: 15px;
	box-shadow: 0 3px 8px #C4D0D0;
	background-color: $merenga-white;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: fit-content;
	gap: 20px;

	&__image {
		width: 200px;
		aspect-ratio: 1;
		border-radius: 15px;
		object-fit: cover;
	}

	&__title {
		font-weight: 500;
		font-size: 26px;
		color: $merenga-black;
	}

	&__info {
		font-weight: 500;
		font-size: 24px;
		color: $merenga-black;
	}
}
</style>
