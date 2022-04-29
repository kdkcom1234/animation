(function () {
  const top = document.querySelector('#top-intro');

  function fadeOutTop() {
    const topHeight = top.getBoundingClientRect().height;
    const ratio = scrollY / topHeight;

    if (ratio <= 1) {
      top.style.opacity = 1 - ratio;
    } else {
      top.style.visibilisty = 'hidden';
    }
  }

  window.addEventListener('load', fadeOutTop);
  window.addEventListener('scroll', fadeOutTop);
  window.addEventListener('resize', fadeOutTop);
})();
