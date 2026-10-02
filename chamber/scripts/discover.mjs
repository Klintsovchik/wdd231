// Discover page: builds the place cards and shows the visit message.

import { places } from "../data/discover.mjs";

const gallery = document.querySelector("#places");


function displayPlaces(list) {
  list.forEach((place, index) => {
    const card = document.createElement("section");

    card.classList.add("place-card", `place-${index + 1}`);

    card.innerHTML = `
      <h2>${place.name}</h2>

      <figure>
        <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
      </figure>

      <address>${place.address}</address>

      <p>${place.description}</p>

      <button type="button">Learn More</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      window.open(place.link, "_blank", "noopener");
    });

    gallery.appendChild(card);
  });
}


/* ---------- visit message ---------- */

const msInDay = 1000 * 60 * 60 * 24;

function visitMessage() {
  const now = Date.now();
  const lastVisit = Number(localStorage.getItem("discover-last-visit"));

  localStorage.setItem("discover-last-visit", now);

  if (!lastVisit) {
    return "Welcome! Let us know if you have any questions.";
  }

  const days = Math.floor((now - lastVisit) / msInDay);

  if (days < 1) {
    return "Back so soon! Awesome!";
  }

  return `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}


const visit = document.querySelector("#visit");

visit.querySelector("p").textContent = visitMessage();

visit.querySelector("button").addEventListener("click", () => {
  visit.hidden = true;
});


displayPlaces(places);
