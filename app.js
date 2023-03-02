const warning = document.querySelector(".warning");
const copyRight = document.querySelector(".copyright span");

const year = new Date().getFullYear();

window.addEventListener("DOMContentLoaded", () => {
  const showWarning = localStorage.getItem("showWarning");
  if (showWarning) return;
  warning.style.display = "flex";
  warning.addEventListener("click", (e) => {
    if (e.target.className === "warning" || e.target.tagName === "BUTTON") {
      localStorage.setItem("showWarning", true);
      warning.style.display = "none";
    }
  });
});

copyRight.textContent = year;
