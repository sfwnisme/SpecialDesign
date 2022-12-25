/* ==========[START IMPORTING]========== */
//colors
import colors from "./extensions/colors.js";
colors();

//random background
import randomBackground from "./extensions/random-background.js";
randomBackground();
/**
@example
*/

/* ==========[END IMPORTING]========== */

// /* ==========[START Setting Box]========== */

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
