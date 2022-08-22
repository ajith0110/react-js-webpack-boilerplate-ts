import React, { FC, useState } from 'react'

interface ICounter {
  initialValue: number
}

const Counter: FC<ICounter> = ({ initialValue }) => {
  const [count, setCount] = useState<number>(initialValue)

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <p>Count - {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((count) => count * -1)}>
        minus value
      </button>
    </div>
  )
}

export default Counter
