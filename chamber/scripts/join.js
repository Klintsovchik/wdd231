// Time the form was loaded
document.querySelector("#timestamp").value =
  new Date().toISOString();


// Membership benefit modals
document.querySelectorAll("[data-modal]").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById(link.dataset.modal).showModal();
  });
});


document.querySelectorAll(".membership-modal").forEach(modal => {
  modal.querySelector(".close-modal").addEventListener("click", () => {
    modal.close();
  });

  // Close when clicking the backdrop
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
