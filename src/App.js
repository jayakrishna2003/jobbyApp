import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './Component/Login'
import Home from './Component/Home'
import Jobs from './Component/Jobs'
import JobItemDetails from './Component/JobItemDetails'
import NotFound from './Component/NotFound'
import ProtectedRoute from './Component/ProtectedRoute'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
