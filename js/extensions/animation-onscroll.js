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

/* ==========[Elzero Solutoin]========== */
// export default function animate() {
//   console.log("Animation On Scroll");

//   window.addEventListener("scroll", () => {
//     let skills = document.querySelector(".skills");
//     let prog = document.querySelectorAll(".skill-progress span");
//     let skillsOffsetTop = skills.offsetTop;
//     console.log(skillsOffsetTop);
//     let skillsOffsetHeight = skills.offsetHeight;
//     console.log(skillsOffsetHeight);
//     let windowInnerHeight = window.innerHeight;
//     console.log(windowInnerHeight);
//     let windowPageYOffset = window.pageYOffset;
//     console.log(windowPageYOffset);
//     // if the height of the window higher than this value start the animation
//     if (
//       windowPageYOffset >
//       skillsOffsetTop + skillsOffsetHeight - windowInnerHeight - 300
//     ) {
//       prog.forEach((e) => {
//         e.style.width = e.dataset.progress;
//       });
//     }
//     console.log(
//       `${skillsOffsetTop} , ${skillsOffsetHeight} , ${windowInnerHeight}`
//     );
//     console.log(skillsOffsetTop + skillsOffsetHeight - windowInnerHeight - 300);
//   });
// }

/* ==========[My Solutoin]========== */
export default function animate() {
  console.log("Animation On Scroll");

  window.addEventListener("scroll", () => {
    let skills = document.querySelector(".skills");
    let prog = document.querySelectorAll(".skill-progress span");
    let skillsOffsetTop = skills.offsetTop;
    let skillsOffsetHeight = skills.offsetHeight;
    let windowInnerHeight = window.innerHeight;
    let windowPageYOffset = window.pageYOffset;

    // the range of the animation
    let more = skillsOffsetTop + skillsOffsetHeight - windowInnerHeight * 1.6;
    let less = skillsOffsetTop + skillsOffsetHeight + windowInnerHeight * -0.5;
    console.log(`more${more}`);
    console.log(`less${less}`);
    if (windowPageYOffset > more && windowPageYOffset < less) {
      prog.forEach((e) => {
        e.style.width = e.dataset.progress;
      });
    } else {
      prog.forEach((e) => {
        e.style.width = 0;
      });
    }
  });
}
