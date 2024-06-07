import { mount } from '@vue/test-utils';

import { VSelect } from 'vuetify/lib/components/index.mjs';
import RatingFilter from './rating-filter.vue';

describe(`rating-filter`, () => {
  it(`renders correctly a restaurant`, async (context) => {
    const wrapper = mount(RatingFilter, {
      global: { plugins: [context.router] },
      attachTo: document.body,
    });

    const select = wrapper.findComponent(VSelect);
    expect(select.exists()).toBe(true);
  });
});
