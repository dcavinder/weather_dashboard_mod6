var searchButton = document.querySelector("#search-button");
var cityEl = document.getElementById('city-search');
var pastSearch = [];
var search = "";

// function hideForecast() {
//     document.getElementById("five-Day-forecast").hidden = true;
//     document.getElementById("current-forecast").hidden = true;
// }
// hideForecast();


function getData() {
    // document.getElementById("five-Day-Forecast").hidden = false;
    // document.getElementById("current-Forecast").hidden = false;
    
    if(cityEl.value) {
        search = cityEl.value;
    }

    var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityEl.value + '&units=imperial&appid=7f42e217c46960a881c3b83169db922f'; 

    fetch(currentWeatherUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (info) {
        console.log(info);
        console.log(info.dt);
   
    var fiveDayForecastURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityEl.value + '&units=imperial&appid=7f42e217c46960a881c3b83169db922f';
    
    fetch(fiveDayForecastURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      
      //Current Forecast
      var currentForecast = document.querySelector(".current-Forecast");
      var date = moment(info.dt, "X").format("YYYY-MM-DD");
      currentForecast.innerHTML = info.name + " (" + date + ")";
      var currentWeatherIcon = document.createElement('img');
      var currentIconCode = info.weather[0].icon;
      currentWeatherIcon.src = "http://openweathermap.org/img/w/" + currentIconCode + ".png"; 
      var currentTemp = document.createElement('p');;        
      currentTemp.innerHTML = "Temp: " + info.main.temp + "°F";
      var currentWind = document.createElement('p');;
      currentWind.innerHTML = "Wind: " + info.wind.speed + "mph";
      var currentHumidity = document.createElement('p');;
      currentHumidity.innerHTML = "Humidity: " + info.main.humidity + "%";
      currentForecast.append(currentWeatherIcon);
      currentForecast.append(currentTemp);
      currentForecast.append(currentWind);
      currentForecast.append(currentHumidity);

      //Day One Forecast
      var dayOneCard = document.querySelector(".dayOneCard");
      var dayOneDate = document.createElement('h3');
      dayOneDate.innerHTML = data.list[2].dt_txt.substring(0, 10);
      var dayOneIcon = document.createElement('img');
      var dayOneIconCode = data.list[2].weather[0].icon;
      dayOneIcon.src = "http://openweathermap.org/img/w/" + dayOneIconCode + ".png"; 
      var dayOneTemp = document.createElement('p');
      dayOneTemp.textContent = "Temp: " + data.list[2].main.temp + "°F";
      var dayOneWind = document.createElement('p');
      dayOneWind.textContent = "Wind: " + data.list[2].wind.speed + "mph";
      var dayOneHumidity = document.createElement('p');
      dayOneHumidity.textContent = "Humidity: " + data.list[2].main.humidity + "%";
      dayOneCard.append(dayOneDate);
      dayOneCard.append(dayOneIcon);
      dayOneCard.append(dayOneTemp);
      dayOneCard.append(dayOneWind);
      dayOneCard.append(dayOneHumidity);

      //Day Two ForeCast
      var dayTwoCard = document.querySelector(".dayTwoCard");
      var dayTwoDate = document.createElement('h3');
      dayTwoDate.innerHTML = data.list[10].dt_txt.substring(0, 10);
      var dayTwoIcon = document.createElement('img');
      var dayTwoIconCode = data.list[10].weather[0].icon;
      dayTwoIcon.src = "http://openweathermap.org/img/w/" + dayTwoIconCode + ".png"; 
      var dayTwoTemp = document.createElement('p');
      dayTwoTemp.textContent = "Temp: " + data.list[10].main.temp + "°F";
      var dayTwoWind = document.createElement('p');
      dayTwoWind.textContent = "Wind: " + data.list[10].wind.speed + "mph";
      var dayTwoHumidity = document.createElement('p');
      dayTwoHumidity.textContent = "Humidity: " + data.list[10].main.humidity + "%";
      dayTwoCard.append(dayTwoDate);
      dayTwoCard.append(dayTwoIcon);
      dayTwoCard.append(dayTwoTemp);
      dayTwoCard.append(dayTwoWind);
      dayTwoCard.append(dayTwoHumidity);


      //Day Three Forecast
      var dayThreeCard = document.querySelector(".dayTwoCard");
      var dayThreeDate = document.createElement('h3');
      dayThreeDate.innerHTML = data.list[18].dt_txt.substring(0, 10);
      var dayThreeIcon = document.createElement('img');
      var dayThreeIconCode = data.list[18].weather[0].icon;
      dayThreeIcon.src = "http://openweathermap.org/img/w/" + dayThreeIconCode + ".png";
      var dayThreeTemp = document.createElement('p');
      dayThreeTemp.textContent = "Temp: " + data.list[18].main.temp + "°F";
      var dayThreeWind = document.createElement('p');
      dayThreeWind.textContent = "Wind: " + data.list[18].wind.speed + "mph";
      var dayThreeHumidity = document.createElement('p');
      dayThreeHumidity.textContent = "Humidity: " + data.list[18].main.humidity + "%";
      dayThreeCard.append(dayThreeDate);
      dayThreeCard.append(dayThreeIcon);
      dayThreeCard.append(dayThreeTemp);
      dayThreeCard.append(dayThreeWind);
      dayThreeCard.append(dayThreeHumidity);


      //Day Four Forecast
      var dayFourCard = document.querySelector(".dayTwoCard");
      var dayFourDate = document.createElement('h3');
      dayFourDate.innerHTML = data.list[26].dt_txt.substring(0, 10);
      var dayFourIcon = document.createElement('img');
      var dayFourIconCode = data.list[26].weather[0].icon;
      dayFourIcon.src = "http://openweathermap.org/img/w/" + dayFourIconCode + ".png";
      var dayFourTemp = document.createElement('p');
      dayFourTemp.textContent = "Temp: " + data.list[26].main.temp + "°F";
      var dayFourWind = document.createElement('p');
      dayFourWind.textContent = "Wind: " + data.list[26].wind.speed + "mph";
      var dayFourHumidity = document.createElement('p');
      dayFourHumidity.textContent = "Humidity: " + data.list[26].main.humidity + "%";
      dayFourCard.append(dayFourDate);
      dayFourCard.append(dayFourIcon);
      dayFourCard.append(dayFourTemp);
      dayFourCard.append(dayFourWind);
      dayFourCard.append(dayFourHumidity);


      //Day Five Forecast
      var dayFiveCard = document.querySelector(".dayTwoCard");
      var dayFiveDate = document.createElement('h3');
      dayFiveDate.innerHTML = data.list[34].dt_txt.substring(0, 10);
      var dayFiveIcon = document.createElement('img');
      var dayFiveIconCode = data.list[34].weather[0].icon;
      dayFiveIcon.src = "http://openweathermap.org/img/w/" + dayFiveIconCode + ".png";
      var dayFiveTemp = document.createElement('p');
      dayFiveTemp.textContent = "Temp: " + data.list[34].main.temp + "°F";
      var dayFiveWind = document.createElement('p');
      dayFiveWind.textContent = "Wind: " + data.list[34].wind.speed + "mph";
      var dayFiveHumidity = document.createElement('p');
      dayFiveHumidity.textContent = "Humidity: " + data.list[34].main.humidity + "%";
      dayFiveCard.append(dayFiveDate);
      dayFiveCard.append(dayFiveIcon);
      dayFiveCard.append(dayFiveTemp);
      dayFiveCard.append(dayFiveWind);
      dayFiveCard.append(dayFiveHumidity);
      })

      .then (function saveSearch() {
        if (cityEl.value){
            pastSearch.push(cityEl.value);
            console.log(pastSearch);
            localStorage.setItem("previousSearch", JSON.stringify(pastSearch));
        }
      })

      .then (function () {
        document.getElementById("citySearch").value = ""
      });
    });

  };


searchButton.addEventListener("click", getData)

// function init() {
//     var saved = JSON.parse(localStorage.getItem("previousSearch"));
//     console.log(saved);
//     for(var i = 0; i < saved.length; i++) {
//         let searchHistoryButton = document.createElement("button");
//         searchHistoryButton.value = saved[i];
//         searchHistoryButton.classList.add("prevCity");
//         searchHistoryButton.textContent = saved[i];
//         $('.pastCities').append(searchHistoryButton)

//         searchHistoryButton.addEventListener("click", function (event) {
//             var searchButton = event.target;
//             var searchCity = searchButton.getAttribute('value')
//             console.log(searchCity);
//             search = searchCity;
//             console.log(search);
//             getData();
//         });
//     }
// };
// init();

    var cityEl = document.getElementById('city-search');
    var searchButton = document.getElementById('search-button');

//     function hideForecast() {
//       document.getElementById("current-forecast").hidden = true
//       document.getElementById("five-day-forecast").hidden = true
//     }
    
// hideForecast()