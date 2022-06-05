import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import Variables from "../components/Globals/Variables";
import {
    Box,
    Checkbox, Fab,
    Grid,
    List,
    ListItem,
    ListItemText, ListSubheader, Modal, TextField,
    Typography,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";

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
    const [error, setError] = useState(null);
    const [isLoadedT, setIsLoadedT] = useState(false);
    const [tags, setTags] = useState(null);
    const [open, setOpen] = useState(false);
    const [token, setToken] = useLocalStorage("token", null);
    const [currentPlayerCount, setCurrentPlayerCount] = useState(null);
    const [developers, setDevelopers] = useState(null);
    const [metacritic, setMetacritic] = useState(null);
    const [price, setPrice] = useState(null);
    const [releaseDate, setReleaseDate] = useState(null);
    const [requiredAge, setRequiredAge] = useState(null);
    const [steamID, setSteamID] = useState(null);
    const [title, setTitle] = useState(null);


    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const handleAdding = () => {
        let tagsToDB = [];
        checked.map((c) => {
            tags.map((tag) => {
                if (tag.id === c) {
                    tagsToDB.push({name: tag.name});
                }
            })
        })
        const temp = developers.split(';');
        if (temp.includes('')) {
            temp.pop();
        }
        let developersToDB = [];
        temp.map((t) => {
            developersToDB.push({name: t});
        })


        const jsonBody = JSON.stringify({
            currentPlayerCount: parseInt(currentPlayerCount),
            developers: developersToDB,
            metacritic: parseInt(metacritic),
            price: price,
            releaseDate: releaseDate,
            requiredAge: parseInt(requiredAge),
            steamID: parseInt(steamID),
            tags: tagsToDB,
            title: title
        })
        fetch(Variables.API + "/games", {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                currentPlayerCount: currentPlayerCount,
                developers: developersToDB,
                metacritic: metacritic,
                price: price,
                releaseDate: releaseDate,
                requiredAge: requiredAge,
                steamID: steamID,
                tags: tagsToDB,
                title: title
            })
        })

        setOpen(true);
    }

    useEffect(() => {
        fetch(Variables.API + "/tags", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setTags(data);
                    setIsLoadedT(true);
                },
                (error) => {
                    setIsLoadedT(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoadedT) {
        return <div>Loading...</div>;
    }


    if (tags) {
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
                    width={'80%'}
                >
                    <Grid item my={2}>
                        <TextField
                            id="title"
                            label="Tytuł gry"
                            variant="outlined"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="steamID"
                            label="SteamID"
                            variant="outlined"
                            onChange={(e) => {
                                setSteamID(e.target.value);
                            }}
                        />
                    </Grid>

                    <Grid item my={2}>
                        <TextField
                            id="metacritic"
                            label="Metacritic"
                            variant="outlined"
                            placeholder={"0-100"}
                            onChange={(e) => {
                                setMetacritic(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="price"
                            label="Cena"
                            variant="outlined"
                            placeholder={"xx,xxzł"}
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="releaseDate"
                            label="Data wydania"
                            variant="outlined"
                            placeholder={"yyyy-mm-dd"}
                            onChange={(e) => {
                                setReleaseDate(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="requiredAge"
                            label="Ograniczenia wiekowe"
                            variant="outlined"
                            onChange={(e) => {
                                setRequiredAge(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="currentPlayerCount"
                            label="Obecna liczba graczy"
                            variant="outlined"
                            onChange={(e) => {
                                setCurrentPlayerCount(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item my={2}>
                        <TextField
                            id="title"
                            label="Deweloperzy"
                            variant="outlined"
                            placeholder={"dev1;dev2"}
                            onChange={(e) => {
                                setDevelopers(e.target.value);
                            }}
                        />
                    </Grid>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 225,
                            bgcolor: 'lightgrey',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            border: 2,
                            borderColor: "dimgrey",
                            borderRadius: "12px",
                            '& ul': {padding: 0},
                        }}
                        subheader={<li/>}
                    >
                        <li key={`section-Tags`}>
                            <ul>
                                <ListSubheader>Tagi:</ListSubheader>
                                {tags.map((tag) => (
                                    <ListItem key={tag.id}
                                              secondaryAction={
                                                  <Checkbox
                                                      edge="end"
                                                      onChange={handleToggle(tag.id)}
                                                      checked={checked.indexOf(tag.id) !== -1}
                                                  />
                                              }
                                              disablePadding>
                                        <ListItemText id={tag.name} primary={tag.name} sx={{ml: 2}}/>
                                    </ListItem>
                                ))}
                            </ul>
                        </li>
                    </List>
                    <Grid item my={2}>
                        <Fab variant="extended" color="secondary" sx={{mr: 2}}
                             onClick={() => {
                                 navigate("/games");
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
                        setOpen(false);
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