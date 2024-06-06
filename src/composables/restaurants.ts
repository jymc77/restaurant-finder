import { api } from '~/services/api';

export interface Restaurant {
  name: string
  id: string
  url: string
  phone: string
  display_phone: string
  photos: string[]
  location?: Location
  reviews: Review[]
}

export interface Location {
  address1: string
  city: string
  postal_code: string
  formatted_address: string
}

export interface Review {
  text: string
  rating: number
  id: string
}

// on créer un map pour avoir un dictionnaire des clé (restaurant id) valeur (note moyenne des restaurant)
export const restaurantsRatings = new Map();

export function useFetchRestaurants() {
  return useQuery({
    queryKey: [`restaurants-list`],
    queryFn: () => {
      const url = `restaurants`;
      return api(url).json<Restaurant[]>()
        .then((restaurants) => {
          // on calcule les notes moyennes des restaurants
          restaurants.forEach((restaurant) => {
            const { reviews } = restaurant;
            const rating = reviews.length > 0
              ? reviews.reduce((acc: number, review: Review) => acc + review.rating, 0) / reviews.length
              : 0;
            // on enregistre la note moyenne dans le map
            restaurantsRatings.set(restaurant.id, rating);
          });
          return restaurants;
        });
    },
  });
}

export function useFetchRestaurant({ restaurantId }: { restaurantId: string | string[] }) {
  return useQuery({
    queryKey: [`company`, restaurantId],
    queryFn: () => {
      const url = `restaurants/${restaurantId}`;
      return api(url).json<Restaurant>();
    },
  });
}
