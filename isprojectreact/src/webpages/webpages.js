import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";

import Games from './games';
import Game from './game';
import AddGame from "./addgame";
import Login from "./login";
import UserContext from "../components/Globals/UserContext";
import NavBar from "../components/Navigation/navBar";


const Webpages = () => {
    const [token, setToken] = React.useState(null);
    const [role, setRole] = React.useState(null);

    //Tablica stron
    const sites = [
        //name: Nazwa na NavBar
        //link: Link do strony
        //visible: Czy widoczne
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
            name: "Dodaj gre",
            link: "/addGame",
            visible: false
        },
        {
            name: "Dodaj Użytkownika",
            link: "/addGame",
            visible: false
        },
    ];

    const userValues = {
        token: token,
        role: role,
        setRole,
        setToken
    }



    const Logout = () => {
        sites.map((site) => site.visible = false)
        userValues.setRole(null);
        userValues.setToken(null);
    }

    return (
        <UserContext.Provider value={userValues}>
            <>
                <Router>
                    <NavBar sites={sites}/>
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route path="/games" element={<Games/>}/>
                        <Route path="/game/:id" element={<Game/>}/>
                        <Route path="/addGame" element={<AddGame/>}/>
                    </Routes>
                </Router>
            </>
        </UserContext.Provider>
    );
};


export default Webpages;