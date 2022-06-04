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
import GamesStats from "./gamesStats";
import ProtectedRoute from "../components/Protected/protectedRoute";


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
                sites.map((site) => {
                    site.visible = true;
                })
                break;
            case role.includes("ROLE_USER"):
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
                <Route
                    path="/games"
                    element={
                        <ProtectedRoute role={role} restriction={"ROLE_USER"}>
                            <Games/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/game/:id"
                    element={
                        <ProtectedRoute role={role} restriction={"ROLE_USER"}>
                            <Game/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/addGame"
                    element={
                        <ProtectedRoute role={role} restriction={"ROLE_MANAGER"}>
                            <AddGame/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/editGame/:id"
                    element={
                        <ProtectedRoute role={role} restriction={"ROLE_MANAGER"}>
                            <EditGame/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/gamesStats"
                    element={
                        <ProtectedRoute role={role} restriction={"ROLE_USER"}>
                            <GamesStats/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default Webpages;