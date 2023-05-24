<script setup lang="ts">

</script>

<template>
	<section class="index-about">
		<div class="container">
			<h2 class="title-h2 index-about__title">
				О кондитере
			</h2>
			<div class="index-about__info">
				<p class="index-about__text">
					Артём Герасимов - кандидат в мэры города Новосибирска и ветеран чеченской войны. Он родился в 1976 году в
					Новосибирске и после окончания школы поступил на службу в ряды российской армии. В 1995 году он был направлен
					на
					службу в Чечню, где принимал участие в боевых действиях.
					<br>
					После возвращения из Чечни Артём начал работать в сфере общественного питания. Он открыл свою кондитерскую,
					где
					начал производить торты и другие сладости высокого качества. Благодаря своему труду и таланту, Артём стал
					известным в городе и получил множество наград и признаний.
				</p>
				<img
						class="index-about__image"
						src="/images/cakes/artyom.jpg"
						alt="Герасимов Артём Игоревич"
				>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.index-about {
	&__info {
		display: grid;
		grid-template-columns: 1.2fr .8fr;
		margin-top: 35px;
		max-height: 532px;
	}

	&__text {
		font-size: adpval(18, 26);
		line-height: 33px;
		padding: 35px;
		background-color: $merenga-white;
		border-radius: 30px;
		width: 100%;
	}

	&__image {
		border-radius: 30px;
		width: fit-content;
		object-fit: contain;
		height: 532px;
		justify-self: end;
	}
}
</style>
