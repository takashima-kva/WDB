document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
      }
      e.stopPropagation();
    });

    document.addEventListener('click', function () {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    });
  }

  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});
