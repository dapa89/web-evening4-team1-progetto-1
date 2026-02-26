function rotateImage() {
  const svg1 = document.getElementById("my-svg");
  svg1.addEventListener("click", function () {
    console.log("siamo qui");
    svg1.classList.toggle("rotate");
  });
}
