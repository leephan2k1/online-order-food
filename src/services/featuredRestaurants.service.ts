import sanityQuery from '~/services/sanity.query';

export const getFeaturedRestaurants = () => {
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
};

export const getFeaturedResturantById = (id: string | number) => {
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
