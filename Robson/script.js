"use strict";

const year = document.querySelector(".year");
const circle = document.querySelector(".circle");
const selected1 = document.querySelector(".events1");
const selected2 = document.querySelector(".events2");
const autor = document.querySelector(".autor");
//////////////////////////////////////////

// DATA
const getYear = new Date();

year.textContent = getYear.getFullYear();

// Circle interval opacity
const circleInterval = function () {
  setInterval(() => {
    if (circle.style.opacity === "0.5") {
      circle.style.opacity = "0.8";
    } else {
      circle.style.opacity = "0.5";
    }
  }, 4000);
};
circleInterval();

// Eventy

const eventsIntervals = function () {
  (() => {
    const events1 = [
      "Urodziny",
      "Komunie",
      "Wesela",
      "Kawalerskie",
      "Panieńskie",
      "Chrzciny",
    ];
    let i = 1;
    selected1.style.fontFamily = "inherit";
    setInterval(() => {
      if (selected1.style.opacity === "0") {
        selected1.style.opacity = 1;
        selected1.textContent = events1[i];
        i = (i + 1) % events1.length;
      } else {
        selected1.style.opacity = 0;
      }
    }, 1500);
  })();

  (() => {
    const events2 = [
      "Imprezy firmowe",
      "Szkolenia",
      "Targi",
      "Prezentacje",
      "Eventy",
      "Pokazy",
    ];
    let i = 1;
    selected2.style.fontFamily = "inherit";
    setInterval(() => {
      if (selected2.style.opacity === "0") {
        selected2.style.opacity = 1;
        selected2.textContent = events2[i];
        i = (i + 1) % events2.length;
      } else {
        selected2.style.opacity = 0;
      }
    }, 1500);
  })();
};
eventsIntervals();

// Footer interval
const footerInterval = function () {
  setInterval(() => {
    if (autor.style.opacity === "0") {
      autor.style.opacity = 0.5;
    } else {
      autor.style.opacity = 0;
    }
  }, 1500);
};
footerInterval();

//////////////////////////////////////////
// Mobile navigation

const btnMobile = document.querySelector(".btn-mobile-nav");
const navigation = document.querySelector(".header");
const navLink = document.querySelectorAll(".nav-link");

btnMobile.addEventListener("click", function () {
  navigation.classList.toggle("nav-open");
});
navLink.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navigation.classList.remove("nav-open");
  });
});

// NAV Scrolling
const navLinks = document.querySelectorAll(".nav__links");
navLinks.forEach((navLinks) =>
  navLinks.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })
);

// Sticky NAV

const headerHeight = navigation.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navigation.classList.add("stickyNav");
  } else {
    navigation.classList.remove("stickyNav");
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

observer.observe(hero);

// Reveal Sections
const reveals = document.querySelectorAll(".reveal");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const revealObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

reveals.forEach(function (reveal) {
  revealObserver.observe(reveal);
  reveal.classList.add("section-hidden");
});

// // COOKIES
// /////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const cookieBanner = document.querySelector(".cookie-banner");
//   const acceptCookiesButton = document.getElementById("accept-cookies");

//   acceptCookiesButton.addEventListener("click", function () {
//     // Ustawienie ciasteczka po zaakceptowaniu
//     document.cookie =
//       "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

//     // Schowanie banera z informacją o cookies
//     cookieBanner.style.display = "none";
//   });

//   // Sprawdzenie, czy ciasteczko zostało już zaakceptowane
//   if (
//     document.cookie
//       .split(";")
//       .some((cookie) => cookie.trim().startsWith("cookies_accepted="))
//   ) {
//     cookieBanner.style.display = "none";
//   }
// });
