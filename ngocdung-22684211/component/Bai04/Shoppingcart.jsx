"use client"
import { useState } from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import "./Shoppingcart.css" // Import your CSS file here

export default function Shoppingcart() {
  // Initial products for demo purposes
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Áo thun trắng",
      price: 250000,
      image: "../image/hinh1.jpg",
      quantity: 1,
    },
    {
      id: 2,
      name: "Quần jean đen",
      price: 450000,
      image: "../image/hinh3.jpg",
      quantity: 2,
    },
    {
      id: 3,
      name: "Giày thể thao",
      price: 850000,
      image: "../image/hinh2.jpg",
      quantity: 1,
    },
  ])

  // Action: Add item to cart
  const addItem = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        // If item already exists, update quantity
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // Action: Remove item from cart
  const removeItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Action: Update quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)),
    )
  }

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  // Format price in VND
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Giỏ hàng của bạn</h2>

            {cartItems.length === 0 ? (
              <p className="text-muted-foreground">Giỏ hàng của bạn đang trống.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <div className="h-8 px-3 flex items-center justify-center border-y">{item.quantity}</div>
                        <button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        variant="ghost"
                        size="icon"
                        className="text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Tổng giỏ hàng</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Tổng số lượng:</span>
                <span className="font-medium">{totalQuantity} sản phẩm</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Tổng tiền:</span>
                <span className="font-bold text-lg">{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <button className="w-full mt-6" style={{backgroundColor:"green", width:"200px", height:"50px", color:"white"}}>Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  )
}
