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
.card-cake{
    &__image{
        max-width: 200px;
        aspect-ratio: 1;
        object-fit: cover;
    }
}
</style>
