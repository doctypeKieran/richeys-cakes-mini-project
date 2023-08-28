// Variables for targeted elements
const mobileNav = document.getElementById("mobile-navbar");
const menuBtn = document.getElementById("hamburger-menu");
const mobileNavLinks = document.getElementsByClassName("mobile-nav-link");

// Logic for menu button, displaying/hiding mobile nav menu
menuBtn.addEventListener("click", () => {
  menuBtn.innerHTML = menuBtn.innerHTML === "menu" ? "close" : "menu";
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
});

/* 
    Hiding the menu again and changing the menu icon to
    closed if any of the links are clicked
*/
for (const link of mobileNavLinks) {
  link.addEventListener("click", () => {
    menuBtn.innerHTML = menuBtn.innerHTML === "menu" ? "close" : "menu";
    mobileNav.style.display =
      mobileNav.style.display === "flex" ? "none" : "flex";
  });
}
