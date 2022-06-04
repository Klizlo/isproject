import React, {useState, useEffect} from 'react';
import GamesTable from "../components/Tables/gamesTable";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";
import {Box, Fab, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';


const handleDownloadJSON = (token) => {
    fetch(Variables.API + "/games/file/json", {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Bearer ' + token
        })
    })
}

const Games = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
    const endpoint = Variables.API + "/games/general";
    const [token, setToken] = useLocalStorage("token", null);
    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setGames(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Pobieram dane...</div>;
    } else {
        games.map((game) => {
            if (!game.price) {
                game.price = "free";
            }
        })
        return (
            <Box
                sx={{
                    width: 1,
                    bgcolor: "background.default"
                }}
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
                    width={'100%'}
                >
                    <Typography sx={{fontSize: 35, fontWeight: 'bold'}} color={"text.secondary"} gutterBottom>
                        Tabela Gier
                    </Typography>
                    <GamesTable games={games}/>
                    <div>
                        <Grid
                            container
                            spacing={2}
                            my={2}
                            alignSelf={"center"}
                            alignItems={"center"}
                        >
                            <Fab variant="extended" color="success" sx={{mr: 2}}
                                 onClick={() => {
                                     navigate("/addGame");
                                 }}
                            >
                                <AddIcon sx={{mr: 1}}/>
                                Dodaj gre
                            </Fab>
                            <Fab variant="extended" color="info" sx={{mr: 2}}
                                 onClick={() => {

                                 }}
                            >
                                <DownloadIcon sx={{mr: 1}}/>
                                XML
                            </Fab>
                            <Fab variant="extended" color="info" sx={{mr: 2}}
                                 onClick={() => {

                                 }}
                            >
                                <DownloadIcon sx={{mr: 1}}/>
                                JSON
                            </Fab>
                            <Fab variant="extended" color="primary" sx={{mr: 2}}
                                 onClick={() => {

                                 }}
                            >
                                <UploadIcon sx={{mr: 1}}/>
                                Dodaj z pliku
                            </Fab>
                        </Grid>
                    </div>
                </Grid>
            </Box>
        )
            ;
    }
}
export default Games;