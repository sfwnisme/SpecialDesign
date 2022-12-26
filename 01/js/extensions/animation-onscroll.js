export default function animate() {
  console.log("Animation On Scroll");
  let prog = document.querySelectorAll(".skill-progress span");
  console.log(prog);
  prog.forEach((e) => {
    e.style.width = `${prog.dataset.progress}`;
  });
}
