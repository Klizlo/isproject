import React, {useState, useEffect} from 'react';
import GamesTable from "../components/Tables/gamesTable";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";
import {Box, Button, Fab, Grid, Modal, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import UploadIcon from '@mui/icons-material/Upload';
import {styled} from "@mui/material/styles";


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

const handleDownloadJSON = (token) => {


    fetch(Variables.API + "/games/file/json", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        })
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `Data.json`,
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });

}

const handleDownloadXML = (token) => {


    fetch(Variables.API + "/games/file/xml", {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'text/xml',
            'Authorization': 'Bearer ' + token
        })
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `Data.xml`,
            );
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        });

}


const Games = () => {
    const Input = styled('input')({
        display: 'none',
    });
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
    const [file, setFile] = useState([]);
    const endpoint = Variables.API + "/games/general";
    const [token, setToken] = useLocalStorage("token", null);
    const [role, setRole] = useLocalStorage("role", null);

    const handleAddFromFile = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(Variables.API + "/games/file", {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            }),
            body: formData
        })
            .then((response) => response.blob())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

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
                    {role.includes("ROLE_MANAGER") ? (
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
                                         handleDownloadXML(token);
                                     }}
                                >
                                    <DownloadIcon sx={{mr: 1}}/>
                                    XML
                                </Fab>
                                <Fab variant="extended" color="info" sx={{mr: 2}}
                                     onClick={() => {
                                         handleDownloadJSON(token);
                                     }}
                                >
                                    <DownloadIcon sx={{mr: 1}}/>
                                    JSON
                                </Fab>
                                <Fab variant="extended" color="primary" sx={{mr: 2}}
                                     onClick={() => {
                                         setOpen(true);
                                     }}
                                >
                                    <UploadIcon sx={{mr: 1}}/>
                                    Dodaj z pliku
                                </Fab>
                            </Grid>
                        </div>
                    ) : (
                        <div>
                            <Grid
                                container
                                spacing={2}
                                my={2}
                                alignSelf={"center"}
                                alignItems={"center"}
                            >
                                <Fab variant="extended" color="info" sx={{mr: 2}}
                                     onClick={() => {
                                         handleDownloadXML(token);
                                     }}
                                >
                                    <DownloadIcon sx={{mr: 1}}/>
                                    XML
                                </Fab>
                                <Fab variant="extended" color="info" sx={{mr: 2}}
                                     onClick={() => {
                                         handleDownloadJSON(token);
                                     }}
                                >
                                    <DownloadIcon sx={{mr: 1}}/>
                                    JSON
                                </Fab>
                            </Grid>
                        </div>
                    )}
                </Grid>
                <Modal
                    open={open}
                    onClose={() => {
                        setOpen(false);
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <form encType="multipart/form-data" action="">
                        <Box sx={style}>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                                color={'text.primary'}
                            >
                                Wczytaj dane z pliku
                            </Typography>
                            <label htmlFor="contained-button-file">
                                <input
                                    id="contained-button-file"
                                    type="file"
                                    name="file"
                                    hidden
                                    onChange={(e) => {
                                    setFile(e.target.files[0])
                                }}/>
                                <Button variant="contained" component="span">
                                    Wybierz Plik
                                </Button>
                            </label>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    color: 'lightgrey',
                                    mt: 2
                                }}
                            >
                                Nazwa: {file.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    color: 'lightgrey',
                                }}
                            >
                                Typ: {file.type}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    color: 'lightgrey',
                                    mb: 2
                                }}
                            >
                                Rozmiar: {file.size} bytes
                            </Typography>
                            <Button
                                variant="contained"
                                component="span"
                                onClick={() => {
                                    handleAddFromFile();
                                }}>
                                Zapisz do bazy
                            </Button>
                        </Box>
                    </form>
                </Modal>
            </Box>
        )
            ;
    }
}
export default Games;