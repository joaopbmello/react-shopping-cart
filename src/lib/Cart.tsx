import { useState } from "react";
import ItemList from "./ItemList";
import { CartContext } from "./CartContext";

import './Cart.css'

const defaultItems = [
  {
    title: 'Pizza da mãe',
    description: 'Saborosa pizza caseira feita por sua mãe.',
    price: 79.90,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Churrasquinho',
    description: 'Delicioso espetinho à moda da (sua) casa.',
    price: 29.90,
    quantity: 3,
    image: 'https://www.cariucho.com.br/wp-content/uploads/2023/09/espetinho-que-nao-fica-seco-e-duro.jpg'
  },
  {
    title: 'Espaguete',
    description: 'Apetitoso macarrão. Basta seguir a receita.',
    price: 59.90,
    quantity: 2,
    image: 'https://cdn.urbano.com.br/uploads/ubn027-21b-segmentos-facebook-junho-site-v4-af-10-800.png'
  }
]

export default function Cart() {
  const [items, setItems] = useState(defaultItems)

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)

  return <>
    <CartContext.Provider value={{ items, setItems }}>
      <div className="header">
        <h1>Carrinho de compras</h1>
        <p>Você tem {totalQuantity} itens</p>
      </div>
      <hr />
      <ItemList />
    </CartContext.Provider>
  </>
}