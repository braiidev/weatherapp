const DAYS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const MONTH = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
class Clock {
    constructor(clockContainer, dayContainer) {
        this.clock = clockContainer;
        this.day = dayContainer;
    }
    start() {
        setInterval(() => {
            const _time_ = new Date();
            const minutes =
                _time_.getMinutes() < 10
                    ? `0${_time_.getMinutes()}`
                    : _time_.getMinutes();
            const hours = _time_.getHours();
            const push = `${hours}:${minutes}`
            if (push != this.clock.textContent) this.clock.textContent = push;

            const day = _time_.getDate()
            const _dayName_ = `${DAYS[_time_.getDay()]} ${day} de ${MONTH[_time_.getMonth()]}`;
            if (_dayName_ != this.day.textContent)
                this.day.textContent = _dayName_;
        }, 100);
    }
}

export default Clock;