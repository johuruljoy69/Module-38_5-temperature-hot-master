// News API : ae2fd79ee76d4db4b1ad3120869cc04c
// WeatherMap  API-Key: e612ec463ac08c81fc3b73b6fa300001

const API_KEY = `e612ec463ac08c81fc3b73b6fa300001`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));   
}

const displayTemperature = data =>{
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) =>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})

loadTemperature('dhaka');