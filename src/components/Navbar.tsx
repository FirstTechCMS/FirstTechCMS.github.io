import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.less'

const Navbar = () => {
    return <header>
        <div className="logo">
            <Link to="/" className="btn-link">CRAB Robotics Team</Link>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/notebook">Notebook</Link></li>
                <li><Link to="/notebook/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;