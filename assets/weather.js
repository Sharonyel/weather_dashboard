// Adding click event listen listener 

var citySearch
var cityArry = [];
var i = 0;

// function init()
$("button").on("click", function () {

    citySearch = $("#search-city").val().trim();
    // $("#search-city") = "";
 cityArry = citySearch;


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169";
var queryURLf =  "https://api.openweathermap.org/data/2.5/forecast?q=" +
    citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169";

    getWeather();
    citySave(citySearch);

// Performing an AJAX request with the queryURL
function getWeather(){
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        console.log(response);
        // storing the data from the AJAX request in the results variable

        var windSpeed = response.wind.speed;
        var humidity = response.main.humidity;
        var temp = response.main.temp;
        var icon = response.weather.icon;

        var cityDiv = $("<h1>").html(citySearch);
        var p = ((temp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var tempDegrees = $("<p>").text("Temperature: " + n);

        var hum = $("<p>").text("humidity " + humidity + "%");

        var wind = $("<p>").text("wind speed " + windSpeed);

        $(".displayDay").append(cityDiv);
        $(".weatherInfo").append(tempDegrees);
        $(".weatherInfo").append(wind);
        $(".weatherInfo").append(hum);

getFiveday();

    });
}

function getFiveday() {
         console.log(queryURLf)
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURLf,
        method: "GET"
    })
        .then(function (response) {
            console.log("-------")
            console.log(response)
            var dateOne = response.list[0].dt_txt;
            // var forIcon = response.weather.icon;
            var forTemp = response.list[0].main.temp;
            var forHum = response.list[0].main.humidity;

        console.log("Temperature " + forTemp)
        console.log("Humidity " + forHum)
        console.log("date " + dateOne)
        //   console.log("icon " + forIcon)
        
        var p = ((forTemp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var forTemperature = $("<p>").text("Temperature: " + n);
        
        $("#dayOne").append(dateOne);
        $("#dayOne").append(forTemperature);
        $("#dayOne").append(forHum);

});
}

})

function citySave(){
    // 
    var cityList = $('<label>' + cityArry + '</label>')
    
    $ (".storeCity").append(cityList);

    localStorage.setItem(i, JSON.stringify(cityArry));
    i++;
    
    $("label").on("click", function () {
        alert("clicked")

       

    }
    )}





 



