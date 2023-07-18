import React, { useState, useEffect } from 'react'

export default function Test() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(10)
  }, [])
  //   setCount(10)
  return (
    // <ul>
    //   {count.map((v, i) => (
    //     <li key={i}>{v}</li>
    //   ))}
    // </ul>
    <li>{count}</li>
  )
}
