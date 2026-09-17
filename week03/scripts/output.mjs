export function setTitle(course) {
  document.querySelector("#course-title").textContent =
    course.name;

  document.querySelector("#course-code").textContent =
    course.code;
}

export function renderSections(sections) {
  const sectionBody =
    document.querySelector("#sections");

  sectionBody.innerHTML = "";

  sections.forEach(section => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${section.sectionNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    `;

    sectionBody.appendChild(row);
  });
}