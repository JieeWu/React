import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  // 將導入的json資料，增加一個fav屬性，作為加入收藏判斷用
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })
  const [status, setStatus] = useState(initState)
  // 改進，純粹化(purify)改成純函示
  // 傳入state(狀態)+要改變的id)
  // 返回一個已經切換好fav的bool(true->false, false->true)的state(狀態)
  const toggleFav = (state, isbn) => {
    return state.map((v) => {
      // 如果目前的isbn與傳入的isbn相符合，切換fav的bool
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      //   不是的話，回傳原物件
      else return { ...v }
    })
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {status.map((v, i) => (
            <tr key={v.isbn}>
              <td>{v.isbn}</td>
              <td>{v.title}</td>
              <td>{v.author}</td>
              <td>
                <Image
                  src={v.fav ? bookmarkIconFill : bookmarkIcon}
                  alt=""
                  onClick={() => {
                    const newBooks = toggleFav(status, v.isbn)
                    setStatus(newBooks)
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default BookList
