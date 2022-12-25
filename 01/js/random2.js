export default function randomBackground() {
  let backgroundInterval;
  let backgroundOption = true;

  randomImageFunction();
  function randomImageFunction() {
    if (backgroundOption === true) {
      let bg = document.querySelector(".landing-page");
      let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

      backgroundInterval = setInterval(() => {
        let randomImgs = Math.floor(Math.random() * imgsArray.length);
        console.log(randomImgs);
        bg.style.backgroundImage = `url("imgs/${imgsArray[randomImgs]}")`;
      }, 1000);
    } else {
      clearInterval(backgroundInterval);
    }
  }
  /**
   ********@switchButtons
   */
  let swt = document.querySelectorAll(".random-backgrounds span");

  swt.forEach((span) => {
    span.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      if (e.target.dataset.background === "yes") {
        backgroundOption = true;
        randomImageFunction();
      } else {
        backgroundOption = false;
        clearInterval(backgroundInterval);
      }
      e.target.classList.add("active");
    });
  });
}
