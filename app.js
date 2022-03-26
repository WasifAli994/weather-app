import request from 'request';

const url = "http://api.weatherapi.com/v1/current.json?key=a962b3979eb24518a26194258222603&q=Lahore&aqi=no"

//No need to parse the data to JSON because the data from the API is already in the json format
request({url: url}, (error, response) =>{
    const data = response;
    console.log(data);
})