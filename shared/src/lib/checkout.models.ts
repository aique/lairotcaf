export interface CheckoutOrderProductComponent {
  id: number,
  name: string
  option: {
    id: number,
    name: string,
    price: number
  }
}

export interface CheckoutOrderProduct {
  product: string,
  components: CheckoutOrderProductComponent[]
}

export interface CheckoutUserData {
  name: string
}

export interface CheckoutOrder {
  userData: CheckoutUserData
  productOrder: CheckoutOrderProduct
}
