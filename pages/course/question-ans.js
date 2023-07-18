import React, { useState } from 'react'

export default function QuestionAns() {
  const q = ['q1', 'q2', 'q3', 'q4', 'q5']
  const a = ['a1', 'a2', 'a3', 'a4', 'a5']
  const [iV, sIV] = useState('')
  const [answers, setAnswers] = useState([])

  const hIC = (event) => {
    sIV(event.target.value)
  }

  const hKD = (event) => {
    if (event.key === 'Enter') {
      const index = q.findIndex((q) => q === iV)
      if (index !== -1) {
        const newAnswer = a[index]
        setAnswers((prevAnswers) => [...prevAnswers, newAnswer])
      }
      sIV('')
    }
  }

  return (
    <>
      <input name="question" value={iV} onChange={hIC} onKeyDown={hKD} />
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </>
  )
}
