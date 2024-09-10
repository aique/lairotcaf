export interface CheckoutComponent {
  id: number,
  name: string
}

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
  price: number,
  components: CheckoutOrderProductComponent[]
}

export interface CheckoutUserData {
  name: string,
  surname: string,
  email: string,
  phone: string
}

export interface CheckoutOrder {
  userData: CheckoutUserData
  productOrder: CheckoutOrderProduct | null
}

export interface CheckoutOrderBodyComponent {
  id: number,
  option: number
}

export interface CheckoutOrderBody {
  userData: CheckoutUserData,
  order: {
      product: string,
      components: CheckoutOrderBodyComponent[]
  }
}
