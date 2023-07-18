import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function InlineIf() {
  const [count, setCount] = useState(0)
  const keyDownAdd = (event) => {}

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => {
            count >= 0 ? setCount(count + 1) : 1
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => {
            count == 1 ? 1 : setCount(count - 1)
          }}
        />
        <input
          id="Input1"
          className=""
          onKeyDown={(event) => {
            if (event.keyCode >= 20 && event.keyCode <= 126) {
              count >= 0 ? setCount(count + 1) : 1
            }
            if (event.keyCode === 8) {
              count == 1 ? 1 : setCount(count - 1)
            }
          }}
        ></input>

        {/* <button
        className="btn btn-primary"
        onClick={() => {
          count >= 0 ? setCount(count + 1) : 1
        }}
      >
        +
      </button> */}
        {/* <button
        onClick={() => {
          count == 1 ? 1 : setCount(count - 1)
        }}
      >
        -
      </button> */}
        <hr />
        {count && <h2>訊息:目前計數為{count}</h2>}
      </div>
    </>
  )
}
