import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  return (
    <div>
      <ul>
        {products.map((product, key) => {
          return (
            <li key={product.id}>
              {product.name} (<b>{product.count}</b>)
              <button
                onClick={() => {
                  const update = products.map((p) => {
                    if (p.id === product.id) {
                      return { ...p, count: p.count + 1 }
                    }
                    return p
                  })
                  setProducts(update)
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  const update = products.map((p) => {
                    if (p.id === product.id) {
                      return { ...p, count: p.count - 1 }
                    }
                    return p
                  })
                  setProducts(update)
                }}
              >
                –
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
