const warning = document.querySelector(".warning");

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
