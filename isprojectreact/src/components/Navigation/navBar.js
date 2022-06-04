import Box from '@mui/material/Box';
import {Button, ButtonGroup} from "@mui/material";
import {useNavigate} from "react-router-dom";
import React from 'react';
import {useLocalStorage} from "../LocalStorageHandler/HandleLocalStorage";

const NavBar = (sites) => {
    const [token, setToken] = useLocalStorage("token", null);
    const navigate = useNavigate();
    return (
        <Box sx={{
            width: '100%',
            bgcolor: 'background.paper',
        }}>
            <ButtonGroup
                variant="outlined"
                sx={{
                    p: 2,
                    position: 'center'
                }}

            >
                {sites.sites.map((site) => {
                    if (site.visible) {
                        return (
                            <Button variant={'contained'} color={"info"} key={site.name} onClick={() => {
                                navigate(site.link)
                            }
                            }>{site.name}</Button>
                        );
                    }
                })}
                {token ? (
                    <Button
                        variant={'contained'}
                        color={"warning"}
                        key={"logOut"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            localStorage.setItem("role", null);
                            navigate("/")
                        }}>
                        Wyloguj
                    </Button>
                ) : (
                    <Button
                        variant={'contained'}
                        color={"warning"}
                        key={"logIn"}
                        onClick={() => {
                            navigate("/")
                        }}>
                        Logowanie
                    </Button>
                )}
            </ButtonGroup>
        </Box>
    );
};

export default NavBar