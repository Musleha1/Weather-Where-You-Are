// global variables
// create local storage
// render HTML
// click event listeners 
// search histoty
// link buttons
// append history as button below search field
// use moment to create date
// icons for weather
// convert from K to celcius
// call for 5 day forecast
// display temperature 
// display humidity


// API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// URL to query the database
var openURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=" + APIKey;

var geoURL = "http://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=" + APIKey;


// AJAX call to the OpenWeatherMap API
$.ajax({
  url: openURL, geoURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
// Log the queryURL
    console.log(openURL);
    console.log(geoURL);

// // Log the resulting object
//     // console.log(response);
 })
//     // Transfer content to HTML
//     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
    
//     // Convert the temp to Celsius
//     var tempC = response.main.temp - 273.15;

//     // add temp content to html
//     $(".temp").text("Temperature (K) " + response.main.temp);
//     $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

//     // Log the data in the console as well
//     console.log("Wind Speed: " + response.wind.speed);
//     console.log("Humidity: " + response.main.humidity);
//     console.log("Temperature (C): " + tempC);
//   // });

// // Here we are building the URL we need to query the database
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
//   "q=Bujumbura,Burundi&appid=" + APIKey;

// // Here we run our AJAX call to the OpenWeatherMap API
// $.ajax({
//   url: queryURL,
//   method: "GET"
// })
//   // We store all of the retrieved data inside of an object called "response"
//   .then(function(response) {

//     // Log the queryURL
//     console.log(queryURL);

//     // Log the resulting object
//     console.log(response);

//     // Transfer content to HTML
//     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//     $(".wind").text("Wind Speed: " + response.wind.speed);
//     $(".humidity").text("Humidity: " + response.main.humidity);
    
//     // Convert the temp to Celsius
//     var tempC = response.main.temp - 273.15;

//     // add temp content to html
//     $(".temp").text("Temperature (K) " + response.main.temp);
//     $(".tempC").text("Temperature (C) " + tempC.toFixed(2));

//     // Log the data in the console as well
//     console.log("Wind Speed: " + response.wind.speed);
//     console.log("Humidity: " + response.main.humidity);
//     console.log("Temperature (C): " + tempC);
// });