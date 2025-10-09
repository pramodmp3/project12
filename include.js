// include.js
function loadHTML(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error("Error loading file:", file, err));
}

// Load navbar and footer
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar-placeholder", "navbar2.html");
  loadHTML("footer-placeholder", "footer2.html");
});
