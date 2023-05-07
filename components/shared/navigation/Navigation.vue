<script setup lang="ts">
// TODO: rename component
import LinkBase from "~/components/shared/link/LinkBase.vue";
import {INavigation} from "~/interfaces/INavigation";

const props = withDefaults(defineProps<{
  navLinks: INavigation[],
  isVertical?: boolean;
}>(), {isVertical: false});

</script>

<template>
  <nav class="navigation">
    <ul
        class="navigation__list"
        :class="{'navigation__list_vertical': isVertical}"
    >
      <li
          class="navigation__item"
          v-for="navLink in navLinks"
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
    font-size: adpval(18, 28);
  }

}
</style>