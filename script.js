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
// Text Animation
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #353535}";
  document.body.appendChild(css);
};
