import { mount } from '@vue/test-utils';

import Review from './review.vue';
import restaurantsResponse from '@/mock/restaurants.json';

const restaurant = restaurantsResponse[0];

describe(`review`, () => {
  it(`renders a review`, (context) => {
    const wrapper = mount(Review, {
      global: { plugins: [context.router] },
      props: { restaurant },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
