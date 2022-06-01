import './App.css';
import Webpages from "./webpages/webpages";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <div className="container">
                <Webpages/>
            </div>
        </Suspense>
    );
}

export default App;
