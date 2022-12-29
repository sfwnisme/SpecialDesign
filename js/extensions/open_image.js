export default function openImage() {
  const img = document.querySelectorAll(".images-box img");

  img.forEach((e) => {
    e.addEventListener("click", (e) => {
      let overlay = document.createElement("div");
      document.body.append(overlay);
      overlay.className = "popup-overlay";

      // popup-box
      let popBox = document.createElement("div");
      popBox.className = "popup-box";

      let popImg = document.createElement("img");
      popImg.src = e.target.src;
      popBox.append(popImg);
      document.body.append(popBox);
      if (popBox.classList.contains("popup-box")) {
        popBox.addEventListener("click", (x) => {
          x.target.classList.remove("popup-box");
        });
      }
    });
  });
}
