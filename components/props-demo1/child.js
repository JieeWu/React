import React from 'react'

// export default function Child(asd) {
export default function Child({ name, price, text }) {
  return (
    <>
      <h1>Child</h1>
      {/* <p>姓名: {asd.name}</p>
      <p>姓名: {asd.price}</p>
      <p>姓名: {asd.text}</p> */}
      <p>姓名: {name}</p>
      <p>姓名: {price}</p>
      <p>姓名: {text}</p>
    </>
  )
}
