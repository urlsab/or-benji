import React from 'react';
import './Navbar.css';

// don't delete Router !!!
import {BrowserRouter as Router,NavLink} from "react-router-dom";
    
const Navbar = () => {
    return(
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/contact"><b>צור קשר</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/types"><b>סוגי טיפול</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/method"><b>תהליך הטיפול</b></NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact><b>ראשי</b></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;