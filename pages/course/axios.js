import React, { useState } from 'react'
import axios from 'axios'
export default function Axios() {
  const [Data3, setData3] = useState([])
  const GET = async () => {
    try {
      const Data = await axios.get('http://localhost:3002/try-db')
      console.log(Data)
      setData3(Data.data.rows)
    } catch (error) {
      alert('GET Error')
    }
  }

  {
    return (
      <>
        <div className="get">
          <button onClick={GET}>GET</button>
        </div>
        <div>
          {Data3.map((v, i) => {
            return (
              <>
                <li key={i}>
                  {v.sid}
                  {v.name}
                  {v.email}
                  {v.mobile}
                  {v.birthday}
                  {v.address}
                  {v.created_at}
                </li>
              </>
            )
          })}
        </div>
      </>
    )
  }
}
