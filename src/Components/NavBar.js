import React from 'react';
import { Link } from "react-router-dom";
import Codes from './Codes';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-light" key="home" to="/">NewsMonkey</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-light" key="general" to="/general">General</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="business" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="entertainment" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="sports" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="health" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="science" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link text-light" key="technology" to="/technology">Technology</Link></li>
                    </ul>

                </div>
                <div className="mx-5">
                    <Codes />
                </div>
            </div>
        </nav>
    )
}
export default NavBar