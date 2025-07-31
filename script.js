document.querySelectorAll(".slider-container").forEach((container, i) => {
  let index = 0;
  const slider = container.querySelector(".slider");
  const slides = container.querySelectorAll(".slide").length;

  function moveSlide(step) {
      index = (index + step + slides) % slides;
      slider.style.transform = `translateX(${-index * 100}%)`;
  }

  function autoSlide() {
      moveSlide(1);
  }
});




let span = document.querySelector(".up");
let section = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }

  if (window.scrollY >= section.offsetTop) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};



document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.image');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  elements.forEach(el => {
    observer.observe(el);
  });
});