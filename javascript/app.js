// An array of colors for the company logo
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Get the home link element which is the Flourishtry logo in the top left of the navbar
const homeLink = document.querySelector("#home-link");
// Get all navigation links
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
// Get all sub navigation menus
const subNavMenus = document.querySelectorAll(".sub-nav-menu");
// Get both the sign up and log in links
const signUpLoginLinks = document.querySelectorAll(".sign-up-log-in");

// Add a mouseover and mouseout event listener to the Flourishtry home logo
// This will add and remove the appropriate CSS classes
homeLink.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 6) + 1;
  homeLink.style.borderBottom = `5px solid ${colors[randomColor]}`;
});
homeLink.addEventListener("mouseout", function () {
  homeLink.style.borderBottom = "";
});

/********** Adding event listeners to the main and sub navigation links **********/
// for of loop to iterate through the HTMLCollection and add the appropriate event listeners to each navigation link
for (let navLink of navLinks) {
  navLink.addEventListener("mouseover", function () {
    navLink.classList.add("nav-link-mouse-over");
    navLink.classList.remove("nav-link-mouse-out");
    switch (this.innerText) {
      case "PRODUCTS":
        document.querySelector("#nav-link-products-dropdown").style.display =
          "block";
        break;
      case "SERVICES":
        document.querySelector("#nav-link-services-dropdown").style.display =
          "block";
        break;
    }
  });
  navLink.addEventListener("mouseout", function () {
    navLink.classList.add("nav-link-mouse-out");
    navLink.classList.remove("nav-link-mouse-over");
    switch (this.innerText) {
      case "PRODUCTS":
        document.querySelector("#nav-link-products-dropdown").style.display =
          "";
      case "SERVICES":
        document.querySelector("#nav-link-services-dropdown").style.display =
          "";
    }
  });
}

// Use a for of loop to iterate through the sub navigation menus and add the appropriate event listeners to each sub navigation menu
for (let subNavMenu of subNavMenus) {
  subNavMenu.addEventListener("mouseover", function () {
    subNavMenu.style.display = "block";
  });
  subNavMenu.addEventListener("mouseout", function () {
    subNavMenu.style.display = "none";
  });
}

// Use a for of loop to iterate through the HTMLCollection and add the appropriate event listeners to both the sign up and log in links
for (let signUpLoginLink of signUpLoginLinks) {
  signUpLoginLink.addEventListener("mouseover", function () {
    signUpLoginLink.classList.add("sign-up-log-in-mouse-over");
    signUpLoginLink.classList.remove("sign-up-log-in-mouse-out");
  });
  signUpLoginLink.addEventListener("mouseout", function () {
    signUpLoginLink.classList.add("sign-up-log-in-mouse-out");
    signUpLoginLink.classList.remove("sign-up-log-in-mouse-over");
  });
}
