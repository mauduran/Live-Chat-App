import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

export default function SettingsDropdown({ setisLogged }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    return (
        <div >
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <span className="navLink"><i className="fas fa-cog"></i></span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu">
                    <Link to="/myprofile"><DropdownItem><i className="fas fa-user-circle fa-fw"></i>My Profile</DropdownItem></Link>
                    <hr />
                    <DropdownItem><i className="fas fa-lock fa-fw"></i> Change Password</DropdownItem>
                    <hr />
                    <DropdownItem onClick={()=>{}}>
                        <i className="fas fa-moon fa-fw"></i> 
                        Dark Mode
                    </DropdownItem>
                    <hr />
                    <DropdownItem onClick={() => setisLogged(false)}><i className="fas fa-sign-out-alt fa-fw"></i> Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );

}
