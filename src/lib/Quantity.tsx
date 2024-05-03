import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface QuantityProps {
  value: number
  min?: number
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
}

export default function Quantity(props: QuantityProps) {
  const { value , min = 1, max = 10, onIncrease, onDecrease } = props

  function increase() {
    if (value < max) {
      onIncrease?.(value + 1)
    }
  }

  function decrease() {
    if (value > min) {
      onDecrease?.(value - 1)
    }
  }

  return <>
    <span className="quantity">
      {value}
      <span>
        <button onClick={increase}>
          <AiFillCaretUp />
        </button>
        <button onClick={decrease}>
          <AiFillCaretDown />
        </button>
      </span>
    </span>
  </>
}