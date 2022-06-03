import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Games from './games';
import Game from './game';
import AddGame from "./addGame";
import Login from "./login";
import NavBar from "../components/Navigation/navBar";
import EditGame from "./editGame";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";


const Webpages = () => {
    const [token, setToken] = useLocalStorage("token", null);
    const [role, setRole] = useLocalStorage("role", null);

    const sites = [
        {
            name: "Lista Gier",
            link: "/games",
            visible: true
        },
        {
            name: "Statystyki Gier",
            link: "/gamesStats",
            visible: false
        },
        {
            name: "Dodaj Gre",
            link: "/addGame",
            visible: false
        },
    ];


    if (token) {
        console.log("eo")
        switch (true) {
            case role.includes("ROLE_MANAGER"):
                console.log("eo manager")
                sites.map((site) => {
                    site.visible = true;
                })
                break;
            case role.includes("ROLE_USER"):
                console.log("eo user")
                sites.map((site) => {
                    if (site.name === 'Lista Gier' || site.name === 'Statystyki Gier') {
                        site.visible = true;
                    }
                })
                break;
        }
    } else {
        sites.map((site) => {
            site.visible = false;
        })
    }

    return (

        <Router>
            <NavBar sites={sites}/>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/game/:id" element={<Game/>}/>
                <Route path="/addGame" element={<AddGame/>}/>
                <Route path="/editGame/:id" element={<EditGame/>}/>
            </Routes>
        </Router>
    );
};


export default Webpages;