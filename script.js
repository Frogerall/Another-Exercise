document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.onscroll = function () {
  var scrollButton = document.getElementById("scrollButton");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollButton.classList.remove("hide-button");
  } else {
    scrollButton.classList.add("hide-button");
  }
};

function scrollToTop() {
  const topElement = document.getElementById("top");
  topElement.scrollIntoView({
    behavior: "smooth",
  });
}
let navBar = document.querySelector(".nav-menu");
let menuToggle = document.querySelector(".nav-toggler");
let hide = document.querySelector(".hide");

function handleOutsideClick(event) {
  if (navBar.classList.contains("open") && !navBar.contains(event.target)) {
    navBar.classList.remove("open");
    document.body.removeEventListener("click", handleOutsideClick);
  }
}

menuToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from reaching the body
  navBar.classList.toggle("open");
  if (navBar.classList.contains("open")) {
    document.body.addEventListener("click", handleOutsideClick);
  } else {
    document.body.removeEventListener("click", handleOutsideClick);
  }
});

hide.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the click event from reaching the body
  navBar.classList.remove("open");
  document.body.removeEventListener("click", handleOutsideClick);
});
