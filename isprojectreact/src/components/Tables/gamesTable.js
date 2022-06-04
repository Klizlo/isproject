import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {Fab, Grid} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

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

let columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'title', headerName: 'Nazwa gry', width: 130},
    {field: 'steamID', headerName: 'SteamID', width: 120},
    {field: 'metacritic', headerName: 'Ocena metacritic', width: 150},
    {field: 'currentPlayerCount', headerName: 'Obecna liczba graczy', width: 180},
    {field: 'price', headerName: 'Cena', width: 100},
    {
        field: 'Details',
        headerName: 'Szczegóły',
        sortable: false,
        renderCell: goToDetails
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
