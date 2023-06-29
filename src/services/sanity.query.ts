import { sanityClient } from '../../Sanity';
import type { QueryParams } from '@sanity/client';

export default function sanityQuery(query: string, params?: QueryParams) {
  return sanityClient.fetch(query, params);
}
