import React from 'react'

export default function JsxValue() {
  return (
    <>
      <h1>JSX語法中的各種值渲染呈現</h1>
      <h2>Number</h2>
      {123 - 88}
      {NaN}
      <h2>String</h2>
      abc
      {'def'}
      {`price = ${100 - 5}`}
    </>
  )
}
