const hamburgerMenu = document.querySelector(".hamburgerMenu");
const closeBtn = document.querySelector(".closeBtn");
const sideBar = document.querySelector(".sideBarContainer");
const overlay = document.querySelector(".overlaySidebar");
const bannerTop = document.querySelector(".bannerTop");
const navbar = document.querySelector(".nav");

function openSidebar() {
  sideBar.scrollTop = 0;
  sideBar.classList.add("openSidebar");
  document.body.classList.add("bodyNoScroll");
  overlay.classList.add("active");
  bannerTop.classList.add("showBanner");
  navbar.classList.remove("nav");
  navbar.classList.add("navSidebarOpen");
}

function closeSidebar() {
  sideBar.classList.remove("openSidebar");
  document.body.classList.remove("bodyNoScroll");
  overlay.classList.remove("active");
  bannerTop.classList.remove("showBanner");
  navbar.classList.add("nav");
  navbar.classList.remove("navSidebarOpen");
}

hamburgerMenu.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

// const bannerTopSwitch = true;

// function bannerTopToggle() {
//   // const scrollY = window.scrollY;
//   // if (scrollY < 10 & bannerTopSwitch) {}
//   bannerTop.classList.toggle("bannerTop");
//   bannerTop.classList.toggle("bannerTopHide");
// }
// window.addEventListener("scroll", bannerTopToggle);
