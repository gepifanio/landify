<template>
  <header class="nav-bar">
    <nav>
      <ul class="nav-bar__items">
        <li class="nav-bar__item">
          <a href="#"
            ><img src="../assets/logo-with-name.svg" alt="The Landify Homepage"
          /></a>
        </li>
        <li class="nav-bar__item" :key="item" v-for="item in items">
          <a :href="item.link">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.nav-bar {
  margin-left: 165px;
  margin-right: 165px;
}

@media (max-width: 1150px) {
  .nav-bar {
    margin-left: 60px;
    margin-right: 60px;
  }
}

.nav-bar__items {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
}

@media (max-width: 650px) {
  .nav-bar__items {
    flex-direction: column;
  }

  .nav-bar__item {
    margin: 0 !important;
  }
}

.nav-bar__item {
  margin-right: 32px;
}

.nav-bar__item a {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  color: #18191f;
}

.nav-bar__item:last-child {
  margin-right: 0;
}
</style>
