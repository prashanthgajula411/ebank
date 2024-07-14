import {BrowserRouter, Route} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <div>
    <BrowserRouter>
      <Route exact path="/ebank/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
    </BrowserRouter>
  </div>
)

export default App
