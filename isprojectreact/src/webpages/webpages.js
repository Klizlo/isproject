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


const Webpages = () => {
    const [token, setToken] = React.useState(null);
    const [role, setRole] = React.useState(null);


    const userValues = {
        token: token,
        role: role,
        setRole,
        setToken
    }

    const Logout = () => {
        userValues.setRole(null);
        userValues.setToken(null);
    }

    console.log(userValues);
    return (
        <UserContext.Provider value={userValues}>
            <>
                <Router>
                    <Navigation/>
                    {userValues.token ? (
                        <button onClick={Logout}>Wyloguj</button>
                    ) : (
                        <button onClick={Login}>Zaloguj</button>
                    )}
                    <Routes>
                        <Route exact path="/" element={<Login/>}/>
                        <Route path="/sign-in" element={<Login/>}/>
                        <Route path="/games" element={<Games/>}/>
                        <Route path="/game/:id" element={<Game/>}/>
                        <Route path="/addGame" element={<AddGame/>}/>
                    </Routes>
                </Router>
            </>
        </UserContext.Provider>
    );
};

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <nav>
            <button onClick={navigate("/games")}>Wszystkie gry</button>
            <button onClick={navigate("/addGame")}>Dodaj gre</button>
        </nav>);
};

export default Webpages;