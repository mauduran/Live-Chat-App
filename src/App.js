import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Login from './components/Home/Login/Login'

function App() {
  const [isLogged, setisLogged] = useState(false);

  return (
    <div className="App">
      <Router >
        <Navigation isLogged={isLogged} setisLogged={setisLogged} />
        <div id="content">
          <Switch>
            <Route exact path="/" render={()=><Login/>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
