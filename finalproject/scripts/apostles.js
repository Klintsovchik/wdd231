import "./main.js";
import { getData } from "./data.js";
import { showApostle } from "./modal.js";

const list = document.querySelector("#apostle-list");
const filter = document.querySelector("#group-filter");

let apostles = [];

function displayApostles() {
  const group = filter.value;
  const shown = group === "all"
    ? apostles
    : apostles.filter(apostle => apostle.group === group);

  list.innerHTML = shown.map(apostle => `
    <section class="card">
      <img src="${apostle.image}" alt="Painting of ${apostle.name}" width="320" height="400" loading="lazy">
      <h2>${apostle.name}</h2>
      <p><strong>${apostle.title}</strong></p>
      <p>Occupation: ${apostle.occupation}</p>
      <p>Hometown: ${apostle.hometown}</p>
      <button type="button" data-id="${apostle.id}">Read more</button>
    </section>
  `).join("");
}

list.addEventListener("click", event => {
  const id = event.target.dataset.id;

  if (id) {
    showApostle(apostles.find(apostle => apostle.id === id));
  }
});

filter.value = localStorage.getItem("apostle-filter") || "all";

filter.addEventListener("change", () => {
  localStorage.setItem("apostle-filter", filter.value);
  displayApostles();
});

async function init() {
  apostles = await getData("data/apostles.json");

  if (apostles.length === 0) {
    list.innerHTML = "<p>Sorry, the apostles could not be loaded.</p>";
    return;
  }

  displayApostles();
}

init();
