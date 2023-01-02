export default function bullets() {
  let links = document.querySelectorAll(".links-container .links li a");
  let bullets = document.querySelectorAll(".nav-bullets .bullet");
  // ===| bullet option function
  bulletsOption();
  scrollToSection(links);
  scrollToSection(bullets);
  // giv(links);
  // giv(bullets);
}

function scrollToSection(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      let data = document.querySelector(e.target.dataset.section);
      data.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

/*
=====| discription
Bullets Option Setting
=====|
*/
function bulletsOption() {
  const options = document.querySelectorAll(".bullets-option span");
  const bullets = document.querySelector(".nav-bullets");
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.target.parentElement.querySelectorAll(".active").forEach((x) => {
        x.classList.remove("active");
      });
      e.target.classList.add("active");
      if (e.target.dataset.display == "show") {
        bullets.style.display = "block";
        localStorage.setItem("bulletState", "block");
        // console.log(e.target.dataset.display);
      } else {
        bullets.style.display = "none";
        localStorage.setItem("bulletState", "none");
        // console.log(e.target.dataset.display);
      }
    });
  });
  /* 
  =====| discription
  Bullets Option Setting To LocalStorage
  =====
  */
  let optionState = localStorage.getItem("bulletState");
  if (optionState !== null) {
    console.log("not empty");
    options.forEach((option) => {
      option.classList.remove("active");

      if (optionState === "block") {
        bullets.style.display = "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
      } else {
        bullets.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
      }
    });
  }
}

/* 
=====| concept
IDEA: is to get the classes names dynmicallay without adding them
  manually like the previous function 
  you have to implement the function and add the classes 
  in HTML using dataset attribute
=====
*/
/* =====[this function works only on nav links]===== */
// function giv(element) {
//   let links = document.querySelectorAll(".links-container .links li a");
//   console.log(links.innerText.toLowerCase());
//   element.forEach((ele) => {
//     ele.setAttribute("data-link", `.${ele.innerText.toLowerCase()}`);
//     ele.addEventListener("click", (e) => {
//       e.preventDefault();
//       let data = document.querySelector(e.target.dataset.link);
//       data.scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });
// }
