<template>
  <div id="app">
    <Default>
      <HeroBanner
        heading="Organise projects. Get more done."
        button-label="Get
      Started"
      />
      <div class="feature-section">
        <h2>Tailor-made features</h2>
        <p>
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </p>
      </div>
      <div class="feature-card__list">
        <FeatureCard
          heading="Robust workflow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
              fill="#D6B1FF"
            />
            <path
              d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
              fill="#8C30F5"
            />
            <path
              d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
              fill="#2EC5CE"
            />
          </svg>
        </FeatureCard>
        <FeatureCard
          heading="Flexibility"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.33325 1.33337H30.6666L26.6666 9.33337H1.33325L5.33325 1.33337Z"
              fill="#8C30F5"
            />
            <path
              d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z"
              fill="#2EC5CE"
            />
            <path
              d="M5.33325 22.6667H30.6666L26.6666 30.6667H1.33325L5.33325 22.6667Z"
              fill="#D6B1FF"
            />
          </svg>
        </FeatureCard>
        <FeatureCard
          heading="User friendly"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.6666 8.00004V2.66671C30.6666 2.31309 30.5261 1.97395 30.2761 1.7239C30.026 1.47385 29.6869 1.33337 29.3333 1.33337H2.66659C2.31296 1.33337 1.97382 1.47385 1.72378 1.7239C1.47373 1.97395 1.33325 2.31309 1.33325 2.66671V8.00004H30.6666Z"
              fill="#2EC5CE"
            />
            <path
              d="M1.33325 10.6667V29.3334C1.33325 29.687 1.47373 30.0262 1.72378 30.2762C1.97382 30.5263 2.31296 30.6667 2.66659 30.6667H9.33325V10.6667H1.33325Z"
              fill="#D6B1FF"
            />
            <path
              d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z"
              fill="#8C30F5"
            />
          </svg>
        </FeatureCard>
      </div>
    </Default>
  </div>
</template>

<script>
import Default from '@/layout/Default';
import HeroBanner from '@/components/HeroBanner';
import FeatureCard from '@/components/FeatureCard';

export default {
  components: {
    Default,
    HeroBanner,
    FeatureCard,
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

p {
  margin: 0;
}

.feature-card__list {
  display: flex;
  flex-flow: column;
  margin-bottom: 48px;

  @media (min-width: 800px) {
    flex-direction: row;
  }

  .feature-card {
    margin-bottom: 24px;

    @media (min-width: 800px) {
      margin: 0 30px 0 0;

      &:last-child {
        margin: 0;
      }
    }
  }
}

.feature-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;

  h2 {
    margin-bottom: 8px;
    text-align: center;
  }

  p {
    font-size: 18px;
line-height: 32px;
text-align: center;
  }
}
</style>
