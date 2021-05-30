import { shallowMount } from '@vue/test-utils'
import HeroBanner from '@/components/HeroBanner.vue'

describe('HeroBanner.vue', () => {
  it('renders heading when passed', () => {
    const wrapper = shallowMount(HeroBanner, {
      propsData: {
        heading: "Organise projects. Get more done."
      },
    })
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.find('[data-test="hero-banner-heading"]').text()).toEqual('Organise projects. Get more done.');
  })
})