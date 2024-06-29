import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  // Estado INICIAL
  cart: [],

  // Actions
  addToCart: (newProduct) => {
    // ???
    
    // Aquí es cuando el producto es nuevo en el carrito de compras
    set(state => ({
      cart: [...state.cart, { ...newProduct, quantity: 1 }]
    }))
  },
  removeFromCart: (id) => {
    set(state => {
      const newCart = state.cart.filter(product => product.id !== id)

      return { cart: newCart }
    })
  },
  cleanCart: () => {
    set(
      () => ({ cart: [] })
    )
  }
}))