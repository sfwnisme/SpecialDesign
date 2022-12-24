/* ==========[START Random Background]========== */
export default function rand() {
  // background switcher
  let backgroundOption = true;
  // background interval status
  let backgroundInterval;

  function randomize() {
    if (backgroundOption === true) {
      let bg = document.querySelector(".landing-page");
      let imgsArr = [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
        "05.jpg",
        "06.png",
      ];
      backgroundInterval = setInterval(() => {
        let randomImg = Math.floor(Math.random() * imgsArr.length);
        console.log(randomImg);

        bg.style.backgroundImage = `url("imgs/${imgsArr[randomImg]}")`;
        // bg.style.backgroundImage = 'url("imgs/' + imgsArr[randomImg] + '")';
      }, 1000);
      console.log("true");
    } else {
      clearInterval(backgroundInterval);
    }
  }
  randomize();

  /* ==========[END Random Background]========== */
  /* ==========[START Random Background Switch]========== */

  let bg = document.querySelectorAll(".random-backgrounds span");
  bg.forEach((span) => {
    span.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      e.target.classList.add("active");
      if (e.target.dataset.background === "yes") {
        backgroundOption = true;
        randomize();
      } else {
        backgroundOption = false;
        clearInterval(backgroundInterval);
      }
    });
  });
}
// rand();
/* ==========[END Random Background Switch]========== */
