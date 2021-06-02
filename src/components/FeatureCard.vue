<template>
  <div class="feature-card">
    <slot />
    <h5 class="feature-card__heading">{{ heading }}</h5>
    <p class="feature-card__description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    heading: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.feature-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    margin-bottom: 24px;
  }

  &__heading {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #18191f;
    margin: 24px 0 8px 0;
  }

  &__description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #18191f;
    margin: 0;
    text-align: center;
  }
}
</style>
