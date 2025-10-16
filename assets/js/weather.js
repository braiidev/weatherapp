import setIcon from "../img/weather/wno.js";

class Weather {
    constructor(weatherContainer, iconContainer, refreshInterval = 30) {
        this.$weather = weatherContainer;
        this.$icon = iconContainer;
        this.refreshInterval = refreshInterval; //minutos
        this.lat = 0;
        this.lon = 0;
        this.country = "";
        this.city = "";
        this.regionName = "";
        this.ready = false;
    }
    requestGeolocation() {
        window.getGeolocation = (data) => {
            if (data.status !== "success") {
                console.error("No se pudo obtener la geolocalización");
                return;
            }
            const { lat, lon, city, country, regionName } = data;
            this.lat = lat;
            this.lon = lon;
            this.city = city;
            this.country = country;
            this.regionName = regionName;
            this.ready = true;
        }
    }
    fetchWeather(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&timezone=auto&forecast_days=1`
        fetch(url).then((response) => response.json()).then((data) => {
            const { temperature_2m, weather_code, is_day } = data.current;
            this.$weather.textContent = `${temperature_2m}˚`;
            this.$icon.innerHTML = "";
            this.$icon.style.backgroundImage = setIcon(weather_code, is_day);
        });
    }
    update() {
        const interval = setInterval(() => {
            if (this.ready) {
                clearInterval(interval);
                this.fetchWeather(this.lat, this.lon);
            }
            else clearInterval(interval);
        }, this.refreshInterval * 1000 * 60);
    }
    init() {
        this.requestGeolocation();
        const requestGeolocacion = document.createElement("script");
        requestGeolocacion.src = "http://ip-api.com/json/?callback=getGeolocation";
        document.body.appendChild(requestGeolocacion);
        this.fetchWeather(this.lat, this.lon);
        this.update();

    }
}

export default Weather;