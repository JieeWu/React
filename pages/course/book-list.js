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
  const [book, setBooks] = useState(initState)
  // console.log(book[0].isbn)
  const toggleFav = (isbn) => {
    const newBooks = book.map((v) => {
      if (v.isbn === isbn) {
        return { ...v, fav: !v.fav }
      } else return { ...v }
    })
    setBooks(newBooks)
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
          {book.map((v) => (
            <tr key={v.isbn}>
              <td>{v.isbn}</td>
              <td>{v.title}</td>
              <td>{v.author}</td>
              <td>
                <Image
                  src={v.fav ? bookmarkIcon : bookmarkIconFill}
                  alt=""
                  onClick={() => {
                    toggleFav(v.isbn)
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
