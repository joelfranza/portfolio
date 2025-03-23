document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) { // Check if the screen width is less than 992px (Bootstrap's lg breakpoint)
          var navbarCollapse = document.querySelector('.navbar-collapse');
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });
  
  window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });
  
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
  });
  
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && (e.key === "s" || e.key === "S" || e.key === "u" || e.key === "U" || e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) {
      e.preventDefault(); // Disable save, inspect, view source
    }
  });
  
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", false); // Disable dragging images
    img.addEventListener("mousedown", (e) => e.preventDefault()); // Disable selection
  });
  
  document.getElementById("year").textContent = new Date().getFullYear();

  