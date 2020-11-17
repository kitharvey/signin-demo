import './App.css';
import './App.scss';
import SignIn from './Components/SignIn';
import ForgotPassWord from './Components/ForgotPassWord';
import SignUp from './Components/SignUp';
import {  
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/password-reset">
            <ForgotPassWord/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/">
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
