// export default function animate() {
//   console.log("Animation On Scroll");
//   let skills = document.querySelector(".skills");
//   let prog = document.querySelectorAll(".skill-progress span");
//   console.log(prog);
//   window.onscroll = function () {
//     if (window.scrollY >= skills.offsetTop - 300) {
//       console.log(`%cscrollY=> ${this.scrollY}`, `color: green;`);
//       console.log(`%cpageYOffset=> ${this.pageYOffset}`, `color: red;`);
//       prog.forEach((span) => {
//         span.style.width = span.dataset.progress;
//       });
//     } else {
//       prog.forEach((span) => {
//         span.style.width = 0;
//       });
//     }
//   };
// }

/*NEW
  [] clientHeight = innerHeight
  [] clientWidth = innerWidth
  [] scrollY === pageYOffset
  [] scrollX === pageXOffset
*/

/*TODO
  [] offseTop => top point of the element
  [] offsetHeight => the height of the element
  [] innerHeight => the height of the visual page => browser site content
  [] pageYOffset or scrollY => the height of the window scrollY
*/

export default function animate() {
  console.log("Animation On Scroll");

  window.addEventListener("scroll", () => {
    let skills = document.querySelector(".skills");
    let prog = document.querySelectorAll(".skill-progress span");
    let skillsOffsetTop = skills.offsetTop;
    console.log(skillsOffsetTop);
    let skillsOffsetHeight = skills.offsetHeight;
    console.log(skillsOffsetHeight);
    let windowInnerHeight = window.innerHeight;
    console.log(windowInnerHeight);
    let windowPageYOffset = window.pageYOffset;
    console.log(windowPageYOffset);
    if (
      windowPageYOffset >
      skillsOffsetTop + skillsOffsetHeight - windowInnerHeight - 300
    ) {
      console.log("=================================");
      prog.forEach((e) => {
        e.style.width = e.dataset.progress;
      });
    }
  });
}
