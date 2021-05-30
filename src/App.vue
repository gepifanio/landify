<template>
  <div id="app">
    <Default>
      <HeroBanner heading="Organise projects. Get more done." button-label="Get
      Started"/>
    </Default>
  </div>
</template>

<script>
import Default from '@/layout/Default';
import HeroBanner from '@/components/HeroBanner';

export default {
  components: {
    Default,
    HeroBanner,
  },
  name: 'App',
};
</script>

<style>
/**
 * Base styles
 */
html {
  box-sizing: border-box;
  height: 100%;
  color: #18191f;
  font-family: 'Manrope';
  font-size: 16px;
  line-height: 1.5;
  text-rendering: optimizeLegibility;

  @media (min-width: 1360px) {
    font-size: 18px;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
    margin: 0;
  padding: 0;
}

h1 {
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
}

h2 {
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
}
</style>
