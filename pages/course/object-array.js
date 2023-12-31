import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          //   1. uuid/nanoid函示庫來產生
          const newId1 = self.crypto.randomUUID()
          //   console.log(newId1)
          //   2. 利用時間日期物件轉為毫秒整數
          const newId2 = +new Date() //或 Number(newDate()) 這裡的+號 代表強制轉型
          //   console.log(newId2)
          // 3.一般的隨機數字串
          // 4.仿照資料庫遞增id的作法(id需要有規則和都是數字才可以)
          const ids = data.map((v) => v.id)
          const newId3 = Math.min(...ids) - 1
          const newObj = { id: newId3, text: 'xxx' }
          // 1. 從目前的狀態拷貝(深拷貝or所需階層次的拷貝)出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        4.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const ids = data.map((v) => v.id)
          const newId4 = Math.max(...ids) + 1
          const newObj = { id: newId4, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button onClick={() => {}}>
        列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v) => {
            return v.text.includes('a')
          })
          console.log(newData)
          //1 //2

          //3
          setData(newData)
        }}
      >
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 在陣列中刪除文字為B的物件 = 回傳一個新的狀態陣列中，沒有文字為B的物件
          const newData = data.filter((v) => {
            return v.text !== 'b'
          })
          setData(newData)
        }}
      >
        6.刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v) => {
            return v.id !== 4
          })
          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找id=2的索引維和
          const foundIndex = data.findIndex((v) => v.id === 2)
          if (foundIndex > -1) {
            const newObj = { id: 5, text: 'bbb' }
            const data2 = data.slice(0, 2)
            const data3 = data.slice(foundIndex + 1)
            const newData = [...data2, newObj, ...data3]
            setData(newData)
            // 如果有找到 回傳1 找不到回傳 -1
            // 分割陣列為兩個子陣列 array.slice(開始索引，結束索引) 注意不包含結束索引的值
            // 分割陣列為兩個子陣列 加入要插入的物件後 合併陣列
          }
        }}
      >
        在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          //   const deepCloneDate = JSON.parse(JSON.stringify(data))
          //   const foundIndex = deepCloneDate.findIndex((v) => v.id === 5)
          //   if (foundIndex !== -1) {
          //     deepCloneDate[foundIndex].text = 'bbcscasb'
          //     setData(deepCloneDate)
          //   }
          //   用MAP方法
          const newData = data.map((v, i) => {
            if (v.id === 5) return { ...v, text: 'ccc' }
            else return { ...v }
          })
          setData(newData)
        }}
      >
        8.取代id為3的文字為cccc
      </button>
    </>
  )
}
