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
    ListItemText, Modal, TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import UserContext from "../components/Globals/UserContext";


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

const EditGame = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState(ininitialGames);
    const [tags, setTags] = useState(null);
    const [open, setOpen] = useState(false);
    const endpoint = Variables.API + "/games/" + id;
    const user = useContext(UserContext);

    const handleAdding = () => {
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
        fetch(Variables.API + "/tags", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + user.token
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setTags(data);
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
                        <TextField id="title" label="Tytuł gry" variant="outlined" placeholder={game.title}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="steamID" label="SteamID" variant="outlined" placeholder={game.steamID}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="metacritic" label="Metacritic" variant="outlined" placeholder={game.metacritic}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="price" label="Cena" variant="outlined" placeholder={game.price}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="releaseDate" label="Data wydania" variant="outlined" placeholder={game.releaseDate}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="requiredAge" label="Ograniczenia wiekowe" variant="outlined" placeholder={game.requiredAge}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="currentPlayerCount" label="Obecna liczba graczy" variant="outlined" placeholder={game.currentPlayerCount}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="title" label="Deweloperzy" variant="outlined" placeholder={game.title}/>
                    </Grid>
                    <Grid item my={2}>
                        <TextField id="title" label="Tagi" variant="outlined" placeholder={game.title}/>
                    </Grid>
                    <Grid item my={2}>
                        <Fab variant="extended" color="secondary" sx={{mr: 2}}
                             onClick={() => {
                                 navigate("/editGame");
                             }}
                        >
                            <ArrowBackIcon sx={{mr: 1}}/>
                            Powrót
                        </Fab>
                        <Fab variant="extended" color="success"
                             onClick={() => {
                                 handleAdding();
                             }}
                        >
                            <SaveIcon sx={{mr: 1}}/>
                            Zapisz
                        </Fab>
                    </Grid>
                </Grid>
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
                            Dane zostały zapisane
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}} color={'text.primary'}>
                            Klinij poza modal aby wrócić do listy gier.
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        )
            ;
    }
}
export default EditGame;