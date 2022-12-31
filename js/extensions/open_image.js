export default function openImage() {
  const img = document.querySelectorAll(".images-box img");
  img.forEach((img) => {
    img.addEventListener("click", (e) => {
      const overlay = document.createElement("div");
      overlay.className = "popup-overlay";

      // image box
      const popBox = document.createElement("div");
      popBox.className = "popup-box";

      // img
      const popImg = document.createElement("img");
      popImg.src = e.target.src;

      // Alt
      const alt = document.createElement("h3");
      alt.className = "alt";
      alt.innerText = e.target.alt;

      // closing image action
      const x = document.createElement("span");
      x.innerText = "x";
      x.classList.add("close-button");
      x.addEventListener("click", () => {
        overlay.remove();
      });

      //append
      popBox.append(popImg);
      popBox.append(alt);
      overlay.append(x);
      overlay.append(popBox);
      document.body.append(overlay);
    });
  });
}
