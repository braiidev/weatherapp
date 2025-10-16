import Clock from "./clock.js";
import Weather from "./weather.js";

const $ = (x) => document.querySelector(x);

const $time = $("#time");
const $weather = $("#weather");
const $icon = $("#icon");
const $background = $("#background");

//Clock
const clock = new Clock($time);
clock.start();


//Weather
const weather = new Weather($weather, $icon);
weather.init();

// Background
// const backgrounds = 