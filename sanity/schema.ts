import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product.schema'
import { category } from './category.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
