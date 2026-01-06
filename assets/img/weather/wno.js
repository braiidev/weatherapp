const url = "https://rodrigokamada.github.io/openweathermap/images/"
const wmoicons = {
    "0": {
        day: {
            description: "Sunny",
            image: `${url}01d_t.png`,
        },
        night: {
            description: "Clear",
            image: `${url}01n_t.png`,
        },
    },
    "1": {
        day: {
            description: "Mainly Sunny",
            image: `${url}01d_t.png`,
        },
        night: {
            description: "Mainly Clear",
            image: `${url}01n_t.png`,
        },
    },
    "2": {
        day: {
            description: "Partly Cloudy",
            image: `${url}02d_t.png`,
        },
        night: {
            description: "Partly Cloudy",
            image: `${url}02n_t.png`,
        },
    },
    "3": {
        day: {
            description: "Cloudy",
            image: `${url}03d_t.png`,
        },
        night: {
            description: "Cloudy",
            image: `${url}03n_t.png`,
        },
    },
    "45": {
        day: {
            description: "Foggy",
            image: `${url}50d_t.png`,
        },
        night: {
            description: "Foggy",
            image: `${url}50n_t.png`,
        },
    },
    "48": {
        day: {
            description: "Rime Fog",
            image: `${url}50d_t.png`,
        },
        night: {
            description: "Rime Fog",
            image: `${url}50n_t.png`,
        },
    },
    "51": {
        day: {
            description: "Light Drizzle",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Light Drizzle",
            image: `${url}09n_t.png`,
        },
    },
    "53": {
        day: {
            description: "Drizzle",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Drizzle",
            image: `${url}09n_t.png`,
        },
    },
    "55": {
        day: {
            description: "Heavy Drizzle",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Heavy Drizzle",
            image: `${url}09n_t.png`,
        },
    },
    "56": {
        day: {
            description: "Light Freezing Drizzle",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Light Freezing Drizzle",
            image: `${url}09n_t.png`,
        },
    },
    "57": {
        day: {
            description: "Freezing Drizzle",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Freezing Drizzle",
            image: `${url}09n_t.png`,
        },
    },
    "61": {
        day: {
            description: "Light Rain",
            image: `${url}10d_t.png`,
        },
        night: {
            description: "Light Rain",
            image: `${url}10n_t.png`,
        },
    },
    "63": {
        day: {
            description: "Rain",
            image: `${url}10d_t.png`,
        },
        night: {
            description: "Rain",
            image: `${url}10n_t.png`,
        },
    },
    "65": {
        day: {
            description: "Heavy Rain",
            image: `${url}10d_t.png`,
        },
        night: {
            description: "Heavy Rain",
            image: `${url}10n_t.png`,
        },
    },
    "66": {
        day: {
            description: "Light Freezing Rain",
            image: `${url}10d_t.png`,
        },
        night: {
            description: "Light Freezing Rain",
            image: `${url}10n_t.png`,
        },
    },
    "67": {
        day: {
            description: "Freezing Rain",
            image: `${url}10d_t.png`,
        },
        night: {
            description: "Freezing Rain",
            image: `${url}10n_t.png`,
        },
    },
    "71": {
        day: {
            description: "Light Snow",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Light Snow",
            image: `${url}13n_t.png`,
        },
    },
    "73": {
        day: {
            description: "Snow",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Snow",
            image: `${url}13n_t.png`,
        },
    },
    "75": {
        day: {
            description: "Heavy Snow",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Heavy Snow",
            image: `${url}13n_t.png`,
        },
    },
    "77": {
        day: {
            description: "Snow Grains",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Snow Grains",
            image: `${url}13n_t.png`,
        },
    },
    "80": {
        day: {
            description: "Light Showers",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Light Showers",
            image: `${url}09n_t.png`,
        },
    },
    "81": {
        day: {
            description: "Showers",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Showers",
            image: `${url}09n_t.png`,
        },
    },
    "82": {
        day: {
            description: "Heavy Showers",
            image: `${url}09d_t.png`,
        },
        night: {
            description: "Heavy Showers",
            image: `${url}09n_t.png`,
        },
    },
    "85": {
        day: {
            description: "Light Snow Showers",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Light Snow Showers",
            image: `${url}13n_t.png`,
        },
    },
    "86": {
        day: {
            description: "Snow Showers",
            image: `${url}13d_t.png`,
        },
        night: {
            description: "Snow Showers",
            image: `${url}13n_t.png`,
        },
    },
    "95": {
        day: {
            description: "Thunderstorm",
            image: `${url}11d_t.png`,
        },
        night: {
            description: "Thunderstorm",
            image: `${url}11n_t.png`,
        },
    },
    "96": {
        day: {
            description: "Light Thunderstorms With Hail",
            image: `${url}11d_t.png`,
        },
        night: {
            description: "Light Thunderstorms With Hail",
            image: `${url}11n_t.png`,
        },
    },
    "99": {
        day: {
            description: "Thunderstorm With Hail",
            image: `${url}11d_t.png`,
        },
        night: {
            description: "Thunderstorm With Hail",
            image: `${url}11n_t.png`,
        },
    },
};
function setIcon(code, isDay) {
    const weather = wmoicons[code];
    if (!weather) return
    const timeOfDay = isDay ? "day" : "night";
    const { description, image } = weather[timeOfDay];
    
    return `url('${image}')`;
}

export default setIcon;

// Day/Night codes
// 0 - Clear sky
// 1 - Mainly clear
// 2 - Partly cloudy
// 3 - Overcast
// 45 - Fog
// 48 - Depositing rime fog
// 51 - Light drizzle
// 53 - Moderate drizzle
// 55 - Dense intensity drizzle
// 56 - Light freezing drizzle
// 57 - Dense intensity freezing drizzle
// 61 - Slight rain
// 63 - Moderate rain
// 65 - Heavy intensity rain
// 66 - Light freezing rain
// 67 - Heavy intensity freezing rain
// 71 - Slight snow fall
// 73 - Moderate snow fall
// 75 - Heavy intensity snow fall
// 77 - Snow grains
// 80 - Slight rain showers
// 81 - Moderate rain showers
// 82 - Violent rain showers
// 85 - Slight snow showers
// 86 - Heavy snow showers
// 95 - Thunderstorm
// 96 - Thunderstorm with slight hail
// 99 - Thunderstorm with heavy hail
