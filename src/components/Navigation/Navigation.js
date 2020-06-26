import React from 'react'
import { Input } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";

import Logo from '../../assets/img/small_talk.png'
import './Navigation.css';
import SettingsButton from './SettingsButton';

function Navigation({ isLogged, setisLogged }) {

    return (
        <nav id="navbar">
            <div id="navtitle" onClick={()=>setisLogged(isLogged => !isLogged)}>
                <img alt="logo" style={{ height: "30px" }} src={Logo} />
                <h1>Small Talk</h1>
            </div>
            {
                (isLogged) ? (
                    <>
                        <Input type="text" name="searchProfiles" id="searchProfiles" style={{ width: "40%" }} placeholder="Search Profile..." />

                        <div className="nav-links-container">
                            <NavLink to="/messages" className="navLink" activeStyle={{ color: '#696969' }}>
                                <span><i className="fas fa-comment-alt"></i></span>
                            </NavLink>

                            <SettingsButton setisLogged={setisLogged}/>
                        </div>
                    </>
                ) :
                    <div className="nav-links-container">
                        <NavLink to="/login" className="navLink login">
                            <span>Log In</span>
                        </NavLink>
                    </div>
            }

        </nav>
    )
}

export default withRouter(Navigation)
