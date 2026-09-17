const url = "data/members.json";

const members = document.querySelector("#members");
const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");


async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();

  displayMembers(data.members);
}


function displayMembers(data) {
  members.innerHTML = "";

  data.forEach(member => {
    const card = document.createElement("article");

    card.classList.add("member-card");

    card.innerHTML = `
      <img
        src="${member.image}"
        alt="${member.name}"
        loading="lazy"
      >

      <div class="member-info">

        <h2>${member.name}</h2>

        <p>${member.category}</p>

        <p>
          <strong>Address:</strong>
          ${member.address}
        </p>

        <p>
          <strong>Phone:</strong>
          <a href="tel:${member.phone.replace(/\s+/g, "")}">
            ${member.phone}
          </a>
        </p>
        
        <a
          href="${member.website}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ${member.name} website (opens in a new tab)"
        >
          Website
        </a>

      </div>
    `;

    members.appendChild(card);
  });
}


gridButton.addEventListener("click", () => {
  members.className = "members-grid";

  gridButton.classList.add("active");
  listButton.classList.remove("active");

  gridButton.setAttribute("aria-pressed", "true");
  listButton.setAttribute("aria-pressed", "false");
});


listButton.addEventListener("click", () => {
  members.className = "members-list";

  listButton.classList.add("active");
  gridButton.classList.remove("active");

  listButton.setAttribute("aria-pressed", "true");
  gridButton.setAttribute("aria-pressed", "false");
});


document.querySelector("#year").textContent =
  new Date().getFullYear();


document.querySelector("#lastModified").textContent =
  document.lastModified;


getMembers();