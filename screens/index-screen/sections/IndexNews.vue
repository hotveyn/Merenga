<script setup lang="ts">
import { ICakeCard } from '~/interfaces/ICakeCard.ts';
import SwiperCake from '~/components/shared/swiper/SwiperCake.vue';
import ButtonBase from '~/components/shared/button/ButtonBase.vue';

const cakes: ICakeCard[] = [
	{
		id: 1,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
	},
	{
		id: 2,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
	},
	{
		id: 3,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
	},
	{
		id: 5,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
	},
	{
		id: 6,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
	},
	{
		id: 7,
		img: 'https://img.taste.com.au/hbNtzI2Q/taste/2021/08/clinkers-cake-173208-2.jpg',
		title: 'Орео'
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
				<SwiperCake
						class="index-news__cake"
						:cakes="cakes"
				/>
			</div>
			<ButtonBase
					:to="'/catalog'"
					type="switch"
					class="index-news__button"
			>
				Посмотреть ещё
			</ButtonBase>
		</div>
	</div>
</template>

<style scoped lang="scss">
.index-news {
	position: relative;
	margin-top: 100px;
	z-index: 1;

	&__cakes {
		width: 850px;
		margin-top: 30px;
	}

	&__button {
		margin-top: adpval(20, 30);
	}
}
</style>
