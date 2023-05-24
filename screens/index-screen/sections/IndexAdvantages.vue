<script setup lang="ts">

</script>

<template>
	<div class="index-advantages">
		<div class="container">
			<h2 class="index-advantages__title title-h2">
				Преимущества домашней кондитерской
			</h2>
			<div class="index-advantages__items">
				<div class="index-advantages__item advantage">
					<img src="/images/advantages/advantage1.png" alt="cake" class="advantage__img">
					<div class="advantage__info">
						<h3 class="title-h3 advantage__title">
							Индивидуальный подход
						</h3>
						<div class="advantage__description">
							Здесь могут подобрать торт не только по вашему вкусу в буквальном смысле этой фразы, но и по тематике
							вашего праздника: от детского дня рождения до годовщины свадьбы. Ограничивает лишь фантазия! Выбрав
							подобный вариант,вы сможете выбрать самые необычные вкусовые сочетания, которые вас приятно удивят.
						</div>
					</div>
				</div>
				<div class="index-advantages__item advantage">
					<img src="/images/advantages/advantage2.png" alt="cake" class="advantage__img">
					<div class="advantage__info">
						<h3 class="title-h3 advantage__title">
							Высокое качество
						</h3>
						<div class="advantage__description">
							Домашние кондитерские используют только самые свежие и высококачественные продукты.
						</div>
					</div>
				</div>
				<div class="index-advantages__item advantage">
					<img src="/images/advantages/advantage3.png" alt="cake" class="advantage__img">
					<div class="advantage__info">
						<h3 class="title-h3 advantage__title">
							Свежесть продуктов
						</h3>
						<div class="advantage__description">
							Домашние кондитерские используют только самые свежие и высококачественные продукты.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.index-advantages {
	margin-top: adpval(50, 70);
	padding: adpval(50, 70) 0;
	background-color: white;
	background-image: url("/images/backgrounds/cakes.svg");
	background-size: cover;

	&__title {
		text-align: center;
	}

	&__items {
		margin-top: adpval(50, 70);
		display: flex;
		flex-direction: column;
		gap: adpval(40, 60);
	}
}

.advantage {
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:nth-child(2n) {
		flex-direction: row-reverse;
	}

	&__img {
		width: 50%;
	}

	&__info {
		width: 42%;
	}

	&__description {
		font-size: adpval(15, 24);
		line-height: 33px;
		margin-top: 30px;
	}
}
</style>
