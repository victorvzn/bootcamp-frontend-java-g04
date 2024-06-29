import { useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { useCartStore } from "../../store/cart";

const Header = () => {
  const [open, setOpen] = useState(false)

  const { cart, removeFromCart, cleanCart } = useCartStore()

  const showCart = open ? 'translate-none' : 'translate-x-full'

  const toggleSidebar = () => setOpen(!open)

  // TODO: Mostrar el total de productos sumando el campo quantity
  const cartCount = 0

  const classSidebar = 'fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-slate-100 w-80 text-black'

  return (
    <div className="bg-lime-600 text-white py-4 px-6 w-full fixed top-0">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-bold">Shopping Cart</h1>
      
        <button className="text-3xl relative" onClick={toggleSidebar}>
          <TbShoppingBag />

          {cartCount > 0 && 
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -right-3 ">                
              {cartCount}
            </div>
          }
        </button>

        <div
          className={`${classSidebar} ${showCart}`}
        >
          <div className="flex justify-between">
            <h5 className="flex text-2xl font-semibold text-gray-500">
              Cart
            </h5>

            <button onClick={toggleSidebar}>❌</button>
          </div>
          
          {cartCount > 0 && 
            <div className="py-3">
              <button
                className="w-full text-slate-900 bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={cleanCart}
              >
                Clean Cart
              </button>
            </div>
          }

          <div className="flex flex-col gap-1 m-4">
            {cart.map(({ id, title, price, quantity }) => {
              return (
                <button
                  key={id}
                  className='text-slate-900 bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                  onClick={() => removeFromCart(id)}
                >
                  {title} - ${price} (Qty: {quantity})
                </button>
              )
            })}
          </div>

          {/* {JSON.stringify(cart, null, 2)} */}
        </div>
      </div>

    </div>
  )
}

export default Header