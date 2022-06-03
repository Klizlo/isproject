import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";



const goToDetails = (params) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return(
        <strong>
            <Button
                key={params.row.id}
                onClick={() => {
                    console.log(params.row.id);
                    navigate("/game/" + params.row.id)
                }}
            >
                Szczegóły
            </Button>
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
        field: 'settings',
        headerName: 'Opcje',
        sortable: false,
        renderCell: goToDetails
    }
];

const GamesTable = gamesData => (
    <div style={{height: 400, width: '100%',
        backgroundColor: "darkslategrey"}}>
        <DataGrid
            rows={gamesData.games}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
        />
    </div>
)

export default GamesTable
