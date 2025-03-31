const navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.backgroundColor = "#18171a";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
