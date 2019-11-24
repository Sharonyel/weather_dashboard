// Adding click event listen listener 
var cityList;
var currentDay;
var citySearch;
var cityArry = [];
var i = 0;
var forecastBox = document.getElementById(".forecastTemp")


$("button").on("click", function () {

    citySearch = $("#search-city").val().trim();
    cityArry.push(citySearch);
    $(cityList).empty();
    $(".displayDay").empty();
    $(".weatherInfo").empty();
    // $("p").empty(), $("h2").empty(), $("h4").empty(),
    // $('img').attr('src', ''), $('.forecast').empty();
    $("h4").empty(), $(".forcast").empty();
    $("#search-city").val("");

    
    citySave();
    getWeather();



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
        // storing the data from the AJAX request in the results variable
        // $('img').attr('src', ''), $('.forecast').empty();
        var windSpeed = response.wind.speed;
        var humidity = response.main.humidity;
        var temp = response.main.temp;
        var icon = response.weather[0].icon;
        console.log("icon " + icon)
       var iconImg = $("<img src=http://openweathermap.org/img/wn/" + icon + ".png>")


        var cityDiv = $("<h2>").html(citySearch + "   ");
        var p = ((temp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var dispDate = $("<h2>").html("  " + "(" + currentDay + ")");
        var tempDegrees = $("<p>").html("Temperature: " + n + ' °F');
        var hum = $("<p>").text("Humidity " + humidity + "%");
        var iconDiv = $("<p>").text(icon)
        var wind = $("<p>").text("Wind Speed " + windSpeed);
        
        $(".displayDay").append(cityDiv)
        $(".displayDay").append(dispDate)
        $(".displayDay").append(iconImg);
        $(".weatherInfo").append(tempDegrees);
        $(".weatherInfo").append(wind);
        $(".weatherInfo").append(hum);

        
getFiveday();

    });
}

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

    var foreDay = $("<h4>").html("5-Day Forecast");

    $(".fiveDayFore").append(foreDay);
    $("#fiveDayList").empty();
    // forecastBox.style.display = "inline-flex";
    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayInfo'><p>" + 
    (moment(response.list[1].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[1].weather[0].icon + ".png'> <p>Temp: " + ((response.list[1].main.temp-273)*1.8+32).toFixed() + 
    "°F</p> <p>Humidity: " + response.list[1].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[9].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[9].weather[0].icon + ".png'> <p>Temp: " + ((response.list[9].main.temp-273)*1.8+32).toFixed() + 
    "°F</p> <p>Humidity: " + response.list[9].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[17].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[17].weather[0].icon + ".png'> <p>Temp: " + ((response.list[17].main.temp-273)*1.8+32).toFixed() + 
    "°F</p> <p>Humidity: " + response.list[17].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[25].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[25].weather[0].icon + ".png'> <p>Temp: " + ((response.list[25].main.temp-273)*1.8+32).toFixed() + 
    "°F</p> <p>Humidity: " + response.list[25].main.humidity + "%" + "</p></div>");

    $("#fiveDayList").append("<div class='card bg-primary text-white fiveDay' id='fiveDayList'><p>" + 
    (moment(response.list[33].dt_txt).format("M/D/YYYY")) + "</p> <img src='http://openweathermap.org/img/wn/" + 
    response.list[33].weather[0].icon + ".png'> <p>Temp: " + ((response.list[33].main.temp-273)*1.8+32).toFixed() + 
    "°F</p> <p>Humidity: " + response.list[33].main.humidity + "%" + "</p></div>");

});
}
})

function citySave(){
    
    localStorage.setItem("cities", JSON.stringify(cityArry));
    i++;
    getStored();
}


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
$(".storeCity").on("click", function(event) {
    // button.addEventListener("click", function(event) {

    event.preventDefault();
    var element = event.target;
    if (element.matches("button") === true) {
       console.log("element " + element)
        var buttonText = element.textContent
        console.log("text " + buttonText);
        citySearch = buttonText;

    // getWeather()
    }

  });

// 

var update = function () {
     currentDay = moment().format("MM/DD/YYYY");
     var nextday = currentDay + 1;
     console.log("curd 1 " + nextday)
    
        }
        
        setInterval(update, 1000);
