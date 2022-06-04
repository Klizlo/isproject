import React, {useContext, useEffect, useState} from 'react'
import Variables from "../components/Globals/Variables";
import {Alert, Box, Button, Grid, TextField, Typography} from "@mui/material";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isError, setIsError] = useState(false);
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    const handleLogin = () => {
        fetch(Variables.API + "/login", {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: login,
                password: password
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    const jwt = jwtDecode(data.token).roles;
                    const rolesList = jwt.split(",")
                    setToken(data.token);
                    setRole(rolesList)
                    setIsError(false);
                },
                (error) => {
                    setError(error);
                    setIsError(true);
                }
            )

    }

    useEffect(() => {
        // storing input name
        localStorage.setItem("token", JSON.stringify(token));
    }, [token]);
    useEffect(() => {
        // storing input name
        localStorage.setItem("role", JSON.stringify(role));
    }, [role]);

    return (
        <Box
            component="form"
            sx={{
                width: 1,
                bgcolor: "background.default"
            }}
            noValidate
            autoComplete="off"
        >
            <Grid
                marginLeft={"auto"}
                marginRight={"auto"}
                p={2}
                border={2}
                borderColor={"dimgrey"}
                borderRadius={"12px"}
                container
                direction={"column"}
                justifyContent={"space-between"}
                alignSelf={"center"}
                alignItems={"center"}
                bgcolor={'action.hover'}
                width={'80%'}
            >
                <Grid item my={2}>
                    <Typography sx={{fontSize: 35, fontWeight: 'bold'}} color={"text.secondary"} gutterBottom>
                        Witaj na naszej stronie
                    </Typography>
                </Grid>
                <Grid item my={2}>
                    <TextField
                        id="login"
                        label="Login"
                        variant="outlined"
                        placeholder="Podaj Login"
                        onChange={(e) => {
                            setLogin(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item my={2}>
                    <TextField
                        id="password"
                        label="Hasło"
                        variant="outlined"
                        placeholder="Podaj hasło"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </Grid>

                <Grid item my={2}>
                    <Button
                        key="login-button"
                        variant={'contained'}
                        color={"success"}
                        onClick={() => {
                            handleLogin()
                        }}
                    >
                        Zaloguj
                    </Button>
                </Grid>
                <Grid item my={2}>
                    {isError ? (
                        <Alert severity={"error"}>Podano złe dane logowania</Alert>
                    ) : (
                        <div></div>
                    )}
                </Grid>
            </Grid>
        </Box>
);
}

export default Login;
