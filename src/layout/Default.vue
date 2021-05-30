<template>
  <div class="container">
    <NavBar :items="items" />
    <div class="container__content">
      <slot />
    </div>
    <PageFooter
      :primary-links="primaryLinks"
      :secondary-links="secondaryLinks"
    />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import PageFooter from '@/components/PageFooter';

export default {
  components: {
    NavBar,
    PageFooter,
  },
  data() {
    return {
      items: [
        { link: '#', label: 'About' },
        { link: '#', label: 'Products' },
        { link: '#', label: 'Pricing' },
        { link: '#', label: 'Blog' },
        { link: '#', label: 'Jobs' },
        {
          link: '#',
          label: 'More',
          subItems: [
            { link: '#', label: 'SubItem1' },
            { link: '#', label: 'SubItem1' },
          ],
        },
      ],
      primaryLinks: [
        { text: 'Download Now', href: '#' },
        { text: 'License', href: '#' },
      ],
      secondaryLinks: [
        { text: 'About', href: '#' },
        { text: 'Features', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Help', href: '#' },
        { text: 'Privacy Policy', href: '#' },
      ],
    };
  },
};
</script>

<style>
.container__content {
  margin-left: 165px;
  margin-right: 165px;
}

@media (max-width: 1150px) {
  .container__content {
    margin-left: 60px;
    margin-right: 60px;
  }
}
</style>
