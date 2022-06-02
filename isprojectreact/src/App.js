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
            <main><Webpages/></main>
        </ThemeProvider>
    );
}

export default App;
