import Cookie from 'js-cookie'

const Home = props => {
  const onLogout = () => {
    const {history} = props
    history.replace('/ebank/login')
    Cookie.remove('jwt_token')
  }

  return (
    <div>
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
      <h1>Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </div>
  )
}

export default Home
