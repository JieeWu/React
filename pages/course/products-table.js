import React, { useEffect, useState } from 'react'
import products2 from '@/data/products.json'

export default function ProductTable() {
  const [jsonData, setJsonData] = useState(null)
  useEffect(() => {
    // const parsedData = JSON.parse(products2)

    setJsonData(products2.products)
    console.log(products2.products)
  }, [])

  if (!jsonData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.image}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
