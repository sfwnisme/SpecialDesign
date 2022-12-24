/* ==========[START IMPORTING]========== */

//random background
import rand from "./random2.js";
rand();
/**
@example
*/
/**
 * * this Is important comment
 * ? todo
 * 
 *  */
/* ==========[END IMPORTING]========== */

/* ==========[START Check LocalStorage Colors]========== */

let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  let parent = document.querySelectorAll(".colors-list li");
  parent.forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === mainColors) {
      e.classList.add("active");
    }
  });
}

/* ==========[END Check LocalStorage Colors]========== */

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
    window.localStorage.setItem("color_option", e.target.dataset.color);
    let parent = e.target.parentElement.querySelectorAll(".active");
    parent.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

/* ==========[END Switch Color]========== */
