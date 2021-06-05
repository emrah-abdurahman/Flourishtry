const homeLink = document.getElementById("home-link");
homeLink.addEventListener("mouseover", () => {
  homeLink.classList.add("mouse-over");
});
homeLink.addEventListener("mouseout", () => {
  homeLink.classList.add("mouse-out");
});
