import { createContext } from "react"
import { ItemProps } from "./Item"

interface CartContext {
  items: ItemProps[]
  setItems: (items: ItemProps[]) => void
}

export const CartContext = createContext<CartContext>({
  items: [],
  setItems: (_: ItemProps[]) => {}
})