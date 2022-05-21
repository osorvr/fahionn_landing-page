/*
==================================
Navigation, Sticky 2nd Part OF Bar
==================================
*/

window.addEventListener("scroll", function () {
  let navArea = document.querySelector(".nav-bar");

  if (window.pageYOffset > 0) {
    navArea.classList.add("on-scroll-nav");
  } else {
    navArea.classList.remove("on-scroll-nav");
  }
});

/*
==========================
Open, Close Navigation bar
==========================
*/

const subNavBar = document.querySelector(".sub-nav-bar");
const open = document.querySelector("label");
const close = document.querySelector(".close");

// Open Sub Navigation Bar
open.addEventListener("click", function () {
  if (subNavBar.style.display === "none") {
    subNavBar.style.display = "block";
    close.style.display = "block";
  } else {
    subNavBar.style.display = "none";
  }
});

// Close Sub Navigation Bar
close.addEventListener("click", function () {
  if (subNavBar.style.display === "block") {
    subNavBar.style.display = "none";
    close.style.display = "none";
  } else {
    subNavBar.style.display = "block";
  }
});

// // // *******************************
// // // Adding Active To Current Button
// // // *******************************

// Grabs All Buttons.
const active = document.querySelectorAll("a");

// Iterates Through All Buttons.
for (let i = 0; i <= active.length; i++) {
  // Makes Every Button Clickable & Adds Parameter.
  active[i].addEventListener("click", function (element) {
    // Makes foreach Funtion for Buttons
    active.forEach((btn) => {
      // Creates Remove .active
      btn.classList.remove("active");
    });
    // Creates Add .active
    element.target.classList.add("active");
  });
}
