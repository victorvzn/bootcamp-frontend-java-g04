import { create } from 'zustand'

export const useCounterStore = create(
  (set) => ({
    // Estado INICIAL (Pueden ser tipos nativos, o objetos, arreglos, etc)
    count: 98, 
    // Actions
    increment: () => {
      set(state => {
        // Lógica adicional
        return {
          count: state.count + 1
        }
      })
    },
    decrement: () => {
      set(state => ({ count: state.count - 1 }))
    },
    incrementByValue: (value) => {
      set(state => ({ count: state.count + value }))
    }
  })
)
