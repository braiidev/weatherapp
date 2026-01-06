const DAYS = { "0": "Domingo", "1": "Lunes", "2": "Martes", "3": "Miercoles", "4": "Jueves", "5": "Viernes", "6": "Sábado" }

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

            const _dayName_ = DAYS[_time_.getDay()]
            if (_dayName_ != this.day.textContent)
                this.day.textContent = _dayName_;
        }, 100);
    }
}

export default Clock;