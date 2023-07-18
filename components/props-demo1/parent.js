import React from 'react'
import Child from './child'
export default function Parent() {
  return (
    <>
      <div>我好爛</div>
      {/*  */}
      <Child text="今天開始放棄REACT" name="Jiee" price={100} />
      <Child text="今天千萬不要下雨" name="Z" price={9} />
    </>
  )
}
