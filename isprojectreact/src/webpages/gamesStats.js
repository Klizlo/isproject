import {useEffect, useState} from "react";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";
import {Typography} from "@mui/material";


const GamesStats = () => {

    const [chartData, setChartData] = useState(null);
    const [token, setToken] = useLocalStorage("token", null);

    useEffect(() => {
        fetch(Variables.API + "/ws/getStatisticsRequest", {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/xml',
                'content-type': 'text/xml',
            }),
            body: "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:soap=\"http://example.com/isprojectjava/model/soap\">\n" +
                "   <soapenv:Header/>\n" +
                "   <soapenv:Body>\n" +
                "      <soap:getStatisticsRequest/>\n" +
                "   </soapenv:Body>\n" +
                "</soapenv:Envelope>"
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