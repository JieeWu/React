// import React, { useEffect, useState } from 'react'
import products2 from '@/data/products.json'

export default function ProductTable() {
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
          {products2.products.map((v, i) => (
            <tr key={i}>
              <td>{v.id}</td>
              <td>
                <img src={v.picture} />
              </td>
              <td>{v.name}</td>
              <td>{v.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>
        {`
          table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          td,
          th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          tr:hover {
            background-color: #ddd;
          }

          th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04aa6d;
            color: white;
          }
        `}
      </style>
    </>
  )
}
