
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

//const url = 'http://api.weatherapi.com/v1/current.json?key=a962b3979eb24518a26194258222603&q='+inputValue.value+'&aqi=no'

//No need to parse the data to JSON because the data from the API is already in the json format

/*request({url: url}, (error, response) =>{
    const data = JSON.parse(response.body);
    if(error){
        console.log("There was an error connecting to the wheather app!");
    }
    console.log(data.current);
})
*/
button.addEventListener('click', function(){

    fetch('http://api.weatherapi.com/v1/current.json?key=a962b3979eb24518a26194258222603&q='+inputValue.value+'&aqi=no')
.then(resp => resp.json())
.then(data => console.log(data))
.catch(err => alert("wrong city name!"))
})
