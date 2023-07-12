// Mobile Navigation

const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

menuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
  i.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// Desktop Navigation

const options = {
  threshold: 0.8,
};

const addActiveClass = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
      //   console.log(entry.target);
      let currentActive = document.querySelector(".desktop-nav a.act…