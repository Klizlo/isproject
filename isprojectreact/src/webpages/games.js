import React, {useState, useEffect} from 'react';
import GamesTable from "../components/Tables/gamesTable";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";


const Games = () => {
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
            if(!game.price){
                game.price = "free";
            }
        })
        return (
            <div className={"table_container"}>
                <h1>Tabela gier</h1>
                <GamesTable games={games}/>
            </div>
        );
    }
}
export default Games;