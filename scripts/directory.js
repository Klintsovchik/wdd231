const url = "data/members.json";

const members =
  document.querySelector("#members");

const gridButton =
  document.querySelector("#gridButton");

const listButton =
  document.querySelector("#listButton");


async function getMembers() {

  const response =
    await fetch(url);

  const data =
    await response.json();

  displayMembers(data.members);
}


function displayMembers(data) {

  members.innerHTML = "";

  data.forEach(member => {

    const card =
      document.createElement("div");

    card.classList.add("member-card");

    card.innerHTML = `
      <img src="${member.image}"
           alt="${member.name}"
           loading="lazy">

      <div class="member-info">

        <h2>${member.name}</h2>

        <p>${member.category}</p>

        <p>
          <strong>Address:</strong>
          ${member.address}
        </p>

        <p>
          <strong>Phone:</strong>
          ${member.phone}
        </p>

        <a href="${member.website}"
           target="_blank">
          Website
        </a>

      </div>
    `;

    members.appendChild(card);

  });
}


gridButton.addEventListener(
  "click",
  () => {

    members.className =
      "members-grid";

    gridButton.classList.add("active");
    listButton.classList.remove("active");

  }
);


listButton.addEventListener(
  "click",
  () => {

    members.className =
      "members-list";

    listButton.classList.add("active");
    gridButton.classList.remove("active");

  }
);


document.querySelector("#year")
  .textContent =
  new Date().getFullYear();


document.querySelector("#lastModified")
  .textContent =
  document.lastModified;


getMembers();