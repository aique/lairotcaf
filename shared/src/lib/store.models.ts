export interface StoreProduct {
  id: number,
  name: string,
  slug: string
}

export interface StoreProducts {
  products: StoreProduct[]
}
