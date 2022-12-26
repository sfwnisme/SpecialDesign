export default function randomBox() {
  //global variables
  let backgroundInterval;
  let backgroundOption = true;

  /* 
  .............................
  ..........[localStorage].......... 
  .............................
*/
  let background_option = localStorage.getItem("background_option");
  if (localStorage.getItem("background_option") !== null) {
    console.log("localStorage Not Empty");
    console.log(typeof background_option);
    console.log(background_option);
    if (background_option === "true") {
      backgroundOption = true;
    } else {
      backgroundOption = false;
    }
    document.querySelectorAll(".random-backgrounds span").forEach((span) => {
      span.classList.remove("active");

      if (background_option === "true") {
        document
          .querySelector(".random-backgrounds .yes")
          .classList.add("active");
      } else {
        document
          .querySelector(".random-backgrounds .no")
          .classList.add("active");
      }
    });
  }

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
          backgroundOption = true;
          randomImage();
          localStorage.setItem("background_option", true);
        } else {
          clearInterval(backgroundInterval);
          backgroundOption = false;
          localStorage.setItem("background_option", false);
        }
      });
    });
  }
  options();
}
