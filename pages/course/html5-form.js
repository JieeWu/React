/* eslint-disable react-hooks/rules-of-hooks */
// 2023/07/19
import React, { useState, useEffect } from 'react'

export default function html5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')
  const [password, setPassword] = useState('')
  //   show password(呈現密碼明文用,true代表要呈現)
  const [show, setShow] = useState(false)
  const foodOptions = ['牛肉麵', '三明治', '鐵板麵', '羊肉炒飯']
  const [food, setFood] = useState('') //上面的foodOptions中成員其一
  const cityOptions = ['台北市', '台中市', '高雄市']
  const [city, setCity] = useState('') //上面的cityOptions中成員其一
  const fruitOptions = ['西瓜', '芒果']
  const [fruits, setFruits] = useState([])

  const handleFruits = (e) => {}
  const [fruits2, setFruits2] = useState('西瓜', '芒果')
  const [fruits3, setFruits3] = useState([
    { id: 1, value: '西瓜', checked: true },
    { id: 2, value: '芒果', checked: true },
  ])
  // useEffect(console.log(fruits), [fruits])
  return (
    <>
      <h1>可控的表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input Text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textArea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section id="input-text-password">
        <h2>補充：文字與密碼輸入框切換(input text/password)</h2>
        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => {
              setShow(e.target.checked)
            }}
          />
          顯示密碼
        </label>
      </section>
      <section id="radio-group">
        <h2>選項按鈕群組(radio group)</h2>
        {foodOptions.map((v, i) => {
          return (
            <>
              <label key={i}>
                <input
                  type="radio"
                  value={v}
                  checked={v === food}
                  onChange={(e) => {
                    setFood(e.target.value)
                    console.log(food)
                  }}
                />
                {v}
              </label>
            </>
          )
        })}
      </section>
      <section id="select">
        <h2>下拉選單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.vlaue)
          }}
        >
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
      <section id="checkbox-group-1">
        <h2>核取方塊群組-1(checkbox gropu 1)</h2>

        {fruitOptions.map((v, i) => {
          return (
            <>
              <label>
                <input
                  type="checkbox"
                  value={v}
                  checked={fruits.includes(v)}
                  onChange={(e) => {
                    const targetValue = e.target.value
                    // 判斷是否在state陣列中
                    if (fruits.includes(targetValue)) {
                      const newFruits = fruits.filter(
                        (v2, i2) => v2 != targetValue
                      )
                      setFruits(newFruits)
                    } else {
                      setFruits([...fruits, targetValue])
                    }
                  }}
                />
                {v}
              </label>
            </>
          )
        })}
      </section>
    </>
  )
}
