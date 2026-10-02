import "./main.js";
import { getData } from "./data.js";

const timeline = document.querySelector("#timeline");

async function displayTimeline() {
  const events = await getData("data/highlights.json");

  timeline.innerHTML = events.map(event => `
    <li>
      <h3>${event.title}</h3>
      <p><em>${event.place} - ${event.reference}</em></p>
      <p>${event.description}</p>
    </li>
  `).join("");
}

displayTimeline();

document.querySelector("#timestamp").value = new Date().toISOString();
