// Directory page: shows the member cards and switches grid / list view.

const members = document.querySelector("#members");
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");


async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  displayMembers(data.members);
}


function displayMembers(list) {
  list.forEach(member => {
    const card = document.createElement("section");

    card.classList.add("member-card");

    card.innerHTML = `
      <div class="card-head">
        <h2>${member.name}</h2>
        <p>${member.tagline}</p>
      </div>

      <div class="card-body">
        <img src="${member.image}" alt="${member.name}" loading="lazy">

        <ul>
          <li><strong>EMAIL:</strong> ${member.email}</li>
          <li><strong>PHONE:</strong> ${member.phone}</li>
          <li><strong>URL:</strong> <a href="${member.website}">${member.website.replace("https://", "")}</a></li>
        </ul>
      </div>
    `;

    members.appendChild(card);
  });
}


gridButton.addEventListener("click", () => {
  members.className = "members-grid";
  gridButton.classList.add("active");
  listButton.classList.remove("active");
});


listButton.addEventListener("click", () => {
  members.className = "members-list";
  listButton.classList.add("active");
  gridButton.classList.remove("active");
});


getMembers();
