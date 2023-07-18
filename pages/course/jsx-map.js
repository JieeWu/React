import React from 'react'

export default function Jsxmap() {
  const users = ['Jie', 'Z', 'H']
  // const displayUsers = users.map((v, i) => {
  //   return <li key={i}>{v}</li>
  // })
  return (
    <>
      <h1>JSX中使用陣列MAP方法範例</h1>
      {/* <ul>{displayUsers}</ul> */}
      {/* key值是必要的，不可重複 */}
      {/* 使用陣列索引(index)作為key實際為反樣式(anti-pattern) */}
      {/* 唯一能使用索引作為KEY的情況，只有靜態資料(應用程式過程完全不會變) */}
      {/* MAYBE會導致資料錯亂的狀態 */}
      {/* KEY值的選擇:
      1.資料來自資料庫，用資料庫的PK當KEY
      2.資料由應用中執行產生key要用的VALUE，使用UUID或NANOID含式庫來產生KEY值，(但不可以在渲染時產生，應在建立時產生KEY)
      3.自己寫的隨機數或日期物件轉整數
       */}
      {users.map((v, i) => {
        return <li key={i}>{v}</li>
      })}
    </>
  )
}
