import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import register from './components/Register/register'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          {/* <Route exact path="/" render={() => { return <h1> Home</h1> }} /> */}
          <Route exact path="/" render={register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
