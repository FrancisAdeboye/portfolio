var typed = new Typed(".auto-input", {
  strings: ["", "I'm a Web"],
  typeSpeed: 300,
  backSpeed: 200,
  loop: true,
})
var autoTyped = new Typed(".auto-input-2", {
  strings: ["", "Frontend Web Developer"],
  typeSpeed: 300,
  backSpeed: 100,
  loop: true,
})
var autoTyped2 = new Typed(".auto-input-3", {
  strings: ["", "I will help you reach your goal by providing help building your new platform in a timely manner."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
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
  setTimeout(showSlides, 3000);
}