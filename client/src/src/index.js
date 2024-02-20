import React from "react"
import ReactDOM from "react-dom"
import { App } from "./containers"

import "./index.css";

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);