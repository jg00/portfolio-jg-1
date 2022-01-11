const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const links = document.getElementById("nav-links");

// add fixed class to navbar
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset, window.scrollY);
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");
    sidebar.classList.remove("show-sidebar");
    console.log(links, "here");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    // Subtract hight of navbar
    let position = element.offsetTop - 85;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
