import React, { useState, useRef, useEffect } from 'react'

export default function useRace() {
  const redRef = useRef(null)
  const yellowRef = useRef(null)
  const red = () => {
    window.scrollTo({
      top: yellowRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  const yellow = () => {
    window.scrollTo({
      top: redRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    const handleScroll = (event) => {
      const deltaY = event.deltaY
      const x = redRef.current.getBoundingClientRect()
      console.log(x.x)
      //   if (deltaY > 0) {
      //     window.scrollTo({
      //       top: window.scrollY + 970,
      //       behavior: 'smooth',
      //     })
      //   } else if (deltaY < 0) {
      //     window.scrollTo({
      //       top: window.scrollY - 970,
      //       behavior: 'smooth',
      //     })
      //   }
    }
    window.addEventListener('wheel', handleScroll)
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])
  return (
    <>
      <div className="App">
        <div style={{ height: '970px', background: 'red' }} ref={redRef}>
          <button onClick={red}>go yellow</button>
        </div>

        <div style={{ height: '970px', background: 'yellow' }} ref={yellowRef}>
          <button onClick={yellow}>go red</button>
        </div>
        <div style={{ height: '970px', background: 'orange' }}>
          <button onClick={yellow}>go red</button>
        </div>
        <div style={{ height: '970px', background: 'green' }}>
          <button onClick={yellow}>go red</button>
        </div>
        <div style={{ height: '970px', background: 'blue' }}>
          <button onClick={yellow}>go red</button>
        </div>
        <div style={{ height: '970px', background: 'black' }}>
          <button onClick={yellow}>go red</button>
        </div>
      </div>
    </>
  )
}
