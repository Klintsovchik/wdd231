const currentTemp =
  document.querySelector("#current-temp");

const weatherIcon =
  document.querySelector("#weather-icon");

const captionDesc =
  document.querySelector("figcaption");


const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=41.64&lon=41.64&units=metric&appid=a9bff98ceec9460716c872d62fef39bf";


async function apiFetch() {
  try {
    const response =
      await fetch(url);

    if (response.ok) {
      const data =
        await response.json();

      console.log(data);

      displayResults(data);

    } else {
      throw Error(
        await response.text()
      );
    }

  } catch (error) {
    console.log(error);
  }
}


function displayResults(data) {
  currentTemp.innerHTML =
    `${data.main.temp}&deg;C`;

  const iconsrc =
    `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const desc =
    data.weather[0].description;

  weatherIcon.setAttribute(
    "src",
    iconsrc
  );

  weatherIcon.setAttribute(
    "alt",
    desc
  );

  captionDesc.textContent =
    desc;
}


apiFetch();