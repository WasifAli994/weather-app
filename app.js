
var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){

    fetch('http://api.weatherapi.com/v1/current.json?key=a962b3979eb24518a26194258222603&q='+inputValue.value+'&aqi=no')
.then(resp => resp.json())
.then(data => {
    var name = document.querySelector('.name').innerHTML = data.location.name;
    temp.innerHTML = data.current.temp_c + '°C';
    desc.innerHTML = data.current.condition.text;
})
.catch(err => console.log("The provided city name is incorrect!"))
})
