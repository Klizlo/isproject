import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Variables from "../components/Globals/Variables";
import {
    Box,
    Card,
    CardContent, Divider, Fab,
    Grid,
    List,
    ListItem,
    ListItemText, Modal,
    Typography,
} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UserContext from "../components/Globals/UserContext";

const MetacriticBox = (value) => {
    if (!value) {
        value = '?';
    }
    let color;
    switch (true) {
        case value > 66:
            color = {
                bgcolor: 'success.main',
            };
            break;
        case value > 33:
            color = {
                bgcolor: 'warning.main',
            };
            break;
        default:
            color = {
                bgcolor: 'error.main',
            };
            break;
    }
    return (
        <Box
            sx={{
                ...color,
                width: 75,
                height: 75,
                m: 2,
                border: 2,
                borderRadius: '16px',
                boxShadow: 10,
                borderColor: 'background.paper',
            }}
        >
            <Typography sx={{fontSize: 40, fontWeight: 'bold'}} color={"text.primary"} textAlign={"center"}>
                {value}
            </Typography>
            <Typography sx={{fontSize: 9, fontWeight: 'bold'}} color={"text.primary"} textAlign={"center"}>
                METACRITIC
            </Typography>
        </Box>
    )
}

const ininitialGames = {
    id: null,
    steamID: null,
    title: null,
    tags: [{id: null, name: null}],
    requiredAge: null,
    releaseDate: null,
    price: null,
    metacritic: null,
    currentPlayerCount: null,
    developers: [{id: null, name: null}]
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Game = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [game, setGame] = useState(ininitialGames);
    const [open, setOpen] = useState(false);
    const endpoint = Variables.API + "/games/" + id;
    const user = useContext(UserContext);

    const handleDelete = () =>{
        fetch(Variables.API + "/games/" + id, {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + user.token
            })
        })
            .then(() => setIsDeleted(true));
        setIsDeleted(true);
        setGame(ininitialGames);
        setOpen(true);
    }

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
        console.log(game);
        if (!isDeleted && !game.price) {
            game.price = "free";
        }
        console.log(game);
        return (
            <Card sx={{minWidth: 300,}}>
                <CardContent sx={{bgcolor: 'action.hover'}}>
                    <Grid container spacing={2} my={2} >
                        <Grid item xs={12} md={6}>
                            <Typography variant={"h4"} color={"text.secondary"} gutterBottom>
                                {game.title}
                            </Typography>
                            <Typography sx={{fontSize: 12}} color={"text.secondary"}>
                                DataBaseID: {game.id}
                            </Typography>
                            <Typography sx={{fontSize: 12}} color={"text.secondary"}>
                                SteamID: {game.steamID}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {MetacriticBox(game.metacritic)}
                        </Grid>
                    </Grid>

                    <Divider/>
                    <Grid container spacing={2} my={2}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{mt: 1, mb: 1}}
                                        variant="h6"
                                        color={"text.secondary"}
                                        component="div">
                                Deweloperzy:
                            </Typography>
                            <List dense={true}>
                                <Divider/>
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
                            <List dense={true} sx={{mb: 2}}>
                                <Divider/>
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
                    <Divider/>
                    <Grid container spacing={2} my={2} mb={8}>
                        <Grid item xs={12} md={6}>
                            <Typography sx={{fontSize: 20}} color={"text.secondary"} gutterBottom>
                                Obecna Liczba graczy: {game.currentPlayerCount}
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
                    <Fab variant="extended" color="secondary" sx={{mr:2}}
                        onClick={() => {
                            navigate("/editGame/" + id);
                        }}
                    >
                        <EditIcon sx={{ mr: 1 }}/>
                        Edytuj
                    </Fab>
                    <Fab variant="extended" color="error"
                         onClick={() => {
                            handleDelete();
                         }}
                    >
                        <DeleteIcon sx={{ mr: 1 }}/>
                        Usuń
                    </Fab>
                </CardContent>
                <Modal
                    open={open}
                    onClose={() => {
                        navigate("/games")
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" color={'text.primary'}>
                            Dane zostały usuniętę
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} color={'text.primary'}>
                            Klinij poza modal aby wrócić do listy gier.
                        </Typography>
                    </Box>
                </Modal>
            </Card>
        );
    }
}
export default Game;