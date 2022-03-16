// hamburger
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const lines = document.querySelectorAll('.line');
const navbarLinks = document.querySelectorAll('.navbar__item');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('show');
    lines.forEach(line => line.classList.toggle('transform'));
})

navbarLinks.forEach(link => link.addEventListener('click', () => {
    navbar.classList.remove('show');
    lines.forEach(line => line.classList.remove('transform'));
}))

//back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

toTop.addEventListener('click', () => {
    window.scrollTo(0,0);
})

