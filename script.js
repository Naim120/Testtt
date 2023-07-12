function openCarousel() {
  var carousel = document.createElement("div");
  carousel.classList.add("carousel");

  var imgs = [
    "image.jpg",
    "image.jpg",
    "image.jpg",
    "image.jpg",
    "image.jpg",
  ];

  for (var i = 0; i < imgs.length; i++) {
    var img = document.createElement("img");
    img.src = imgs[i];
    carousel.appendChild(img);
  }

  document.body.appendChild(carousel);
}

document.querySelector(".card").addEventListener("click", openCarousel);
