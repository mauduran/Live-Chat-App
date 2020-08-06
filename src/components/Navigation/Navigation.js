import React, {useState} from 'react'
import { Input } from "reactstrap";
import { NavLink, withRouter } from "react-router-dom";

import Logo from '../../assets/img/small_talk.png'
import './Navigation.css';
import SettingsDropdown from './SettingsDropdown';

function Navigation({ isLogged, setisLogged, history, setuser }) {
    const [searchInput, setsearchInput] = useState("");


    const searchUsers = (e) =>{
        if(e.key === 'Enter' && searchInput){
            history.push(`/search/${searchInput}`);
            setsearchInput("");

        }
    }

    return (
        <nav id="navbar">
            <div id="navtitle" onClick={()=>setisLogged(isLogged => !isLogged)}>
                <img alt="logo" style={{ height: "30px" }} src={Logo} />
                <h1>Small Talk</h1>
            </div>
            {
                (isLogged) ? (
                    <>
                        <Input type="text" name="searchProfiles" id="searchProfiles" 
                            style={{ width: "40%" }} placeholder="Search Profile..." 
                            value={searchInput} onChange={e=> setsearchInput(e.target.value)}
                            onKeyPress={searchUsers}/>

                        <div className="nav-links-container">
                            <NavLink to="/messages" className="navLink">
                                <span onClick={()=>setuser({username: 'mau4duran'})}><i className="fas fa-comment-alt"></i></span>
                            </NavLink>

                            <SettingsDropdown setisLogged={setisLogged}/>
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
