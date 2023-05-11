<!--TODO: rename component-->
<script setup lang="ts">
import LinkBase from '~/components/shared/link/LinkBase.vue';
import { INavigation } from '~/interfaces/INavigation';

const props = withDefaults(defineProps<{
  navLinks: INavigation[],
  isVertical?: boolean;
}>(), { isVertical: false });

</script>

<template>
  <nav class="navigation">
    <ul
        class="navigation__list"
        :class="{'navigation__list_vertical': isVertical}"
    >
      <li
          v-for="navLink in props.navLinks"
          :key="navLink.id"
          class="navigation__item"
      >
        <LinkBase
            class="navigation__link link"
            :to="navLink.link"
        >
          {{ navLink.title }}
        </LinkBase>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navigation {
  &__list {
    display: flex;
    align-items: center;
    gap: adpval(5, 50);

    &_vertical {
      flex-direction: column;
    }
  }

  &__link {
    font-size: adpval(18, 24);
  }

}
</style>
