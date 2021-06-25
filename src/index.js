// import "./styles.css";

let input = document.querySelector(".input");
let button = document.querySelector(".button");
// let icon = document.querySelector(".icon");
// let city = document.querySelector(".city");
// let temp = document.querySelector(".temperature");

let main = document.createElement("main");
let section = document.createElement("section");
let mainDiv  =document.querySelector(".weather-container");
let body = document.querySelector("body");
const API = '45361a1a64a642e990853840212506';
button.addEventListener("click", getWeather);

function createDay(day){
  let container = document.createElement("div");
  container.classList.add("container");
  let date = document.createElement("div");
  date.classList.add("date");
  date.innerText = `Date : ${day.date}`;
  let icon = document.createElement("img");
  icon.src = day.day.condition.icon;
  // console.log(icon.src);
  let span = document.createElement("span");
  let sup = document.createElement("sup");
  sup.innerText = "o";
  span.innerText = "C";
  let temp = document.createElement("div");
  temp.classList.add("temperature");
  temp.innerText = `Average temperature : ${day.day.avgtemp_c} `;
  temp.appendChild(sup);
  temp.appendChild(span);
  container.appendChild(date);
  container.appendChild(temp);
  container.appendChild(icon);
  mainDiv.appendChild(container);
  body.appendChild(mainDiv);
}

async function getWeather() {
  let topic = input.value;
  // console.log(topic);
  // fetch(`http://api.weatherapi.com/v1/current.json?key=${API}&q=Stara Zagora&aqi=no`).
  // then(response=> console.log(response)).then(data=>console.log)
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${topic}&&days=10&aqi=no&alerts=no`);
    const data = await response.json();
    // console.log(data.forecast[0]);
    let city = document.createElement("div");
    city.classList.add("city");
    city.innerText = `City of ${data.location.name}, ${data.location.country}`;
    main.appendChild(city);
    body.appendChild(main);
    let weather = data.forecast.forecastday;
    for (const key in weather) {
      // console.log(weather[key].day.condition.icon,key);
      createDay(weather[key]);
    }
    // data.forecast.forcastday.forEach(day => {
    //   createDay(day);
    // });
    
    // console.log(data.current.temp_c);
} catch(error){
    console.log(error);
}
}

