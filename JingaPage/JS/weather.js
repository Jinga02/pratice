// 2개의 argument가 필요
// (성공했을 때 함수, 실패했을 때 함수)

const API_KEY = "f48c6628872dd215a9c0cf2e86a5cb1b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const weather = document.querySelector("#weather #tem");
      const state = document.querySelector("#weather #state");
      const city = document.querySelector("#weather #city");
      weather.innerText = `${Math.floor(data.main.temp)}℃`;
      state.innerText = data.weather[0].main;
      city.innerText = data.name;

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      const weatherIcon = document.querySelector("#weather img");
      weatherIcon.src = iconUrl;
    });
}

function onGeoError() {
  alert("현재 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
