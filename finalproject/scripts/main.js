const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  const isOpen = mainNav.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});


const factsModal = document.querySelector("#quick-facts-modal");
const openFactsButton = document.querySelector("#quick-facts-button");
const closeFactsButton = document.querySelector("#close-facts-modal");

openFactsButton.addEventListener("click", () => {
  factsModal.showModal();
});

closeFactsButton.addEventListener("click", () => {
  factsModal.close();
});


const year = document.querySelector("#current-year");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#last-modified");
lastModified.textContent = `Last modified: ${document.lastModified}`;