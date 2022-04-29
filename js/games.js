(function () {
  const top = document.querySelector('#top-intro-wrapper');
  const features = document.querySelector('#features-wrapper');
  const games = document.querySelector('#games');

  function fadeOutTop() {
    const topHeight = top.getBoundingClientRect().height;
    const featuresHeight = features.getBoundingClientRect().height;
    const gamesHeight = games.getBoundingClientRect().height;

    const offset = scrollY - (topHeight + featuresHeight);

    // console.log(offset, gamesHeight);
    const ratio = offset / gamesHeight;
    // console.log(ratio);

    if (ratio >= 0 && ratio <= 1) {
      games.style.opacity = 1 - ratio;
    } else {
      games.style.visibilisty = 'hidden';
    }
  }

  window.addEventListener('load', fadeOutTop);
  window.addEventListener('scroll', fadeOutTop);
  window.addEventListener('resize', fadeOutTop);
})();
