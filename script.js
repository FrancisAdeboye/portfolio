const hamburger = document.querySelector(".hamburger");
const rightSection = document.querySelector(".middle-section");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  rightSection.classList.toggle("active");
})


let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("swiper-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000)
}