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
  margin-left: 60px;
  margin-right: 60px;

  @media (min-width: 1150px) {
    margin-left: 165px;
    margin-right: 165px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0;

    @media (min-width: 650px) {
      flex-direction: row;
    }
  }

  &__item {
    margin: 0;

    @media (min-width: 650px) {
      margin-right: 32px;
    }

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      text-decoration: none;
      color: #18191f;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
