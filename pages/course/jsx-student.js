import React, { useEffect, useContext, useState } from 'react'
import data2 from '@/data/student.json'
export default function JsxStudent() {
  const [jsonData, setJsonData] = useState(null)
  useEffect(() => {
    setJsonData(data2)
    // fetch(data2) //url
    //   .then((res) => res.json())
    //   .then((data2) => setJsonData(data2))
    //   .catch((error) => console.log(error))
  }, [])
  if (!jsonData) {
    return <div>Loading...</div>
  }
  // 陣列
  const data = [
    { id: 107001, name: '張佳蓉', age: 21 },
    { id: 107002, name: '楊智云', age: 20 },
    { id: 107003, name: '陳語合', age: 19 },
    { id: 107004, name: '林世名', age: 22 },
    { id: 107005, name: '張建彰', age: 21 },
    { id: 107006, name: '黃國瑄', age: 20 },
    { id: 107007, name: '徐昶意', age: 18 },
    { id: 107008, name: '賴靖瑞', age: 19 },
    { id: 107009, name: '宋紀仲', age: 22 },
  ]
  return (
    <>
      <h1>JSX中使用陣列MAP方法範例</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={i}>
              {v.id}- {v.name} -{v.age}
            </li>
          )
        })}
      </ul>
      <div>
        <h1>JSX中使用FETCH</h1>
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      </div>
    </>
  )
}
