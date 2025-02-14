// import Cookie from 'js-cookie'
// import {Redirect, Route} from 'react-router-dom'
// const ProtectedRoute = props => {
//   const token = Cookies.get('jwt_token')
//   if (Cookie === undefined) {
//     return <Redirect to="/" />
//   }
//   return <Route {...props} />
// }

import Cookie from 'js-cookie'

import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')
  if (token === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
