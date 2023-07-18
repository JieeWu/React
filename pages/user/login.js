import React from 'react'
// import '../styles/globals.css'
export default function Login() {
  const loginArray = []
  for (let i = 0; i < 10; i++) {
    loginArray.push(
      <div key={i}>
        登入介面
        <br />
        <label htmlFor="account">帳號</label>
        <input name="account" />
        <br />
        <label htmlFor="pwd">密碼</label>
        <input name="pwd" />
      </div>
    )
  }
  return <div>{loginArray}</div>
}
