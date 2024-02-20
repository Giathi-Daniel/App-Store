import React from "react"
import ReactDOM from "react-dom"
import { App } from "./containers"

import "./index.css";

import { BrowserRouter as Router } from "react-router-dom"

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Router>
         <App />
        </Router>
    </React.StrictMode>,
    root
);