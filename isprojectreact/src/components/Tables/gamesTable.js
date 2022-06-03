import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {Fab, Grid} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const goToDetails = (params) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return (
        <strong>
            <Fab
                color={"info"}
                size={"small"}
                key={params.row.id}
                onClick={() => {
                    navigate("/game/" + params.row.id)
                }}
            >
                <InfoIcon/>
            </Fab>
        </strong>
    )
}

const goToEdit = (params) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return (
        <strong>
            <Fab
                color={"secondary"}
                size={"small"}
                key={params.row.id}
                onClick={() => {
                    navigate("/editGame/" + params.row.id)
                }}
            >
                <EditIcon/>
            </Fab>
        </strong>
    )
}

const deleteGame = (params) => {
    return (
        <strong>
            <Fab
                color={"error"}
                size={"small"}
                key={params.row.id}
                onClick={() => {

                }}
            >
                <DeleteIcon/>
            </Fab>
        </strong>
    )
}

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'title', headerName: 'Nazwa gry', width: 130},
    {field: 'steamID', headerName: 'SteamID', width: 120},
    {field: 'metacritic', headerName: 'Ocena metacritic', width: 150},
    {field: 'currentPlayerCount', headerName: 'Obecna liczba graczy', width: 180},
    {field: 'price', headerName: 'Cena', width: 70},
    {
        field: 'Details',
        headerName: 'Szczegóły',
        sortable: false,
        renderCell: goToDetails
    },
    {
        field: 'Edit',
        headerName: 'Zedytuj',
        sortable: false,
        renderCell: goToEdit
    },
    {
        field: 'Delete',
        headerName: 'Usuń',
        sortable: false,
        renderCell: deleteGame
    }
];

const GamesTable = gamesData => (
        <Grid
            marginLeft={"auto"}
            marginRight={"auto"}
            p={2}
            border={2}
            borderColor={"dimgrey"}
            borderRadius={"12px"}
            container
            alignSelf={"center"}
            alignItems={"center"}
            bgcolor={'action.hover'}
            width={'90%'}
            height={400}
        >
                <DataGrid
                    rows={gamesData.games}
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                />
        </Grid>
)

export default GamesTable
