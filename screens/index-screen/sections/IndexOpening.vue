<script
		setup
		lang="ts"
>
import ButtonBase from '~/components/shared/button/ButtonBase.vue';
</script>

<template>
  <section class="index-opening">
    <div class="container index-opening__content">
      <img
          src="/images/cakes/big-cake.png"
          alt="big-cake"
          class="index-opening__cake-img"
      >
      <div class="index-opening__info">
        <h1 class="index-opening__title title-h1">
          Условный текст который может привлечь внимание
        </h1>
        <p class="index-opening__description">
          Дополнительный текст который в крации описыват и возможно тоже заинтересует клиента
        </p>
        <ButtonBase
            to="/catalog"
            type="beige"
            class="index-opening__choose"
        >
          Выбрать торт
        </ButtonBase>
      </div>
    </div>
  </section>
</template>

<style
		scoped
		lang="scss"
>
.index-opening {
  width: 100%;
  padding: adpval(30, 120) 0 30px 0;

  &__content {
    position: relative;
  }

  &__info {
    position: relative;
    z-index: 2;
  }

  &__title {
    max-width: 585px;
  }

  &__description {
    margin-top: adpval(10, 30);
    color: $merenga-gray;
    font-weight: 600;
    max-width: 545px;
    font-size: adpval(14, 26);
    line-height: 33px;
  }

  &__cake-img {
    z-index: 1;
    position: absolute;
    right: -250px;
    max-width: 1000px;
    min-width: 800px;
    top: adpval(-100, -250);
    width: 70%;
  }

  &__choose {
    margin-top: 42px;
  }
}
</style>
