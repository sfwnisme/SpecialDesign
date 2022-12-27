export default function animate() {
  console.log("Animation On Scroll");
  let skills = document.querySelector(".skills");
  let prog = document.querySelectorAll(".skill-progress span");
  console.log(prog);
  window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 300) {
      console.log(`scrollY=> ${skills.offsetTop}`);

      prog.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    } else {
      prog.forEach((span) => {
        span.style.width = 0;
      });
    }
  };
}
