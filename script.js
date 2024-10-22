let lightbulbs = document.querySelectorAll(".lightbulb");
lightbulbs.forEach((lightbulb) => {
  lightbulb.addEventListener("click", () => {
    lightbulb.classList.toggle("active");
  });
});
