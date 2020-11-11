import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar() {
    return (
        <div>
            <Nav pills>
                <NavItem>
                    <NavLink href="#" active>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Register</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Navbar;
