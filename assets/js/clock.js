class Clock{
    constructor(element){
        this.element = element;
    }
    start(){
        setInterval(() => {
            const _time_ = new Date();
            const minutes =
              _time_.getMinutes() < 10
                ? `0${_time_.getMinutes()}`
                : _time_.getMinutes();
            const hours = _time_.getHours();
            this.element.textContent = `${hours}:${minutes}`;
          }, 100);
    }
}

export default Clock;