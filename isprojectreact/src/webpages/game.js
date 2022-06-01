import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Variables from "../components/Globals/Variables";


const Game = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [game, setGame] = useState([]);
    const endpoint = Variables.API + "/games/" + id;
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
        return (

            <table>
                <tr>
                    <th>Tytuł gry</th>
                    <th>Unikalny ID</th>
                    <th>Ocena</th>
                    <th>Deweloper</th>
                    <th>Wydano w</th>
                    <th>Sprzedane kopie</th>
                    <th>Tagi</th>
                </tr>
                <tr>
                    <th>{game.name}</th>
                    <th>{game.id}</th>
                    <th>{game.rate}</th>
                    <th>{game.developer}</th>
                    <th>{game.release}</th>
                    <th>{game.soldCopies}</th>
                    <th>{game.tags && game.tags.map((tag) => {
                        return (
                            <ul>
                                <li key={tag.id}>{tag.name}</li>
                            </ul>
                        )
                    })}</th>
                </tr>
            </table>
        );
    }
}
export default Game;