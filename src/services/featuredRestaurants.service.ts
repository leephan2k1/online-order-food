import sanityQuery from '~/services/sanity.query';
import { Featured } from '~/models/featured.model';

export function getFeaturedRestaurants(): Promise<Featured[]> {
  return sanityQuery(`
        *[_type=='featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
            name
          }
        }
      }
  `);
}

export const getFeaturedRestaurantById = (id: string | number) => {
  return sanityQuery(
    `
        *[_type == 'featured' && _id == $id] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `,
    { id },
  );
};
