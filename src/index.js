import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

/*
root.render() 
digunakan untuk merender component yang telah di buat
*/ 
root.render(<App/>);

