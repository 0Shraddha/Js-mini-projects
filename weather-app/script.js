// API CALL
// key : 590f125b2ee7dcb4f16112a834b11e68
// how to make api call:
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=590f125b2ee7dcb4f16112a834b11e68&units=metric



const api_key = "590f125b2ee7dcb4f16112a834b11e68";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeater(city) {
  const response = await fetch(api_url + city +`&appid=${api_key}`);
 

  if(response.status == 404){
    $(".error").css("display", "block");
    $(".weather").css("display","none");
  }else{
    var data = await response.json();
    console.log(data);

    $(".temp").html(Math.round(data.main.temp) + "&deg;c");
    $(".feels-like").text("Feels like " + data.main.feels_like);
  
    $(".city").text(data.name);
  
    $(".humidity").text(data.main.humidity + "%");
    $(".wind").text(data.wind.speed + " km/h");
  
    const sunrise = data.sys.sunrise;
    const date1 = new Date(sunrise*1000);
    const sunriseDate = date1.toLocaleString();

    const sunset = data.sys.sunset;
    const date2 = new Date(sunset*1000);
    const sunsetDate = date2.toLocaleString();

    $(".sunrise").text(sunriseDate);
    $(".sunset").text(sunsetDate);

    const weatherIcon = $("img.weather-icon");
    if (data.weather[0].main == 'Clouds') {
      weatherIcon.attr('src', "./image/cloud-fill.svg");
    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.attr('src', "./image/sunny.svg");
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.attr('src', "./image/cloud-rain-fill.svg");
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.attr('src', "./image/cloud-sun-fill.svg");
    } else {
      weatherIcon.attr('src', "./image/snow2.svg");
    }

    $(".error").css("display", "none");

  }
  
}

const weatherBox = $(".weather");
const searchBox = $(".search input");

const city = $(".search-btn").click(function onclick_func() {
  checkWeater(searchBox.val());
  weatherBox.css("display","block");
});
