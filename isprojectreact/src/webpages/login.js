import React, {useContext, useState} from 'react'
import Variables from "../components/Globals/Variables";
import {Alert} from "@mui/material";
import jwtDecode from "jwt-decode";
import userContext from "../components/Globals/UserContext";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const naviagte = useNavigate();
    const user = useContext(userContext);
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        fetch(Variables.API + "/login", {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: event.target.login.value,
                password: event.target.password.value
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    const jwt = jwtDecode(data.token).roles;
                    const rolesList = jwt.split(",")
                    user.setToken(data.token);
                    user.setRole(rolesList)
                    setIsError(false);
                    naviagte("/games")
                },
                (error) => {
                    setError(error);
                    setIsError(true);
                }
            )
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>Logowanie</h3>
            <div className="mb-3">
                <label>Login</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Podaj Login"
                    name={"login"}
                />
            </div>
            <div className="mb-3">
                <label>Hasło</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Podaj Hasło"
                    name={"password"}
                />
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                    Zaloguj
                </button>
            </div>
            <div>
                {
                    isError ? <Alert severity={"error"}>{error.message}</Alert> : <></>
                }
            </div>
        </form>
    );
}

export default Login;
