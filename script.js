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
  css.innerHTML = ".typewrite > .wrap { border-right: 2px solid #353535}";
  document.body.appendChild(css);
};
// Animation / Particle
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#00000#353535" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#353535",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
// Active Link
function isSectionInView(section) {
  const sectionOffsetTop = section.offsetTop - 250;
  const sectionVisibleHeight = section.clientHeight;
  const scrollY = window.scrollY;
  return (
    scrollY >= sectionOffsetTop &&
    scrollY < sectionOffsetTop + sectionVisibleHeight
  );
}
function updateActiveNavigationLinks() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section, index) => {
    if (isSectionInView(section)) {
      navLinks[index].classList.add("active");
    } else {
      navLinks[index].classList.remove("active");
    }
  });
}
document.addEventListener("scroll", updateActiveNavigationLinks);

// Tech Stack
let headStack = document.querySelector(".detail p");
let paraCon = document.querySelector(".para-1");
let paraTet = document.querySelector(".para-2");
let button1 = (document.querySelector(".content-1").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});
let button2 = (document.querySelector(".content-2").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button3 = (document.querySelector(".content-3").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button4 = (document.querySelector(".content-4").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button5 = (document.querySelector(".content-4").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button6 = (document.querySelector(".content-5").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.innerHTML = "<ul><li>W3school</li></ul>";
  paraTet.textContent = "testRERERERERERERERER";
});

let button7 = (document.querySelector(".content-6").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button8 = (document.querySelector(".content-7").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERdsadasdasdsERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});

let button9 = (document.querySelector(".content-8").onclick = () => {
  headStack.textContent = "LOREERERAERAERERERERER";
  paraCon.textContent = "testRERERERERERERERE";
  paraTet.textContent = "testRERERERERERERERER";
});
