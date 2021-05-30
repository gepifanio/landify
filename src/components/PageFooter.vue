<template>
  <footer class="page-footer">
    <div class="page-footer__content">
      <img class="page-footer__logo" src="../assets/logo.svg" alt="Landify Logo" />
      <ul class="page-footer__primary">
        <li class="page-footer__links" v-for="(link, index) in primaryLinks" :key="index">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <ul class="page-footer__secondary">
        <li class="page-footer__links" v-for="(link, index) in secondaryLinks" :key="index">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <p class="page-footer__copyright">2020 Landify UI kit All rights reserved</p>
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
}

.page-footer__logo {
  margin-bottom: 24px;
}

.page-footer__content {
  margin-left: 165px;
  margin-right: 165px;
  padding: 56px 0;
}

@media (max-width: 1150px) {
  .page-footer__content {
    margin-left: 60px;
    margin-right: 60px;
  }
}

.page-footer__links {
  list-style: none;
  margin-right: 24px;
}

.page-footer__links:last-child {
  margin-right: 0;
}

.page-footer__links a {
  text-decoration: none;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #FFFFFF;
}

.page-footer__primary {
  display: flex;
  padding: 0;
  margin-bottom: 12px;
}

.page-footer__secondary {
  display: flex;
  padding: 0;
  margin-bottom: 24px;
}

@media (max-width: 480px) {
  .page-footer__primary {
    flex-direction: column;
  }
  
  .page-footer__secondary {
    flex-direction: column;
  }
}

.page-footer__copyright {
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px;
color: #D9DBE1;
}
</style>
