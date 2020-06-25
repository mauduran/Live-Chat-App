import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './styles/App.css';


/// Comment

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path="/" render={() => { return <h1> Home</h1> }} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
