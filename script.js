AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic'
});
bootstrap.Carousel.getOrCreateInstance(
    document.querySelector('#heroSlider')
)
const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });