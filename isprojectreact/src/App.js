import './App.css';
import Webpages from "./webpages/webpages";
import {ThemeProvider, createTheme, Box} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <Webpages/>
        </ThemeProvider>
    );
}

export default App;
