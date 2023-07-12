function openCarousel() {
  var carousel = document.querySelector(".carousel");
  carousel.style.display = "block";
}

document.querySelector(".card").addEventListener("click", openCarousel);
