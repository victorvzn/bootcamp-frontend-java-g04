import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  // Estado INICIAL
  cart: [],

  // Actions
  addToCart: (newProduct) => {
  },
  removeFromCart: (id) => {
  },
  cleanCart: () => {
  }
}))