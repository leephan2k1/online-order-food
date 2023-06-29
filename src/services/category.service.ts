import sanityQuery from '~/services/sanity.query';
import { Category } from '~/common/interfaces/category.interface';

export function getCategories(): Promise<Category[]> {
  return sanityQuery(`
    *[_type == 'category']
  `);
}
