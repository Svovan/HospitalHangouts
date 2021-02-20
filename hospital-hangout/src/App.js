
import Login from './pages/Login'; 
import CreateAccount from './pages/CreateAccount'; 
import FindProfile from './pages/FindProfile'
import {
  BrowserRouter as Router,
  Route, 
  Link, 
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login}/> 
      <Route exact path="/create-account" component={CreateAccount}/> 
      <Route exact path="/find-profile" component={FindProfile}/> 
    </Router>
  ); 
}; 

export default App
