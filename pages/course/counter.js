import { useState } from 'react'
// libraryFunction();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function Counter() {
  // [獲得值得變數,設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0)
  // 不能直接更改count 只能透過setCount
  return (
    <>
      <input value={count}></input>
      <h1>{count}</h1>
      <FontAwesomeIcon icon={faMagnifyingGlass} />

      <button
        className="btn btn-primary"
        onClick={() => {
          count > 0 ? setCount(count + 1) : 1
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        -
      </button>
    </>
  )
}
