import React from 'react'
import Item from './item'
import EditForm from './edit-from'
export default function List({
  todos,
  handleRemove,
  handleToggleCompleted,
  handleToggleEditing,
  handleUpdateText,
}) {
  return (
    <>
      <ul>
        {todos.map((v) => {
          const { id, completed, text, editing } = v
          console.log(v)
          return editing ? (
            <EditForm
              key={id}
              id={id}
              text={text}
              handleUpdateText={handleUpdateText}
            />
          ) : (
            <Item
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleToggleCompleted={handleToggleCompleted}
              handleRemove={handleRemove}
              handleToggleEditing={handleToggleEditing}
            />
          )
        })}
      </ul>
    </>
  )
}
