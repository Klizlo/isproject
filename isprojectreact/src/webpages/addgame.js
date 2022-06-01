import {useState, useEffect} from "react";
import React from "react";


const AddGame = () => {
    const [isPosted, setIsPosted] = useState(false);

    if (!isPosted) {
        return (
            <form>
                <table>
                    <thead>
                    <tr>
                        <th>Tytuł gry</th>
                        <th>Ocena</th>
                        <th>Deweloper</th>
                        <th>Wydano w</th>
                        <th>Sprzedane kopie</th>
                        <th>Tagi</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th><label><input type={"text"} name={"name"}/></label></th>
                        <th><label><input type={"text"} name={"rate"}/></label></th>
                        <th><label><input type={"text"} name={"developer"}/></label></th>
                        <th><label><input type={"text"} name={"release"}/></label></th>
                        <th><label><input type={"text"} name={"soldCopies"}/></label></th>
                        <th><label><input type={"text"} name={"tags"}/></label></th>
                    </tr>
                    </tbody>
                </table>
                <input type={"button"} value={"Zapisz"}/>
                <input type={"button"} value={"Wyczyść"}/>
                <input type={"button"} value={"Przerwij"}/>
            </form>
        );
    } else {

    }
}

export default AddGame;