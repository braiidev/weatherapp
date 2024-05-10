const $ = id => document.getElementById(id)


const $hours = $("hours")
const $minutes = $("minutes")
const $seconds = $("seconds")
const $meridiem = $("meridiem")
const $currentDay = $("currentDay")

const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];


setInterval(()=>{
    const currentDate = new Date()
    const format = nmb => nmb >= 10 ? nmb : `0${nmb}`
    $hours.textContent = format(currentDate.getHours());
    $minutes.textContent = format(currentDate.getMinutes());
    $meridiem.textContent = currentDate.getHours()>12?"pm":"am"
    const day = days[currentDate.getDay()],
        month = months[currentDate.getMonth()],
        dayOfMonth = currentDate.getDate();
    $currentDay.textContent = `${day} ${dayOfMonth} de ${month}`;
}, 100)
