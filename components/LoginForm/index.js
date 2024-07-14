import {useState} from 'react'

import Cookies from 'js-cookie'

import './index.css'

const LoginForm = props => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showError, setShowError] = useState(false)

  const onChangeName = event => setName(event.target.value)

  const onChangePassword = event => setPassword(event.target.value)

  const onSubmitSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/home')
  }

  const onSubmitFailure = ErrorMessage => {
    setErrorMsg(ErrorMessage)
    setShowError(true)
  }

  const getUserDetails = async event => {
    event.preventDefault()
    const userDetails = {user_id: name, pin: password}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }

  return (
    <div className="main-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
        alt="website login"
      />
      <div className="input-con">
        <form className="form-con" onSubmit={getUserDetails}>
          <h1>Welcome Back</h1>
          <label htmlFor="name">User Id</label>
          <input type="text" id="name" value={name} onChange={onChangeName} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
          <button type="submit">Submit</button>
          {showError ? <p>{errorMsg}</p> : null}
        </form>
      </div>
    </div>
  )
}

export default LoginForm

// import {useState} from 'react'
// import Cookies from 'js-cookie'
// import './index.css'

// const LoginForm = props => {
//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const [errorMsg, setErrorMsg] = useState('')
//   const [showError, setShowError] = useState(false)

//   const onChangeName = event => setName(event.target.value)

//   const onChangePassword = event => setPassword(event.target.value)

//   const onSubmitSuccess = jwtToken => {
//     const {history} = props
//     Cookies.set('jwt_token', jwtToken, {expires: 1})
//     history.replace('/home')
//   }

//   const onSubmitFailure = errorMessage => {
//     setErrorMsg(errorMessage)
//     setShowError(true)
//   }

//   const getUserDetails = async event => {
//     event.preventDefault()
//     const userDetails = {name, password}
//     const url = '' // Provide the correct URL here
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok) {
//       onSubmitSuccess(data.jwt_token)
//     } else {
//       onSubmitFailure(data.error_msg)
//     }
//   }

//   return (
//     <div className="main-con">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
//         alt="website login"
//       />
//       <div className="input-con">
//         <form className="form-con" onSubmit={getUserDetails}>
//           <h1>Welcome Back</h1>
//           <label htmlFor="name">User Id</label>
//           <input type="text" id="name" value={name} onChange={onChangeName} />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={onChangePassword}
//           />
//           <button type="submit">Submit</button>
//           {showError && <p>{errorMsg}</p>}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm
// import {useState} from 'react'
// import Cookies from 'js-cookie'
// import './index.css'

// const LoginForm = props => {
//   const [name, setName] = useState('')
//   const [password, setPassword] = useState('')
//   const [errorMsg, setErrorMsg] = useState('')
//   const [showError, setShowError] = useState(false)

//   const onChangeName = event => setName(event.target.value)

//   const onChangePassword = event => setPassword(event.target.value)

//   const onSubmitSuccess = jwtToken => {
//     const {history} = props
//     Cookies.set('jwt_token', jwtToken, {expires: 1})
//     history.replace('/home')
//   }

//   const onSubmitFailure = errorMessage => {
//     setErrorMsg(errorMessage)
//     setShowError(true)
//   }

//   const getUserDetails = async event => {
//     event.preventDefault()
//     const userDetails = {name, password}
//     const url = 'https://apis.ccbp.in/ebank/login' // Provide the correct URL here
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok) {
//       onSubmitSuccess(data.jwt_token)
//     } else {
//       onSubmitFailure(data.error_msg)
//     }
//   }

//   return (
//     <div className="main-con">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
//         alt="website login"
//       />
//       <div className="input-con">
//         <form className="form-con" onSubmit={getUserDetails}>
//           <h1>Welcome Back</h1>
//           <label htmlFor="name">User Id</label>
//           <input type="text" id="name" value={name} onChange={onChangeName} />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={onChangePassword}
//           />
//           <button type="submit">Submit</button>
//           {showError && <p>{errorMsg}</p>}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginForm
