import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import register from './components/Register/register'
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [isLogged, setisLogged] = useState(false);

  if(1>2) setisLogged(true);
  return (
    <div className="App">
      <Router >
        <Navigation isLogged={isLogged} setisLogged={setisLogged}/>
        <Switch>
          <Route exact path="/" render={register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
