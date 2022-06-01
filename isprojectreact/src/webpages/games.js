import React, {useState, useEffect} from 'react';
import GamesTable from "../components/Tables/gamesTable";
import Variables from "../components/Globals/Variables";


const Games = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [games, setGames] = useState([]);
    const endpoint = Variables.API + "/games";
    useEffect(() => {
        fetch(endpoint, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5lZHUiLCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9NQU5BR0VSLFJPTEVfVVNFUiIsImlhdCI6MTY1NDAwMjE3OSwiZXhwIjoxNjU0MDIwMTc5fQ.CsxrKqrcr6N7ayJshodMph64c2kSDALOdzjlkf7EmWE"
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
        return (
            <div className={"table_container"}>
                <h1>Tabela gier</h1>
                <GamesTable games={games}/>
            </div>
        );
    }
}
export default Games;