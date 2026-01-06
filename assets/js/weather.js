import setIcon from "../img/weather/wno.js";

function loading($element) {
    $element.style.letterSpacing = "1rem";
    $element.textContent = "";
    const interval = setInterval(() => {
        let dots = $element.textContent;
        if (dots.length == 3) dots = "";
        else dots += ".";
        $element.textContent = dots;
    }, 250);
    function destroy() {
        $element.style.letterSpacing = "normal";
        clearInterval(interval);
    }
    return destroy;
}

class Weather {
    constructor(weatherContainer, iconContainer, locationContainer, refreshInterval = 10) {
        this.$weather = weatherContainer;
        this.$icon = iconContainer;
        this.$location = locationContainer;
        this.refreshInterval = refreshInterval; //minutos
        this.lat = 0;
        this.lon = 0;
        this.country = "";
        this.city = "";
        this.regionName = "";
        this.status = { geo: "unload", weather: "unload" };
        this.statusMessage = "App is unload";
        this.intervalId = null;
    }

    async requestGeolocation() {
        const destroy = loading(this.$location)

        try {
            const resp = await fetch("https://free.freeipapi.com/api/json");
            if (!resp.ok) throw new Error("HTTP Error");
            if (this.$location.classList.contains("warning")) this.$location.classList.remove("warning");

            const data = await resp.json();

            const { latitude, longitude, cityName, countryName, regionName } = data;
            this.lat = latitude;
            this.lon = longitude;
            this.city = cityName;
            this.country = countryName;
            this.regionName = regionName;

            const location = `${this.city}, ${this.country}`;

            destroy()
            if (location != this.$location.textContent)
                this.$location.textContent = location;

            this.status.geo = "loaded";
            this.statusMessage = null;

        } catch (e) {
            destroy()
            this.$location.textContent = "No se pudo cargar localización";
            this.$location.classList.add("warning");

            this.status.geo = "error";
            this.statusMessage = "Could not obtain IP information";
            console.error(this.statusMessage);
        }
    }

    async fetchWeather(lat = this.lat, lon = this.lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&timezone=auto&forecast_days=1`
        const destroy = loading(this.$weather)

        try {
            const resp = await fetch(url);
            if (!resp.ok) throw new Error("HTTP Error");

            if (this.$weather.classList.contains("warning")) this.$weather.classList.remove("warning");

            const data = await resp.json();
            const { temperature_2m, weather_code, is_day } = data.current;

            destroy()
            this.$weather.textContent = `${temperature_2m}˚`;
            // this.$icon.innerHTML = "";
            this.$icon.style.backgroundImage = setIcon(weather_code, is_day);

            this.status.weather = "loaded";
            this.statusMessage = null;

        } catch (e) {
            destroy();
            this.$weather.textContent = "Not available, trying again in 10 minutes";
            this.$weather.classList.add("warning");

            this.status.weather = "error";
            this.statusMessage = "Could not obtain weather information";

            console.error(this.statusMessage);
        }
    }

    async update() {
        if (this.status.geo !== "loaded") return;
        if (this.intervalId) return;

        const run = async () => {
            await this.fetchWeather(this.lat, this.lon);

            if (this.status.weather !== "loaded") {
                setTimeout(run, this.refreshInterval * 60 * 1000);
                return;
            }
        };

        await run();

        this.intervalId = setInterval(run, this.refreshInterval * 60 * 1000);

    }

    async init() {
        await this.requestGeolocation();
        if (this.status.geo === "loaded") {
            // await this.fetchWeather(this.lat, this.lon);
            await this.update();
        }
        else
            console.error(this.statusMessage);
    }
}

export default Weather;