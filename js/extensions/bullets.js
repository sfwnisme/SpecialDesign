export default function bullets() {
  let links = document.querySelectorAll(".links-container .links li a");
  let bullets = document.querySelectorAll(".nav-bullets .bullet");
  scrollToSection(links);
  scrollToSection(bullets);
  // giv(links);
  // giv(bullets);
}

function scrollToSection(element) {
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

/* =====[this function works only on nav links]===== */
// function giv(element) {
//   let links = document.querySelectorAll(".links-container .links li a");
//   console.log(links.innerText.toLowerCase());
//   element.forEach((ele) => {
//     ele.setAttribute("data-link", `.${ele.innerText.toLowerCase()}`);
//     ele.addEventListener("click", (e) => {
//       e.preventDefault();
//       let data = document.querySelector(e.target.dataset.link);
//       data.scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });
// }
