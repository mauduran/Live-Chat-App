import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login'
import UserSearch from './containers/UserSearch/UserSearch';
import MyProfile from './containers/MyProfile/MyProfile';
import Profile from './containers/Profile/Profile';
import Messages from './containers/Messages/Messages';
import io from 'socket.io-client';

const initialUser = {
  username: 'jprr44'
}


function App() {
  const [isLogged, setisLogged] = useState(false);
  const [user, setuser] = useState(initialUser);
  const [socket, setsocket] = useState();
  const [incomingMessage, setincomingMessage] = useState(false);
  useEffect(() => {
    setsocket(io('localhost:3001'));
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('incomingMessage', (msg) => {
        setincomingMessage(true);
      })
      return () => {
        socket.disconnect();
      }
    }

  }, [socket]);

  useEffect(() => {
    if (user && socket) socket.emit('login', user);
  }, [user, socket])

  return (
    <div className="App">
      <Router >
        <Navigation isLogged={isLogged} setisLogged={setisLogged} setuser={setuser} />
        <div id="content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/myprofile" render={() => <MyProfile />} />
            <Route path="/profile/:id" render={() => <Profile />} />
            <Route path="/search/:searchQuery" render={() => <UserSearch />} />
            <Route path="/messages" render={() => <Messages
              user={user}
              socket={socket}
              setincomingMessage={setincomingMessage}
              incomingMessage={incomingMessage} />} />
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