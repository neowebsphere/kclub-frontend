/**
 * Three-level partner taxonomy: block -> category -> subcategory.
 *
 * Labels are NOT stored here. Each node carries a stable `id` that doubles as
 * the translation key, so the same tree renders in every locale:
 *
 *   messages/<locale>.json
 *   └── Categories
 *       └── business.label                       -> block label
 *           └── legal.label                      -> category label
 *               └── corporate.label              -> subcategory label
 *
 * Read any node with `useTranslations('Categories')` and `t(`${path}.label`)`.
 *
 * Replace the placeholder tree below with the real list; the shape is what
 * matters. Ids must stay URL-safe: they appear in filter query strings.
 */

export type Subcategory = {
  id: string
  /** Full dotted path, e.g. `business.legal.corporate`. */
  path: string
}

export type Category = {
  id: string
  path: string
  subcategories: Subcategory[]
}

export type CategoryBlock = {
  id: string
  path: string
  /** Iconify name used by the catalog filter and homepage tiles. */
  icon: string
  categories: Category[]
}

/** Placeholder tree - structure is final, content is not. */
export const categoryBlocks: CategoryBlock[] = [
  {
    id: 'business',
    path: 'business',
    icon: 'briefcase',
    categories: [
      { id: 'legal', path: 'business.legal', subcategories: [
        { id: 'corporate', path: 'business.legal.corporate' },
        { id: 'contracts', path: 'business.legal.contracts' },
      ] },
      { id: 'finance', path: 'business.finance', subcategories: [
        { id: 'accounting', path: 'business.finance.accounting' },
        { id: 'audit', path: 'business.finance.audit' },
      ] },
    ],
  },
  {
    id: 'lifestyle',
    path: 'lifestyle',
    icon: 'sparkles',
    categories: [
      { id: 'dining', path: 'lifestyle.dining', subcategories: [
        { id: 'restaurants', path: 'lifestyle.dining.restaurants' },
        { id: 'cafes', path: 'lifestyle.dining.cafes' },
      ] },
      { id: 'wellness', path: 'lifestyle.wellness', subcategories: [
        { id: 'fitness', path: 'lifestyle.wellness.fitness' },
        { id: 'spa', path: 'lifestyle.wellness.spa' },
      ] },
    ],
  },
]

/** Flat lookup of every node by its dotted path. */
export const categoryIndex: Record<string, CategoryBlock | Category | Subcategory> = (() => {
  const index: Record<string, CategoryBlock | Category | Subcategory> = {}
  for (const block of categoryBlocks) {
    index[block.path] = block
    for (const category of block.categories) {
      index[category.path] = category
      for (const sub of category.subcategories) {
        index[sub.path] = sub
      }
    }
  }
  return index
})()

/** `business.legal.corporate` -> ['business', 'business.legal', 'business.legal.corporate'] */
export const breadcrumbPaths = (path: string): string[] =>
  path.split('.').map((_, i, parts) => parts.slice(0, i + 1).join('.'))
