export default function colors() {
  /* 
  .................
  .........[Save Color To localStorage].........
  .................
  */

  let savedColor = window.localStorage.getItem("color-option");
  if (savedColor !== null) {
    document.documentElement.style.setProperty("--main-color", savedColor);
    let colorActive = document.querySelectorAll(".colors-list li");

    colorActive.forEach((li) => {
      li.classList.remove("active");
      if (li.dataset.color == savedColor) {
        li.classList.add("active");
      }
    });
  }

  /* 
  .................
  .........[Switch Color].........
  .................
  */
  let colorContainer = document.querySelectorAll(".colors-list li");
  colorContainer.forEach((li) => {
    li.addEventListener("click", (e) => {
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );
      active(e);
      window.localStorage.setItem("color-option", e.target.dataset.color);
    });
  });
}

/* ==========[Active option function] */
function active(atv) {
  atv.target.parentElement.querySelectorAll(".active").forEach((x) => {
    x.classList.remove("active");
  });
  atv.target.classList.add("active");
}
