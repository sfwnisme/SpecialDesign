export default function randomBox() {
  //global variables
  let backgroundInterval;
  let backgroundOption = true;
  /* 
  .............................
  ..........[random images].......... 
  .............................
  */
  function randomImage() {
    if (backgroundOption === true) {
      let bg = document.querySelector(".landing-page");
      let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];
      backgroundInterval = setInterval(() => {
        let randomMath = Math.floor(Math.random() * imgArr.length);
        bg.style.backgroundImage = `url('imgs/${imgArr[randomMath]}')`;
      }, 1000);
    } else {
      clearInterval(backgroundInterval);
    }
  }
  randomImage();

  /* 
  .............................
  ..........[options].......... 
  .............................
  */
  let option = document.querySelectorAll(".random-backgrounds span");
  function options() {
    option.forEach((span) => {
      span.addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach((x) => {
          x.classList.remove("active");
        });
        e.target.classList.add("active");
        if (e.target.dataset.background === "yes") {
          // backgroundOption = true;
          randomImage();
        } else {
          clearInterval(backgroundInterval);
          // backgroundOption = false;
        }
      });
    });
  }
  options();
}
