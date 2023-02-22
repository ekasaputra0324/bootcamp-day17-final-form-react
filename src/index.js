import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import {faker} from "@faker-js/faker"
import Comments from "./Comment";


const data = [
    {
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      time: faker.date.recent(3).toString(),
      comment: faker.lorem.lines(1),
    },
    {
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      time: faker.date.recent(3).toString(),
      comment: faker.lorem.lines(1),

    },
    {
      name: faker.name.firstName(),
      avatar: faker.image.avatar(),
      time: faker.date.recent(3).toString(),
      comment: faker.lorem.lines(1),
    }
  ]

// console.log(data);


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

/*
root.render() 
digunakan untuk merender component yang telah di buat
*/ 
root.render(<Comments data={data}/>)
console.log(   );  

