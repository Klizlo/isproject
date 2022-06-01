import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import Variables from "../components/Globals/Variables";
import userContext from "../components/Globals/UserContext";


const Game = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState([]);
    const endpoint = Variables.API + "/games/" + id;
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
                    setGame(data);
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
        console.log(game);
        return (
            <table>
                <tr>
                    <th>Unikalny ID</th>
                    <th>Tytuł gry</th>
                    <th>SteamID</th>
                    <th>Ocena metacritic</th>
                    <th>Data wydania</th>
                    <th>Deweloperzy</th>
                    <th>Obecna liczba graczy</th>
                    <th>Wymagania wiekowe</th>
                    <th>Tagi</th>
                    <th>Cena</th>
                </tr>
                <tr>
                    <th>{game.id}</th>
                    <th>{game.title}</th>
                    <th>{game.steamID}</th>
                    <th>{game.metacritic}</th>
                    <th>{game.releaseDate}</th>
                    <th>{game.developers.map((developer) => {
                        return(
                            <li>{developer.name}</li>
                        )
                    })}</th>

                    <th>{game.currentPlayerCount}</th>
                    <th>{game.requiredAge}</th>
                    <th>{game.tags && game.tags.map((tag) => {
                        return (
                            <ul>
                                <li key={tag.id}>{tag.name}</li>
                            </ul>
                        )
                    })}</th>
                    <th>{game.price}</th>
                </tr>
            </table>
        );
    }
}
export default Game;