const modal = document.querySelector("#apostle-modal");

export function showApostle(apostle) {
  modal.innerHTML = `
    <button id="close-modal" type="button" aria-label="Close">×</button>
    <h2>${apostle.name}</h2>
    <p><strong>${apostle.title}</strong></p>
    <p>Occupation: ${apostle.occupation}</p>
    <p>Hometown: ${apostle.hometown}</p>
    <p>${apostle.bio}</p>
    <p>Read: ${apostle.reference}</p>
  `;

  modal.querySelector("#close-modal").addEventListener("click", () => modal.close());
  modal.showModal();
}
