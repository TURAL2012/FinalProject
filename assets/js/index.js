$(document).ready(function () {
  setTimeout(function () {
    $("body").removeClass("loading");
    $(".preloader").fadeOut();
  }, 1700);
  $("body").addClass("loading");
});

let darkMode = localStorage.getItem("darkMode");
const modeBtn = document.querySelector(".mode");
const MOON = "🌙";
const SUN = "☀️";
modeBtn.textContent = MOON



const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "active");
  modeBtn.textContent = SUN;
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
  modeBtn.textContent = MOON;
};

if (darkMode === "active") {
  enableDarkMode();
}

const changeMode = () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode === "active") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
};

modeBtn.addEventListener("click", changeMode);

// sccroll to top

const topToBtn = document.querySelector(".to-top-btn");

function scrollToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topToBtn.classList.add("active");
  } else {
    topToBtn.classList.remove("active");
  }
});

// carousell

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})