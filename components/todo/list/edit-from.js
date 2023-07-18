import { useState, useEffect } from 'react'

export default function EditForm({ text, id, handleUpdateText }) {
  // 用傳入的text值作為初始化值
  const [inputText, setInputText] = useState(text)
  useEffect(() => {
    if (text) {
      setInputText(text)
    }
  }, [text])
  return (
    <li>
      <span>{text}</span>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          handleUpdateText(id, inputText)
        }}
      >
        儲存
      </button>
    </li>
  )
}
