const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = `Last modified: ${document.lastModified}`;
