import '../assets/bootstrap.min.css';
import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="col-md-12">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ToDoList">To Do List Maker</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
