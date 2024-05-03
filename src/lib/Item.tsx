import { useState } from "react"
import Quantity from "./Quantity"
import { AiOutlineDelete } from "react-icons/ai"

export interface ItemProps {
  title: string
  description: string
  price: number
  quantity: number
  image: string
  onQuantityChange?: (newQuantity: number) => void
  onRemove?: () => void
}

export default function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState(props.quantity)

  function updateQuantity(quantity: number) {
    setQuantity(quantity)
    props.onQuantityChange?.(quantity)
  }

  return <>
    <section className="item">
      <img src={props.image} alt={props.title} />
      <div className="info">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{(props.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <Quantity value={quantity} onIncrease={updateQuantity} onDecrease={updateQuantity} />
      <p className="totalPrice">{(props.price * quantity).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
      <button className="deleteButton" onClick={props.onRemove}>
        <AiOutlineDelete />
      </button>
    </section>
    <hr />
  </>
}