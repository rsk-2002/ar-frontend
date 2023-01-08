const navSlide = () => {
  const burger = document.querySelector(".header__hamburger");
  const nav = document.querySelector(".header__links");
  const navLinks = document.querySelectorAll(".header__links li");

  // Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
        link.style.opacity = 1;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });


    // Burger Animation
    burger.classList.toggle("toggle");

    document.querySelectorAll(".header__links li a").forEach((n) =>
      n.addEventListener("click", () => {
        burger.classList.remove("toggle");
        nav.classList.remove("nav-active");
        
      })
    );

  });
};



// BACK TO TOP BUTTON FUNCTIONALITY

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelector('#topBtn').addEventListener('click', topFunction);


window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > window.innerHeight) {
    document.querySelector('#topBtn').style.display = 'block';
  } else {
    document.querySelector('#topBtn').style.display = 'none';
  }
}






navSlide();
