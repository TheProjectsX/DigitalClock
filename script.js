// Const Variables
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const period = document.getElementById("period");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Script helper Varibales
let currentHour, currentMinute, currentSecond, currentPeriod, currentDay, currentMonth, currentYear

// Update time
function updateTime() {
    let timeNow = new Date();

    currentHour = timeNow.getHours();
    currentPeriod = "AM"
    if (currentHour > 12) {
        currentPeriod = "PM"
        currentHour -= 12;
    }

    currentMinute = timeNow.getMinutes();
    currentSecond = timeNow.getSeconds();

    currentDay = timeNow.getDay();
    currentMonth = timeNow.getMonth();
    currentYear = timeNow.getFullYear();

    setTime();
}

// Set Time
function setTime() {
    hour.innerText = currentHour.toString().length < 2 ? "0" + currentHour : currentHour;
    minute.innerText = currentMinute.toString().length < 2 ? "0" + currentMinute : currentMinute;
    second.innerText = currentSecond.toString().length < 2 ? "0" + currentSecond : currentSecond;
    period.innerText = currentPeriod;

    day.innerText = currentDay.toString().length < 2 ? "0" + currentDay : currentDay;
    month.innerText = currentMonth.toString().length < 2 ? "0" + currentMonth : currentMonth;
    year.innerText = currentYear;
}


// Change link color every 0.1 second
const root = document.documentElement;

let hua = Math.floor(Math.random() * 358);

function changeColor() {
    setInterval(() => {
        root.style.setProperty("--hua", hua + "deg");

        hua += 3;
        if (hua > 358) {
            hua = 0;
        }
    }, 100);
}

changeColor();

updateTime();

setInterval(() => {
    updateTime();
}, 1000);
