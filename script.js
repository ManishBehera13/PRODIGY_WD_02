document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".nav__toggle");
    const navLinks = document.querySelector(".nav__links");

    toggleButton.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });