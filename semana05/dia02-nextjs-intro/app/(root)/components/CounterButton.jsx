"use client"

import { useState } from "react"

const CounterButton = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div className="py-6">
      <button
        onClick={() => setCounter(counter + 1)}
        className="py-2 px-4 bg-orange-400 rounded-lg"
      >
        Counter {counter}
      </button>
    </div>
  )
}

export default CounterButton