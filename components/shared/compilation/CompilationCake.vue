<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import ButtonBase from '~/components/shared/button/ButtonBase.vue';
import CardCake from '~/components/shared/card/CardCake.vue';
import { ICakeCard } from '~/interfaces/ICakeCard';

defineProps<{
	cakes: Array<ICakeCard>,
	to: RouteLocationRaw | null
}>();

function normalizeArray<T>(arrayToNormalize: Array<T>) {
	return arrayToNormalize.slice(0, 4);
}
</script>

<template>
	<div class="compilation">
		<div class="compilation__header">
			<h3 class="title-h3 compilation__title">
				<slot name="title"/>
			</h3>
			<ButtonBase type="switch" :to="'catalog'">
				Посмотреть ещё
			</ButtonBase>
		</div>
		<div class="compilation__cards">
			<CardCake
					v-for="cake in normalizeArray(cakes)"
					:key="cake.id"
					class="compilation__card"
					:cake="cake"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.compilation {
	width: 100%;
	margin-top: 50px;

	&__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__cards {
		margin-top: 25px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-items: center;
		width: 100%;
	}

}
</style>
