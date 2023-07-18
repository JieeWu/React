import React, { useState } from 'react'

export default function StarRating() {
  const [rating, setRating] = useState(0)
  const [rating2, setRating2] = useState(0)
  return (
    <>
      <h1>星星評分範例</h1>
      {Array(5)
        .fill(1)
        .map((v, i) => {
          const score = i + 1

          return (
            <button
              className={i < rating2 ? 'on' : 'off'}
              key={i}
              onMouseEnter={() => {
                if (rating == 0) {
                  setRating2(score)
                }
              }}
              onMouseLeave={() => {
                if (rating == 0) {
                  setRating2(0)
                }
              }}
              onClick={() => {
                if (rating == 0) {
                  setRating(score)
                } else {
                  setRating(0)
                }
              }}
            >
              &#9733;
            </button>
          )
        })}
      <h1>你選了{rating}分</h1>
      <style jsx>{`
        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
