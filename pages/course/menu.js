// import React, { useState } from 'react'

// function Menu() {
//   const [isItemActive, setItemActive] = useState({
//     home: false,
//     home2: false,
//     home3: false,
//   })
//   const handleMouseEnter = (menuitem) => {
//     setItemActive({ ...isItemActive, [menuitem]: true })
//   }
//   const handleMouseLeave = (menuitem) => {
//     setItemActive({ ...isItemActive, [menuitem]: false })
//   }
//   return (
//     <>
//       <ul>
//         <li
//           className={isItemActive.home ? 'active' : ''}
//           onMouseEnter={() => handleMouseEnter('home')}
//           onMouseLeave={() => handleMouseLeave('home')}
//         >
//           <a>首頁</a>
//         </li>
//         <li
//           className={isItemActive.home2 ? 'active' : ''}
//           onMouseEnter={() => handleMouseEnter('home2')}
//           onMouseLeave={() => handleMouseLeave('home2')}
//         >
//           <a>關於我們</a>
//         </li>
//         <li
//           className={isItemActive.home3 ? 'active' : ''}
//           onMouseEnter={() => handleMouseEnter('home3')}
//           onMouseLeave={() => handleMouseLeave('home3')}
//         >
//           <a>產品</a>
//         </li>
//       </ul>
//     </>
//   )
// }

// export default Menu
// TOP GPT
// BTN TEACHER
import { useState } from 'react'

export default function Menu() {
  const [itemText, setMenuText] = useState('首頁')
  const items = ['首頁', '關於我們', '產品']
  //   const MouseEnter = () => {
  //     setMenuText(true)
  //   }
  return (
    <>
      <ul>
        {items.map((v, i) => (
          <>
            <li className={itemText === v ? 'active' : ''} key={i}>
              <a
                onMouseEnter={() => {
                  setMenuText(v)
                }}
              >
                {v}
              </a>
            </li>
          </>
        ))}
      </ul>
      {/* <ul>
        <li className={itemText === '首頁' ? 'active' : ''}>
          <a
            href="#"
            onMouseDown={() => {
              setMenuText('首頁')
            }}
          >
            首頁
          </a>
        </li>
        <li className={itemText === '關於我們' ? 'active' : ''}>
          <a
            href="#"
            onMouseDown={() => {
              setMenuText('關於我們')
            }}
          >
            關於我們
          </a>
        </li>
        <li className={itemText === '產品' ? 'active' : ''}>
          <a
            href="#"
            onMouseEnter={() => {
              setMenuText('產品')
            }}
          >
            產品
          </a>
        </li>
      </ul> */}
    </>
  )
}
