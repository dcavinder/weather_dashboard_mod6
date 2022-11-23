var cityEl = document.getElementById('city-search');
var searchButton = document.getElementById('search-button');

function hideForecast() {
    document.getElementById("current-forecast").hidden = true
    document.getElementById("five-day-forecast").hidden = true
}
hideForecast()

function getApi() {
  //var weatherApiUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=7f42e217c46960a881c3b83169db922f';
    var currentWeatherApi ='https://api.openweathermap.org/data/2.5/weather?q=' + cityEl.value + '&units=imperial&appid=7f42e217c46960a881c3b83169db922f';
    fetch(currentWeatherApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (info) {
            console.log(info)  
            console.log(info.dt)
        });

    var fiveDayWeatherApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + info.coord.lat + '&lon=' + info.coord.lon + '&units=imperial&appid=7f42e217c46960a881c3b83169db922f';
    fetch(fiveDayWeatherApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        });
}

searchButton.addEventListener('click', getApi);