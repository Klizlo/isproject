import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import Variables from "../components/Globals/Variables";
import userContext from "../components/Globals/UserContext";
import {Box, Card, CardContent, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import FolderIcon from "@mui/icons-material/Folder";


const Game = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState([]);
    const endpoint = Variables.API + "/games/" + id;
    const user = useContext(userContext);
    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + user.token
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setGame(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [id])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }


    if (game) {
        if (!game.price) {
            game.price = "free";
        }
        console.log(game);
        return (
            <Card sx={{minWidth: 300}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant={"h4"} color={"text.secondary"} gutterBottom>
                                {game.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 12}} color={"text.secondary"}>
                                DataBaseID: {game.id}
                            </Typography>
                            <Typography sx={{fontSize: 12}} color={"text.secondary"}>
                                SteamID: {game.steamID}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{mt: 1, mb: 1}}
                                        variant="h6"
                                        color={"text.secondary"}
                                        component="div">
                                Deweloperzy:
                            </Typography>
                            <List dense={true}>
                                {game.developers.map((developer) => {
                                    return (
                                        <ListItem>
                                            <ListItemText secondary={developer.name}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{mt: 1, mb: 1}}
                                        variant="h6"
                                        color={"text.secondary"}
                                        component="div">
                                Tagi:
                            </Typography>
                            <List dense={true}>
                                {game.tags.map((tag) => {
                                    return (
                                        <ListItem>
                                            <ListItemText secondary={tag.name}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Obecna Liczba graczy: {game.currentPlayerCount}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Ocena metacritic: [{game.metacritic}/100]
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Cena: {game.price}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Data wydania: {game.releaseDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Wymagany wiek: {game.requiredAge}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}
export default Game;