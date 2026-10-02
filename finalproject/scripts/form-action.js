import "./main.js";

const params = new URLSearchParams(window.location.search);
const results = document.querySelector("#results");

const fields = [
  ["first", "First name"],
  ["last", "Last name"],
  ["email", "Email"],
  ["apostle", "Favorite apostle"],
  ["message", "Message"],
  ["timestamp", "Submitted"]
];

fields.forEach(([name, label]) => {
  const item = document.createElement("p");
  item.textContent = `${label}: ${params.get(name) || "-"}`;
  results.append(item);
});
