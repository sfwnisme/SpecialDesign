export default function navigation() {
  const btn = document.querySelector(".links-container .toggle-menu");
  const menu = document.querySelector(".links-container .links");
  console.log(menu);
  btn.addEventListener("click", (e) => {
    e.target.classList.toggle("menu-active");
    menu.classList.toggle("open");
    /*
  ============[info]============
  this function will stop closing
  the menu if we clicked on any link
  ==============================
   */
    e.stopPropagation();
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("links") &&
      !e.target.classList.contains("toggle-menu")
    ) {
      menu.classList.remove("open");
      btn.classList.remove("menu-active");
    }
  });
  /*
  ============[info]============
  this function will stop closing
  the menu if we clicked on any link
  ==============================
   */
  menu.addEventListener("click", (e) => e.stopPropagation());
}
