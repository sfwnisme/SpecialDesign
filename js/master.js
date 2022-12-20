/* ==========[START Random Background] */
function randomBackGround() {
  let bg = document.querySelector(".landing-page");
  let imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.png"];
  setInterval(() => {
    let randomImg = Math.floor(Math.random() * imgsArr.length);
    console.log(randomImg);

    // bg.style.backgroundImage = `url("../imgs/${imgsArr[randomImg]}")`;
    bg.style.backgroundImage = 'url("../imgs/' + imgsArr[randomImg] + '")';
  }, 10000);
}
randomBackGround();

/* ==========[END Random Background] */

/* ==========[START Setting Box] */

setBox();
function setBox() {
  let settingBox = document.querySelector(".settings-box");
  let toggleSetting = document.querySelector(".toggle-settings");
  let gear = document.querySelector(".settings-box .toggle-settings .fa-gear");
  console.log(toggleSetting);
  toggleSetting.addEventListener("click", () => {
    settingBox.classList.toggle("open");
    gear.classList.toggle("fa-spin");
  });
}

/* ==========[END Setting Box] */
