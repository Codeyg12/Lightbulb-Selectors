let lightbulbs = document.querySelectorAll(".lightbulb");
let subtitle = document.querySelector(".subtitle");
let count = 0;

lightbulbs.forEach((lightbulb) => {
  lightbulb.addEventListener("click", () => {
    lightbulb.classList.toggle("active");
    count++;
    subtitle.innerHTML = `You've clicked the lights ${
      count == 1 ? "once" : count > 1 ? `${count} times` : ""
    }`;
    changeRandomLight();
  });
  lightbulb.addEventListener("mouseenter", () => {
    lightbulb.classList.toggle("active");
  });
  lightbulb.addEventListener("mouseleave", () => {
    lightbulb.classList.toggle("active");
  });
});

const changeRandomLight = () => {
  for (let i = 0; i < 3; i++) {
    let randomIndex = Math.floor(Math.random() * lightbulbs.length) + 1;
    let randomLight = document.querySelector(`#lightbulb${randomIndex}`);
    randomLight.classList.toggle("active");
  }
};
