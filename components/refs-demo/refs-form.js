import { useRef } from 'react'

export default function refsForm() {
  // 1.宣告ref給要使用的不可控表單元件
  // inputRef = {cureent:null}
  const inputRef = useRef(null)
  return (
    <>
      <h1>refsForm</h1>
      {/* 2. 在要使用的表單原件上加入ref */}

      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          // 3.使用時，用inputRef.current可以得到表單元件的實體物件(參考值)
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
