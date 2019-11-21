// Adding click event listen listener to all buttons
$("button").on("click", function () {
    console.log("here weather")

    var citySearch = $("#search-city")
        .val()
        .trim();

// Constructing a queryURL using the search city

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169";

console.log(queryURL);
// Performing an AJAX request with the queryURL
$.ajax({
    url: queryURL,
    method: "GET"
})
    // After data comes back from the request
    .then(function (response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable

        var windSpeed = response.wind.speed;
        var humidity = response.main.humidity;
        var temp = response.main.temp;
        //   var icon = response.weather.icon;

        // console.log("Temperature " + temp)
        // console.log("Humidity " + humidity)
        // console.log("Wind speed" + windSpeed)
        //   console.log("icon " + icon)

        // Looping through each result item
        //   for (var i = 0; i < results.length; i++) {

        //     // Creating and storing a div tag
        var cityDiv = $("<div>").text(citySearch);

        //     // Creating a paragraph tag with the result item's rating



        var p = ((temp - 273) * 1.8) + 32;
        var n = p.toFixed();
        var tempDegrees = $("<p>").text("Temperature: " + n);

        var hum = $("<p>").text("humidity " + humidity + "%");

        var wind = $("<p>").text("wind speed " + windSpeed);

        $("#cityDisplay").append(cityDiv);
        $(".dispTemp").append(tempDegrees);
        $(".dispWind").append(wind);
        $(".dispHumd").append(hum);


getFiveday();

    });

function getFiveday() {
console.log("fiveday")

  var queryURLf =  "https://api.openweathermap.org/data/2.5/forecast?q=" +
         citySearch + "&appid=0a3f6592d9795a08c339db24e4efc169"

         console.log(queryURLf)

    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURLf,
        method: "GET"
    })
        .then(function (response) {
            console.log("-------")
            console.log(response)

});
}
})
