import {useEffect, useState} from "react";
import Variables from "../components/Globals/Variables";
import {useLocalStorage} from "../components/LocalStorageHandler/HandleLocalStorage";
import {Box, FormControl, FormLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import FormControlLabel from "@mui/material/FormControlLabel";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const GamesStats = () => {

    const XMLNames = ['ns2:numberOfPlayersByTag', 'ns2:numberOfGamesByPrice', 'ns2:numberOfGamesByYear']
    const [playerByTagData, setPlayerByTagData] = useState(null);
    const [gamesByPrice, setGamesByPrice] = useState(null);
    const [gamesByYear, setGamesByYear] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chosenChart, setChosenChart] = useState('chart1')
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
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");
                XMLNames.map((XMLName) => {
                    switch (XMLName) {
                        case 'ns2:numberOfPlayersByTag':
                            let temp1 = [];
                            for (let i = 0; i < xmlDoc.getElementsByTagName(XMLName).length; i++) {
                                const key = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:key')[0].childNodes[0].nodeValue;
                                const value = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:value')[0].childNodes[0].nodeValue;
                                temp1.push({key: key, value: value})
                            }
                            setPlayerByTagData(temp1);
                            break;
                        case 'ns2:numberOfGamesByPrice':
                            let temp2 = [];
                            for (let i = 0; i < xmlDoc.getElementsByTagName(XMLName).length; i++) {
                                const key = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:key')[0].childNodes[0].nodeValue;
                                const value = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:value')[0].childNodes[0].nodeValue;
                                temp2.push({key: key, value: value})
                            }
                            setGamesByPrice(temp2);
                            break;
                        case 'ns2:numberOfGamesByYear':
                            let temp3 = [];
                            for (let i = 0; i < xmlDoc.getElementsByTagName(XMLName).length; i++) {
                                const key = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:key')[0].childNodes[0].nodeValue;
                                const value = xmlDoc.getElementsByTagName(XMLName)[i].getElementsByTagName('ns2:value')[0].childNodes[0].nodeValue;
                                temp3.push({key: key, value: value})
                            }
                            setGamesByYear(temp3);
                            break;
                    }
                })
                setIsLoaded(true);
            });
    }, [])

    const handleChange = (event) => {
        setChosenChart(event.target.value);
    }

    if (isLoaded) {
        let labels = [];
        let values = [];
        switch (chosenChart){
            case 'chart1':
                labels = [];
                values = [];
                playerByTagData.map((e) => {
                    values.push(e.value);
                    labels.push(e.key);
                })
                break;
            case 'chart2':
                labels = [];
                values = [];
                gamesByPrice.map((e) => {
                    values.push(e.value);
                    labels.push(e.key);
                })
                break;
            case 'chart3':
                labels = [];
                values = [];
                gamesByYear.map((e) => {
                    values.push(e.value);
                    labels.push(e.key);
                })
                break;
        }


        const data = {
            labels,
            datasets: [
                {
                    label: 'Liczba graczy na dany tag',
                    data: values,
                    backgroundColor: '#4169E1',
                },
            ],
        };


        return (
            <Box
                sx={{
                    width: 1,
                    bgcolor: "background.default"
                }}
            >
                <Grid
                    marginLeft={"auto"}
                    marginRight={"auto"}
                    p={2}
                    border={2}
                    borderColor={"dimgrey"}
                    borderRadius={"12px"}
                    container
                    direction={"column"}
                    justifyContent={"space-between"}
                    alignSelf={"center"}
                    alignItems={"center"}
                    bgcolor={'action.hover'}
                    width={'100%'}
                >
                    <Bar options={options} data={data}/>
                    <FormControl>
                        <FormLabel id="tak">Wykres</FormLabel>
                        <RadioGroup
                            defaultValue="chart1"
                            name="radio-buttons-group"
                            sx={{
                                color: 'lightgrey'
                            }}
                            row
                            onChange={handleChange}
                        >
                            <FormControlLabel value="chart1" control={<Radio />} label="Liczba graczy na dany tag" />
                            <FormControlLabel value="chart2" control={<Radio />} label="Ilość gier ze względu na cene" />
                            <FormControlLabel value="chart3" control={<Radio />} label="Ilość gier ze względu na datę wydania" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Box>
        )
    } else {
        return (
            <Typography sx={{color: 'lightgrey', fontSize: 20}}></Typography>

        )
    }
}

export default GamesStats;