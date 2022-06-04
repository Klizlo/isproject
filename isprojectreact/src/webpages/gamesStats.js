import {useEffect, useState} from "react";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";
import {Typography} from "@mui/material";


const GamesStats = () => {

    const [chartData, setChartData] = useState(null);
    const [token, setToken] = useLocalStorage("token", null);

    useEffect(() => {
        fetch(Variables.API + "/ws/getStatisticsRequest", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/xml',
                'content-type': 'application/x-www-form-urlencoded',
            })
        })
            .then(res => res.text())
            .then(text => {
                console.log(text)
                setChartData(text);
            });
    }, [])


    return(
        <Typography>
            {chartData}
        </Typography>
    )
}

export default GamesStats;