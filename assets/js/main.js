import Clock from "./clock.js";
import Weather from "./weather.js";
import changeBackground from "./background.js";

const $ = (x) => document.querySelector(x);

const $time = $("#time");
const $weather = $("#weather");
const $icon = $("#icon");
const $location = $("#location");
const $background = $("#background");

//Clock
const clock = new Clock($time);
clock.start();


//Weather
const weather = new Weather($weather, $icon, $location);
weather.init();

// Background
const background = new changeBackground($background);
background.start(); 