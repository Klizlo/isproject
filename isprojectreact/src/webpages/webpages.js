import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";

import Games from './games';
import Game from './game';
import AddGame from "./addGame";
import Login from "./login";
import UserContext from "../components/Globals/UserContext";
import NavBar from "../components/Navigation/navBar";
import EditGame from "./editGame";


const Webpages = () => {
    const [token, setToken] = React.useState(null);
    const [role, setRole] = React.useState([null]);

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
            name: "Dodaj Gre",
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

    if (userValues.token) {
        {
            userValues.role.map((r) => {
                switch (r){
                    case "ROLE_USER":
                        sites.map((site) => {if(site.name === "Lista Gier" || site.name === "Statystyki Gier") site.visible=true});
                        break;
                    case "ROLE_MANAGER":
                        sites.map((site) => {if(site.name === "Dodaj Gre") site.visible=true});
                        break;
                }
            })
        }
    } else {
        {
            console.log("EO")
            sites.map((site) => site.visible = false)
        }
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
                        <Route path="/editGame/:id" element={<EditGame/>}/>
                    </Routes>
                </Router>
            </>
        </UserContext.Provider>
    );
};


export default Webpages;