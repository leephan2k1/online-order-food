import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env['SANITY_PROJECT_ID'] || '',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2021-08-31',
});

export function urlFor(source: any) {
  return builder.image(source);
}

const builder = imageUrlBuilder(sanityClient);
