
import Login from './pages/Login'; 
import CreateAccount from './pages/CreateAccount'; 
import FindProfile from './pages/FindProfile'
import EditAccount from './pages/EditAccount'; 
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
      <Route exact path="/edit-account" component={EditAccount}/> 
    </Router>
  ); 
}; 

export default App
