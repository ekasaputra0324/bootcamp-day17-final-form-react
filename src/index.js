import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import {faker} from "@faker-js/faker"
import CardComments from "./components/card";

const data  =[ 
    {
        "nama": faker.name.firstName(),
        "image": faker.image.avatar(),
        "date":faker.date.future().toLocaleDateString() ,
        "comments": faker.lorem.paragraphs(1)
    },
    {
        "nama": faker.name.firstName(),
        "image": faker.image.avatar(),
        "date": faker.date.future().toLocaleDateString() ,
        "comments": faker.lorem.paragraphs(1)
    },
    {
        "nama": faker.name.firstName(),
        "image": faker.image.avatar(),
        "date": faker.date.future().toLocaleDateString() ,
        "comments": faker.lorem.paragraphs(1)
    }
]
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

/*
root.render() 
digunakan untuk merender component yang telah di buat
*/ 
root.render(<CardComments data={data}/>);

