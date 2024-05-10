'use-strict';

// Seleccionar elementos del DOM utilizando JavaScript
const $location = document.getElementById("location");
const $temperature = document.getElementById("currentTempWeather");
const $icon = document.getElementById("currentImageWeather");
const $resume = document.getElementById("weatherResume");
const $humidity = document.getElementById("humidity");
const $wind = document.getElementById("wind");
const $rain = document.getElementById("rain");

// Definir la función request dentro de un bloque async
const request = async (url, params) => {
    const _url = url.includes('http') ? new URL(url) : url;
    if (params) {
        Object.keys(params).forEach(param => _url.searchParams.append(param, params[param]));
    }

    const response = await fetch(_url);
    if (!response.ok) {
        throw new Error("Error", response.status);
    }
    const data = await response.json();
    return data;
}

// Invocar la función request dentro de un bloque async
(async () => {
    try {
        const { weather } = await request("assets/data/requests.json");
        const result = await request(weather.url + weather.locationKey, weather.search);
        UpdateWeather(result);
        setInterval(() => UpdateWeather(result), 360000);
    } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
    }
})();

// Definir la función UpdateWeather que toma un parámetro result
function formatNumber(number){
    return number < 10? `0${number}` : number.toString();
}
function UpdateWeather(result) {
    const [current] = result;
    const iconNumber = formatNumber(current.WeatherIcon)
    $temperature.textContent = `${current.RealFeelTemperature.Metric.Value}ºC`;
    $resume.textContent = `${current.RealFeelTemperature.Metric.Phrase} | ${current.WeatherText}`;
    $humidity.textContent = `${current.RelativeHumidity}%`;
    $wind.textContent = `${current.WindGust.Speed.Metric.Value} km/h`;
    $rain.textContent = `${current.Precip1hr.Metric.Value} mm`;
    $icon.src= `assets/img/weather/${iconNumber}.png`
    console.log(result);
}
