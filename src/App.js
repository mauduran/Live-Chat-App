import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login'
import UserSearch from './containers/UserSearch/UserSearch';
import MyProfile from './containers/MyProfile/MyProfile';
import Profile from './containers/Profile/Profile';
import Messages from './containers/Messages/Messages';

const initialUser = {
  username: 'mau4duran'
}

function App() {
  const [isLogged, setisLogged] = useState(false);
  const [user, setuser] = useState(initialUser);
  return (
    <div className="App">
      <Router >
        <Navigation isLogged={isLogged} setisLogged={setisLogged} setuser={setuser}/>
        <div id="content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/login" render={()=><Login/>} />
            <Route path="/myprofile" render={()=><MyProfile/>} />
            <Route path="/profile/:id" render={()=><Profile/>} />
            <Route path="/search/:searchQuery" render={() => <UserSearch />} />
            <Route path="/messages" render={() => <Messages user={user}/>} />
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