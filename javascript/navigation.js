/**
 * navigation.js contains all of the logic for the site's navigation
 * which is implemented across the site
 **/

// Get the home link element which is the Flourishtry logo in the top left of the navbar
const homeLink = document.querySelector("#home-link");

// Add a mouseover and mouseout event listener to the Flourishtry home logo
// This will add and remove the appropriate CSS classes
homeLink.addEventListener("mouseover", function () {
  const randomColor = Math.floor(Math.random() * 6) + 1;
  homeLink.style.borderBottom = `3px solid ${colors[randomColor]}`;
});
homeLink.addEventListener("mouseout", function () {
  homeLink.style.borderBottom = "";
});
