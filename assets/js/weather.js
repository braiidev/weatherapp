import setIcon from "../img/weather/wno.js";

class Weather {
    constructor(weatherContainer, iconContainer, locationContainer, refreshInterval = 10) {
        this.$weather = weatherContainer;
        this.$icon = iconContainer;
        this.$location = locationContainer ?? null;
        this.refreshInterval = refreshInterval; //minutos
        this.lat = 0;
        this.lon = 0;
        this.country = "";
        this.city = "";
        this.regionName = "";
        this.ready = false;
    }
    async requestGeolocation(){
        fetch("https://free.freeipapi.com/api/json").then((response) => response.json()).then((data) => {
            const { latitude, longitude, cityName, countryName, regionName } = data;
            this.lat = latitude;
            this.lon = longitude;
            this.city = cityName;
            this.country = countryName;
            this.regionName = regionName;
            this.ready = true;   
            this.fetchWeather(this.lat, this.lon);    
            if(this.$location) this.$location.textContent = `${this.city}, ${this.country}`;     
        });
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
                this.fetchWeather(this.lat, this.lon);
            }
            else clearInterval(interval);
        }, this.refreshInterval * 1000 * 60);
    }
    init() {
        this.requestGeolocation();
        this.update();
    }
}

export default Weather;