const show_slides = (n) => {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slider", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-slider";
};
const plus_slides = (n) => {
  show_slides((slideIndex += n));
};

const current_slide = (n) => {
  show_slides((slideIndex = n));
};
let slideIndex = 1;
show_slides(slideIndex);
