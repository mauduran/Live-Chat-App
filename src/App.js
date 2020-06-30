import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login'
import UserSearch from './containers/UserSearch/UserSearch';

function App() {
  const [isLogged, setisLogged] = useState(false);

  return (
    <div className="App">
      <Router >
        <Navigation isLogged={isLogged} setisLogged={setisLogged} />
        <div id="content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/search/:searchQuery" render={() => <UserSearch />} />
          </Switch>
        </div>
      </Router>
      <div style={{ color: "#aaa", height: "3%", width: "100%", backgroundColor: "#383838", textAlign: "center" }}>
        Created by Mauricio Durán & Juan Pablo Ramos
      </div>
    </div>
  );
}

export default App;