import { getPosition, request, toNumber } from "./fetchTool.js";

// Seleccionar elementos del DOM utilizando JavaScript
const $location = document.getElementById("location");
const $temperature = document.getElementById("currentTempWeather");
const $icon = document.getElementById("currentImageWeather");
const $resume = document.getElementById("weatherResume");
const $humidity = document.getElementById("humidity");
const $wind = document.getElementById("wind");
const $rain = document.getElementById("rain");

const { weather, geoposition } = await request({
  url: "/assets/data/weather.json",
});

// geoposition.search.apikey = "jHKrQvqpHKFdmMdP12FLXZdR4KgUIJa4";
// weather.search.apikey = "jHKrQvqpHKFdmMdP12FLXZdR4KgUIJa4";
geoposition.search.apikey = "mGTI9H6E5bAwLGWsYlXyQ3HE4iTZvruW";
weather.search.apikey = "mGTI9H6E5bAwLGWsYlXyQ3HE4iTZvruW";

async function Update() {
  await getPosition((pos) => {
    geoposition.search.q = `${pos.coords.latitude},${pos.coords.longitude}`;
    request(geoposition, (g) => {
      weather.url += g.Key;
      request(weather, (w) => {
        w = w[0]
        $location.textContent = `${g.LocalizedName} - ${g.AdministrativeArea.LocalizedName}`;
        $temperature.textContent = `${w.Temperature.Metric.Value}ºC`;
        $resume.textContent = `${w.RealFeelTemperature.Metric.Phrase} | ${w.WeatherText}`;
        $humidity.textContent = `${w.RelativeHumidity}%`;
        $wind.textContent = `${w.Wind.Speed.Metric.Value} km/h`;
        $rain.textContent = `${w.Precip1hr.Metric.Value} mm`;
        $icon.src = `assets/img/weather/${toNumber(w.WeatherIcon)}.png`;
      });
    });
  });
}

Update();
setInterval(Update, 600000);
