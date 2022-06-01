import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";

import Games from './games';
import Game from './game';
import AddGame from "./addgame";
import Variables from "../components/Globals/Variables";
import Login from "./login";

const Webpages = () => {
    console.log("Token:" + Variables.Token);
    if(Variables.Token !== ""){
        return (
            <Router>
                <Routes>
                    <Route exact path="/games" element={<Games/>} />
                    <Route path="/game/:id" element={<Game/>}/>
                    <Route path="/addGame" element={<AddGame/>}/>
                </Routes>
            </Router>
        );
    } else {
        return (
            <Router>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/sign-in'}>
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Routes>
                                <Route exact path="/" element={<Login />} />
                                <Route path="/sign-in" element={<Login />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
};
export default Webpages;