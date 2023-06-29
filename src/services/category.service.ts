import sanityQuery from '~/services/sanity.query';
import { Category } from '~/models/category.model';

export function getCategories(): Promise<Category[]> {
  return sanityQuery(`
    *[_type == 'category']
  `);
}
