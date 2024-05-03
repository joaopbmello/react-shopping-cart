import { useContext } from "react"
import Item from "./Item"
import { CartContext } from "./CartContext"

export default function ItemList() {
  const cartContext = useContext(CartContext)
  const {items, setItems} = cartContext

  function handleRemoveItem(index: number) {
    const newItems = [
      ...items.slice(0, index),
      ...items.slice(index + 1)
    ]
    setItems(newItems)
  }

  function handleQuantityChange(index: number, quantity: number) {
    const newItems = items.map((item, i) => (index === i) ? {...item, quantity } : item)
    setItems(newItems)
  }

  if (items.length === 0) {
    return <p>Não há produtos no carrinho</p>
  } else {
    return <>
      <ul className="itemList">
        {
          items.map((item, index) => {
            return <li key={index}>
              <Item
                key={item.title}
                {...item}
                onRemove={() => handleRemoveItem(index)}
                onQuantityChange={(quantity) => handleQuantityChange(index, quantity)} />
            </li>
          })
        }
      </ul>
    </>
  }
}