import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Nazwa gry', width: 130 },
    { field: 'steamID', headerName: 'SteamID', width: 70 },
    { field: 'metacritic', headerName: 'Ocena metacritic', width: 70 },
    { field: 'currentPlayerCount', headerName: 'Obecna liczba graczy', width: 250 },
    { field: 'price', headerName: 'Cena', width: 70 }
];

const GamesTable = gamesData => (
    <div style={{height: 400, width: '100%'}}>
        <DataGrid
            rows={gamesData}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
        />
    </div>
);
export default GamesTable
