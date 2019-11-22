// Adding click event listen listener 

var citySearch
var cityArry = [];
var i = 0;
// var currentDay = "";

// function init()
$("button").on("click", function () {

    citySearch = $("#search-city").val().trim();
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
        var icon = response.weather[0].icon;
        console.log("icon " + icon)
    //    var iconImg = $("<img src='http://openweathermap.org/img/wn/10d.png'>")
       var iconImg = $("<img src=http://openweathermap.org/img/wn/" + icon + ".png>")


        var cityDiv = $("<h1>").html(citySearch + "  ");
        var p = ((temp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var tempDegrees = $("<p>").html("Temperature: " + n + '°');
        var hum = $("<p>").text("Humidity " + humidity + "%");
        var iconDiv = $("<p>").text(icon)
        var wind = $("<p>").text("Wind Speed " + windSpeed);

        $(".displayDay").append(cityDiv)
        // $(".displayDay").append(currentDay)

        $(".displayDay").append(iconImg);
  

        // $("#icon").attr("src", iconImg);

        $(".weatherInfo").append(tempDegrees);

        $(".weatherInfo").append(wind);
        $(".weatherInfo").append(hum);

getFiveday();

    });
}

function getFiveday() {
         console.log(queryURLf)
    // Performing an AJAX request with the queryURL

    // for (var f=0; f<5; f++){
    $.ajax({
        url: queryURLf,
        method: "GET"
    })
        .then(function (response) {
            var dateOne = response.list[17].dt_txt
            var forIcon = response.list[17].weather[0].icon;
            var forTemp = response.list[17].main.temp;
            var forHum = response.list[17].main.humidity;
            var iconImgf = $("<img src=http://openweathermap.org/img/wn/" + forIcon + ".png>")
         
        var p = ((forTemp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var forTemperature = $("<h6>").css("color", "white").text("Temp: " + n + "°");
        var forHumidity = $("<h6>").css("color", "white").text("Humidity " + forHum + "%");

            var forDate = $("<h6>").css("color", "white").text(dateOne);
        
 
        $("#dayTwo").append(forDate);
        $("#dayTwo").append(iconImgf);
        $("#dayTwo").append(forTemperature);
        $("#dayTwo").append(forHumidity);

        

});
// }
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





 



