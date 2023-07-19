import { useState } from 'react'
import AddForm from './add-form'
// import Item from './list/item'
import List from './list/index'
import FilterBtn from './list/filter-btn'

export default function TodoIndex() {
  //   // 定義文字輸入用的狀態
  //   const [inputText, setInputText] = useState('')
  //   // 為了要修正中文輸入法的用Enter組字用的信號狀態
  //   const [isCompositing, setIsCompositing] = useState(false)

  // 定義待辨事項狀態，每個成員 todo = { id:number, text:string, completed:bool }
  // !!重要!! 資料一定要有id，因為key要用id才可以作新增、修改、刪除，這是react中map時需要的
  const [todos, setTodos] = useState([
    { id: 1, text: '買牛奶', completed: false, editing: false },
    { id: 2, text: '學react', completed: false, editing: false },
  ])
  // 建立new todo
  //   pure function
  const add = (todos, text) => {
    // 仿照資料庫遞增id的做法(id需要有規則和都是數字才可以)
    const ids = todos.map((v) => v.id)
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1
    // get array max-value , after +1
    // 用時間日期物件轉毫秒整數作為id
    // 用了時間物件不能使用純粹化
    const newTodo = {
      id: newId,
      text: text,
      completed: false,
      editing: false,
    }
    // recall new todos status
    return [newTodo, ...todos]
  }
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  // 如果有比對到v.id是id，作切換布林值的動作
  //   純粹化(purify) ，只處理狀態改變
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  //   全部變換狀態
  const allChange = (todos, event) => {
    console.log(todos)
    console.log(event)

    return todos.map((v) => {
      return { ...v, completed: event ? true : false }
    })
  }
  const handleAll = (e) => {
    setTodos(allChange(todos, e))
  }
  //   依照不同過濾狀態
  const filterByType = (todos, type) => {
    // 依照completed value來過濾
    if (type === '已完成') return todos.filter((v) => v.completed)
    if (type === '進行中') return todos.filter((v) => !v.completed)
    return todos
  }
  // 專門設計給拆分addform子元件用的處理函式
  const handleAdd = (inputText) => {
    setTodos(add(todos, inputText))
  }

  // 編輯
  const toggleEditing = (todos, id) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，把bool value 設為true
      if (v.id === id) return { ...v, editing: true }
      else return { ...v, editing: false }
    })
  }
  //   專門設計給拆分Item的子元件用的處理函示
  // HELLO WORLD
  const handleToggleEditing = (id) => {
    setTodos(toggleEditing(todos, id))
  }
  // 編輯完成儲存用

  const updateText = (todos, id, text) => {
    return todos.map((v) => {
      // 如果有比對到v.id是id，將text改為新的newText，把editing設為true(恢復狀態)
      if (v.id === id) return { ...v, text: text, editing: false }
      else return true
    })
  }
  //   專門設計給拆分Item子元件用的處理函示
  const handleUpdateText = (id, text) => {
    setTodos(updateText(todos, id, text))
  }
  //   專門設計給拆分Item子元件用的處理函示
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }
  //   專門設計給拆分Item子元件用的處理函示
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }
  // 呈現過濾用的狀態，只有三種類型 type="所有"|"進行中"|"已完成"
  const [type, setType] = useState('所有')
  return (
    <>
      <AddForm handleAdd={handleAdd} handleAll={handleAll} />

      <hr />
      <List
        //   保持住原本的(所有的todos)，呈現時是呈現過濾握的todos
        todos={filterByType(todos, type)}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
        handleToggleEditing={handleToggleEditing}
        handleUpdateText={handleUpdateText}
        // Item={Item}
      />
      <FilterBtn type={type} setType={setType} />
    </>
  )
}
