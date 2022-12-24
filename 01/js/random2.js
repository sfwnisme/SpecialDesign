export default function randomBackground() {
  let bg = document.querySelector(".landing-page");
  console.log(bg);
  let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
  setInterval(() => {
    let randomImgs = Math.floor(Math.random() * imgsArray.length);
    console.log(randomImgs);
    bg.style.backgroundImage = `url("imgs/${imgsArray[randomImgs]}")`;
  }, 1000);

  /**
   ********@switchButtons
   */
  let swt = document.querySelectorAll(".random-backgrounds span");
  let backgroundInterval;
  let backgroundOption = true;

  swt.forEach((span) => {
    span.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
      });
      console.log(e.parentElement.child);
      e.target.classList.add("active");
    });
  });
}
