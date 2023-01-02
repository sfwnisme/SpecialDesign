export default function resetOption() {
  let reset = document.querySelector(".reset-options");

  reset.addEventListener("click", () => {
    /* 
    ===| first method
    .clear() to clear all localStorage data
    ===
    */
    window.localStorage.clear();
    window.location.reload();

    /* 
    ===| second method
    .removeItem() to clear specific items from localStorage data
    ===
    */
    // document.localStorage.removeItem("localStorage key")
  });
}
