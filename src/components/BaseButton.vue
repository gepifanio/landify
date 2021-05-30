<template>
  <component
    class="btn"
    :is="element"
    :role="role"
    :href="isLink && href"
    :aria-disabled="isLink && disabled ? 'true' : false"
    :disabled="!isLink && disabled"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    element: {
      type: String,
      default: 'a',
      validator: (val) => ['a', 'button', 'div', 'span'].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: undefined,
    },
  },
  computed: {
    isLink() {
      return this.element === 'a';
    },
  },
};
</script>

<style>
.btn {
  padding: 16px 41px;
  background: #8c30f5;
  border-radius: 8px;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-decoration: none;
  color: #ffffff;
}
</style>
