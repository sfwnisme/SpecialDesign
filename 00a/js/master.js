/* ==========[START Check LocalStorage Colors]========== */
let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
  console.log("main color data has saved");
  document.documentElement.style.setProperty("--main-color", mainColor);

  document.querySelectorAll("color-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color == mainColor) {
      element.classList.add("active");
    }
  });
}

/* ==========[END Check LocalStorage Colors]========== */

/* ==========[START Random Background]========== */
function randomBackGround() {
  let bg = document.querySelector(".landing-page");
  let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.png"];
  setInterval(() => {
    let randomImg = Math.floor(Math.random() * imgsArr.length);

    bg.style.backgroundImage = `url("../imgs/${imgsArr[randomImg]}")`;
    // bg.style.backgroundImage = 'url("../imgs/' + imgsArr[randomImg] + '")';
  }, 10000);
}
randomBackGround();

/* ==========[END Random Background]========== */

/* ==========[START Setting Box]========== */

setBox();
function setBox() {
  let settingBox = document.querySelector(".settings-box");
  let toggleSetting = document.querySelector(".toggle-settings");
  let gear = document.querySelector(".settings-box .toggle-settings .fa-gear");
  toggleSetting.addEventListener("click", () => {
    settingBox.classList.toggle("open");
    gear.classList.toggle("fa-spin");
  });
}

/* ==========[END Setting Box]========== */

/* ==========[START Switch Color]========== */

let liColor = document.querySelectorAll(".colors-list li");
console.log(liColor);

liColor.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
      );
      console.log(e.x)
    localStorage.setItem("color_option", e.target.dataset.color);
    e.target.parentElement
      .querySelectorAll(".active")
      .forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
  });
  
});
/* ==========[END Switch Color]========== */
