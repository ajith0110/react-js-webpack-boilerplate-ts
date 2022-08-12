import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  return (
    <button
      onClick={() => {
        setCount((c) => c + 5)
      }}
    >
      Counter - {count}
    </button>
  )
}
