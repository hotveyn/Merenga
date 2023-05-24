<script setup lang="ts">

import { ICakeCard } from '~/interfaces/ICakeCard';
import { ICompilation } from '~/interfaces/ICompilation';
import CompilationCake from '~/components/shared/compilation/CompilationCake.vue';
import ButtonBase from '~/components/shared/button/ButtonBase.vue';

const compilations: Array<ICompilation<ICakeCard>> = [
	{
		id: 1,
		title: 'Популярное',
		to: '/catalog',
		items: [
			{
				id: 1,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 2,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 3,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 4,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 5,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			}
		]
	},
	{
		id: 2,
		title: 'Торты СССР',
		to: '/catalog',
		items: [
			{
				id: 1,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 2,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 3,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 4,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 5,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			}
		]
	},
	{
		id: 3,
		title: 'Новинки',
		to: '/catalog',
		items: [
			{
				id: 1,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 2,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 3,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 4,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			},
			{
				id: 5,
				img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
				title: 'Весенний',
				price: 4799,
				weight: 5
			}
		]
	}
];
</script>

<template>
	<section class="index-catalog">
		<div class="container">
			<h2 class="title-h2 index-catalog__title">
				Каталог
			</h2>
			<div class="index-catalog__compilations">
				<CompilationCake
						v-for="compilation in compilations"
						:key="compilation.id"
						:cakes="compilation.items"
						:to="compilation.to"
						class="index-catalog__compilation"
				>
					<template #title>
						{{ compilation.title }}
					</template>
				</CompilationCake>
			</div>
			<ButtonBase
					type="beige"
					to="catalog"
					class="index-catalog__button"
			>
				Перейти в каталог
			</ButtonBase>
		</div>
	</section>
</template>

<style scoped lang="scss">
.index-catalog {
	padding: 50px 0;

	&__button {
		margin-top: adpval(20, 45);
	}
}
</style>
