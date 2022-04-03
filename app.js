import request from 'request';
import express from 'express';

//const app = express();

const url = "http://api.weatherapi.com/v1/current.json?key=a962b3979eb24518a26194258222603&q=Lahore&aqi=no"

//No need to parse the data to JSON because the data from the API is already in the json format
request({url: url}, (error, response) =>{
    const data = JSON.parse(response.body);
    console.log(data.current);
})

//app.listen(3000, () => console.log("The server started on port 3000"));