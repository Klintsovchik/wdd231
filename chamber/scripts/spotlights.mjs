const levels = {
  1: "Member",
  2: "Silver",
  3: "Gold"
};


export async function showSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  // Only gold (3) and silver (2) members can be in a spotlight.
  const chosen = data.members
    .filter(member => member.membership >= 2)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const spotlights = document.querySelector("#spotlights");

  chosen.forEach(member => {
    const card = document.createElement("section");

    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}" loading="lazy">

      <h3>${member.name}</h3>

      <p class="level">${levels[member.membership]} Member</p>

      <p>${member.address}</p>

      <p>${member.phone}</p>

      <p><a href="${member.website}">${member.website.replace("https://", "")}</a></p>
    `;

    spotlights.appendChild(card);
  });
}
