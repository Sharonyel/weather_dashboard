// Variables
var cityList;
var currentDay;
var citySearch;
var cityArry = [];

// localStorage.setItem("cities", JSON.stringify(cityArry));

getStored();

$(".storeCity").empty();

var cities = JSON.parse(localStorage.getItem("cities"))
 citySearch = cities[cities.length-1];
 $(cityList).empty();
 $(".displayDay").empty();
 $(".weatherInfo").empty();
 $("h4").empty(), $(".forcast").empty();

 getWeather();

$("button").on("click", function () {

    citySearch = $("#search-city").val().trim();
    cityArry.push(citySearch);
    $(cityList).empty();
    $(".displayDay").empty();
    $(".weatherInfo").empty();
    $("h4").empty(), $(".forcast").empty();
    $("#search-city").val("");

    citySave();
    getWeather();
})

// Performing an AJAX request with the queryURL
function getWeather(){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        console.log(response);

        $(".displayDay").append("<h1>").html(citySearch + "   " + "(" + moment().format("MM/DD/YYYY") + ")" + 
        "<img src=http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png>")

        $(".weatherInfo").append("<p class='dispCurr'>Temperature: " + ((response.main.temp-273)*1.8+32).toFixed(1) + "°F</p>"); 
        $(".weatherInfo").append("<p class='dispCurr'>Humidity " + response.main.humidity + "%");
        $(".weatherInfo").append("<p class='dispCurr'>Wind Speed " + response.wind.speed + " MPH");
      
getFiveday();

    });
}
// Get the 5 day forecast information
function getFiveday() {
         console.log(queryURLf)

         var queryURLf =  "https://api.openweathermap.org/data/2.5/forecast?q=" +
         citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169";
    // Performing an AJAX request with the queryURL

    $.ajax({
        url: queryURLf,
        method: "GET"
    })
        .then(function (response) {

// Display 5 day Forecast

    $(".fiveDayFore").append("<h4>5-Day Forecast:</h4>");
    $("#fiveDayList").empty();
  
    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayInfo'><p>" + 
    (moment(response.list[1].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[1].weather[0].icon + ".png'> <p>Temp: " + ((response.list[1].main.temp-273)*1.8+32).toFixed(2) + 
    "°F</p> <p>Humidity: " + response.list[1].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[9].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[9].weather[0].icon + ".png'> <p>Temp: " + ((response.list[9].main.temp-273)*1.8+32).toFixed(2) + 
    "°F</p> <p>Humidity: " + response.list[9].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[17].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[17].weather[0].icon + ".png'> <p>Temp: " + ((response.list[17].main.temp-273)*1.8+32).toFixed(2) + 
    "°F</p> <p>Humidity: " + response.list[17].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[25].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[25].weather[0].icon + ".png'> <p>Temp: " + ((response.list[25].main.temp-273)*1.8+32).toFixed(2) + 
    "°F</p> <p>Humidity: " + response.list[25].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[33].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[33].weather[0].icon + ".png'> <p>Temp: " + ((response.list[33].main.temp-273)*1.8+32).toFixed(2) + 
    "°F</p> <p>Humidity: " + response.list[33].main.humidity + "%" + "</p></div>");

});
}


function citySave(){
    
    localStorage.setItem("cities", JSON.stringify(cityArry));
  
    getStored();
}

// Get stored cities and display them on the search history list
function getStored() {

    $(".storeCity").empty();

    var cities = JSON.parse(localStorage.getItem("cities"))
    for (var g = 0; g < cities.length; g++) {
        
    var city = cities[g];

    var cityList = document.createElement("p")
    cityList.setAttribute("data-index", g);
    var button = document.createElement("button")
    button.className += "cityBtn";
    button.textContent = city;
    cityList.append(button);


    $(".storeCity").prepend(cityList);
 
    }
    
}

// Search city from the search history list
$(".storeCity").on("click", function(event) {

    event.preventDefault();
    var element = event.target;
    if (element.matches("button") === true) {
       console.log("element " + element)
        var buttonText = element.textContent
        console.log("text " + buttonText);
        citySearch = buttonText;
  
    }
    $(".displayDay").empty();
    $(".weatherInfo").empty();
    $("h4").empty(), $(".forcast").empty();

    citySave();
    getWeather();

  });
var update = function () {
    
        }
        
        setInterval(update, 1000);
