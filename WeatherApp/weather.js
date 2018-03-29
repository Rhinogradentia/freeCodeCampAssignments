function fetchLoc() {
    var loc = [];
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            loc.push(position.coords.longitude);
            loc.push(position.coords.latitude)
        });

    }
    return loc;
}

function fetchWeather(location) {
    var long = location[0];
    var lat = location[1];
    var html = "";

    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, function (json) {

        // { "coord":{ "lon":159, "lat":35 }, "weather":[ { "id":500, "main":"Rain", "description":"light rain", "icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F10n.png?1499366021399" } ], "base":"stations", "main":{ "temp":22.59, "pressure":1027.45, "humidity":100, "temp_min":22.59, "temp_max":22.59, "sea_level":1027.47, "grnd_level":1027.45 }, "wind":{ "speed":8.12, "deg":246.503 }, "rain":{ "3h":0.45 }, "clouds":{ "all":92 }, "dt":1499521932, "sys":{ "message":0.0034, "sunrise":1499451436, "sunset":1499503246 }, "id":0, "name":"", "cod":200 }

        html += "<p>" + json.coord.lon + "</p>";

        //$("#location-text").html(html);
        $("#location-text").html(JSON.stringify(json));
    });
}

$(document).ready(function () {
            //var location = fetchLoc(); // returns coordinate array: 1. longitute 2. latitude
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            loc.push(position.coords.longitude);
            loc.push(position.coords.latitude)
        });
    }
            //fetchWeather(location);
});