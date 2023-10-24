// Menu Bar Functionality
const menuIcon = document.querySelector(".menu-icon");
const panel = document.querySelector(".panel");
const closeButton = document.querySelector(".close-button");
const panelOverlay = document.querySelector(".panel-overlay");
let isPanelOpen = false;
// Event listeners for menu icon and close button
menuIcon.addEventListener("click", togglePanel);
closeButton.addEventListener("click", togglePanel);
// Function to toggle the panel visibility
function togglePanel() {
  if (isPanelOpen) {
    // Close the panel
    panel.style.right = "-300px";
    panelOverlay.style.display = "none";
  } else {
    // Open the panel
    panel.style.right = "0";
    panelOverlay.style.display = "block";
    panelOverlay.style.visibility = "visible";
    panelOverlay.style.opacity = "1";
  }
  isPanelOpen = !isPanelOpen; // Toggle panel state
}
// Smooth Scroll Behavior for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // Smooth scroll to the target section
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Scroll to Top Button Behavior
window.onscroll = function () {
  var scrollButton = document.getElementById("scrollButton");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // Show scroll to top button when scrolled down
    scrollButton.classList.remove("hide-button");
  } else {
    // Hide scroll to top button when at the top
    scrollButton.classList.add("hide-button");
  }
};
// // Function to scroll to the top of the page
function scrollToTop() {
  // Find the element to scroll to (in this case, the element with id "top")
  const topElement = document.getElementById("top");

  // Scroll to the top element with smooth behavior
  topElement.scrollIntoView({
    behavior: "smooth",
  });
}
