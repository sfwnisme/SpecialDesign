export default function bullets() {
  let links = document.querySelectorAll(".links-container .links li a");
  let bullets = document.querySelectorAll(".nav-bullets .bullet");
  scrollToSection(links);
  scrollToSection(bullets);
}

function scrollToSection(element) {
  console.log(".....");
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      let data = document.querySelector(e.target.dataset.section);
      data.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
