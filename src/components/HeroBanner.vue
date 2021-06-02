<template>
  <div class="hero-banner">
    <div class="hero-banner__content">
      <h1 data-test="hero-banner-heading" class="hero-banner__header">
        {{ heading }}
      </h1>
      <BaseButton class="hero-banner__cta">{{ buttonLabel }}</BaseButton>
    </div>
    <img src="../assets/phone.png" alt="Phone displaying the product" />
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  components: {
    BaseButton,
  },
  props: {
    heading: {
      type: String,
      default: '',
    },
    buttonLabel: {
      type: String,
      default: '',
    },
    img: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.hero-banner {
  display: flex;
  flex-direction: column;

  &__content {
    margin-bottom: 48px;
  }

  @media (min-width: 880px) {
    flex-direction: row;
  }

  &__header {
    font-size: 48px;
    line-height: 1.5;
    margin-right: 45px;
    margin-bottom: 48px;
  }
}
</style>
