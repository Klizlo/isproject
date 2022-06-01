import React, {useState, useEffect, useContext} from 'react';
import GamesTable from "../components/Tables/gamesTable";
import Variables from "../components/Globals/Variables";
import userContext from "../components/Globals/UserContext";


const Games = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
    const endpoint = Variables.API + "/games/general";
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
                    setIsLoaded(true);
                    console.log(data);
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
        return (
            <div className={"table_container"}>
                <h1>Tabela gier</h1>
                {/*<GamesTable games={games}/>*/}
            </div>
        );
    }
}
export default Games;