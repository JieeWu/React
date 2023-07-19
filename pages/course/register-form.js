/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

export default function registerForm() {
  // 注意 狀態是物件時的初始值
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })
  //   記錄錯誤訊息用
  // 一開始的錯誤續席物件要獨立出定義
  // 假定使用者沒次提交時，所有的錯誤訊息都是清空的
  //
  const originErrors = {
    fullname: '',
    email: '',
    password: '',
    password2: '',
  }
  const [errors, setErrors] = useState(originErrors)
  //   所有表單欄位共用的事件處理函式
  const handleFieldChange = (e) => {
    // {[e.target.name]}:e.target.name
    // 計算得來的屬性名稱(Computed property names)

    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // 對各個欄位檢查
    // formDate範例
    // const formData = new FormData(e.target)
    // if (!formData.get('fullname')) {
    //   alert('請填寫姓名')
    // }
    console.log(errors)

    let hasErrors = false
    const newErrors = { ...originErrors }
    if (!user.fullname) {
      newErrors.fullname = '請填寫姓名'
      hasErrors = true
    }
    if (!user.email) {
      newErrors.email = '請填寫Email'

      hasErrors = true
    }
    if (!user.password) {
      newErrors.password = '請填寫password'
      hasErrors = true
    }
    if (!user.password2) {
      newErrors.password = '請填寫password2'
      hasErrors = true
    }
    // 如果中途有檢查出錯，跳出此送出處理函式
    if (hasErrors) {
      setErrors(newErrors)
      console.log(newErrors)
      return
    }
    // 下面是通握所有檢查，要送至伺服器
  }
  return (
    <>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 10px;
          }
        `}
      </style>
      <h1>註冊表單輸入與驗證</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            姓名:{' '}
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.fullname}</div>
        <div>
          <label>
            Email:{' '}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.email}</div>
        <div>
          <label>
            密碼:{' '}
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.password}</div>

        <div>
          <label>
            確認密碼:{' '}
            <input
              type="password2"
              name="password2"
              value={user.password2}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.password2}</div>
        <div>
          <button>提交</button>
        </div>
      </form>
    </>
  )
}
