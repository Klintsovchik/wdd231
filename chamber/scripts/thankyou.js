const params = new URLSearchParams(window.location.search);

const fields = [
  { name: "first", label: "First Name" },
  { name: "last", label: "Last Name" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Mobile Phone" },
  { name: "organization", label: "Business / Organization" },
  { name: "timestamp", label: "Submitted" }
];

const results = document.querySelector("#results");


function formatValue(name, value) {
  if (name === "timestamp" && value) {
    return new Date(value).toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short"
    });
  }

  return value || "—";
}


fields.forEach(field => {
  const term = document.createElement("dt");
  const detail = document.createElement("dd");

  term.textContent = field.label;
  detail.textContent = formatValue(field.name, params.get(field.name));

  results.append(term, detail);
});
