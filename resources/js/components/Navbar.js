import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <Nav pills>
                <NavItem>
                    <Link className="nav-link" to="/">Welcome</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/home">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/login">Login</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/register">Register</Link>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
