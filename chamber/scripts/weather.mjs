
const key = "a9bff98ceec9460716c872d62fef39bf";
const lat = 41.6168;
const lon = 41.6367;

const weatherUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;

const forecastUrl =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;


export async function showWeather() {
  try {
    const current = await (await fetch(weatherUrl)).json();
    const forecast = await (await fetch(forecastUrl)).json();

    displayCurrent(current);
    displayForecast(forecast.list);
  } catch (error) {
    console.log(error);
  }
}


function displayCurrent(data) {
  document.querySelector("#current-temp").textContent =
    `${Math.round(data.main.temp)}\u00B0C`;

  document.querySelector("#current-desc").textContent =
    data.weather[0].description;

  const icon = document.querySelector("#weather-icon");

  icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.alt = data.weather[0].description;
}


function displayForecast(list) {
  const forecastList = document.querySelector("#forecast-list");

  const today = new Date().getDate();

  const days = list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .filter(item => new Date(item.dt * 1000).getDate() !== today)
    .slice(0, 3);

  days.forEach(day => {
    const date = new Date(day.dt * 1000);

    const item = document.createElement("li");

    item.innerHTML = `
      ${date.toLocaleDateString("en-US", { weekday: "long" })}<br>
      <strong>${Math.round(day.main.temp)}\u00B0C</strong>
    `;

    forecastList.appendChild(item);
  });
}
