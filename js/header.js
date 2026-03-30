const profileBtn = document.querySelector(".profileIcon");
const helpBtn = document.querySelector(".helpButton");

const profileMenu = document.getElementById("profileMenu");
const helpMenu = document.getElementById("helpMenu");

const closeProfile = document.getElementById("closeProfile");
const closeHelp = document.getElementById("closeHelp");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.toggle("show");
  helpMenu.classList.remove("show");
});

helpBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  helpMenu.classList.toggle("show");
  profileMenu.classList.remove("show");
});

closeProfile.addEventListener("click", (e) => {
  e.stopPropagation();
  profileMenu.classList.remove("show");
});

closeHelp.addEventListener("click", (e) => {
  e.stopPropagation();
  helpMenu.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (
    !profileMenu.contains(e.target) &&
    !helpMenu.contains(e.target) &&
    e.target !== profileBtn &&
    e.target !== helpBtn
  ) {
    profileMenu.classList.remove("show");
    helpMenu.classList.remove("show");
  }
});
