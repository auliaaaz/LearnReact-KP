import '../assets/bootstrap.min.css';
import React from 'react';
import { Link } from "react-router-dom";
import '../../src/App.css'

const NavBar = () => {
    return (
        <div className="container navbar">
            <div className="col-md-12">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
