<template>
  <footer class="page-footer">
    <div class="page-footer__content">
      <img
        class="page-footer__logo"
        src="../assets/logo.svg"
        alt="Landify Logo"
      />
      <ul class="page-footer__primary">
        <li
          class="page-footer__links"
          v-for="(link, index) in primaryLinks"
          :key="index"
        >
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <ul class="page-footer__secondary">
        <li
          class="page-footer__links"
          v-for="(link, index) in secondaryLinks"
          :key="index"
        >
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <p class="page-footer__copyright">
        2020 Landify UI kit All rights reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    primaryLinks: {
      type: Array,
      default: () => [],
    },
    secondaryLinks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.page-footer {
  background: #0b0d17;

  &__logo {
    margin-bottom: 24px;
  }

  &__content {
    margin-left: 60px;
    margin-right: 60px;
    padding: 56px 0;

    @media (min-width: 1150px) {
      margin-left: 165px;
      margin-right: 165px;
    }
  }

  &__links {
    list-style: none;
    margin-right: 24px;

    a {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__primary {
    display: flex;
    padding: 0;
    margin-bottom: 12px;

    @media (min-width: 480px) {
      flex-direction: row;
    }
  }

  &__secondary {
    display: flex;
    flex-direction: column;

    padding: 0;
    margin-bottom: 24px;

    @media (min-width: 480px) {
      flex-direction: row;
    }
  }

  &__copyright {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #d9dbe1;
  }
}
</style>
