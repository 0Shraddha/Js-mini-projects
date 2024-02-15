// API CALL
// key : 590f125b2ee7dcb4f16112a834b11e68
// how to make api call:
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=590f125b2ee7dcb4f16112a834b11e68&units=metric



const api_key = "590f125b2ee7dcb4f16112a834b11e68";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function checkWeater(city) {
  const response = await fetch(api_url + city +`&appid=${api_key}`);
  var data = await response.json();
  console.log(data);

  $(".temp").html(Math.round(data.main.temp) + "&deg;c");
  $(".feels-like").text("Feels like " + data.main.feels_like);

  $(".city").text(data.name);

  $(".humidity").text(data.main.humidity + "%");
  $(".wind").text(data.wind.speed + " km/h");
}

const searchBox = $(".search input");
const city = $(".search-btn").click(function onclick_func() {
    checkWeater(searchBox.val());
});
