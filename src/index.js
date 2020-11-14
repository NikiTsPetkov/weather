let lat;
let long;
let tempElement = document.querySelector(".temp");
let iconElement = document.querySelector(".icon-weather");
let descriptionElement = document.querySelector(".description");

navigator.geolocation.getCurrentPosition(function success(pos) {
  let crd = pos.coords;
  lat = crd.latitude;
  long = crd.longitude;
  console.log(navigator.geolocation);
  const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=bg&appid=dc6dc56f21ed3653b7e86f684277327b`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      tempElement.innerHTML = Math.round(data.main.temp - 273.15);
      iconElement.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      descriptionElement.innerHTML = data.weather[0].description;
    });
});
