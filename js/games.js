(function () {
  const top = document.querySelector('#top-intro-wrapper');
  const features = document.querySelector('#features-wrapper');
  const games = document.querySelector('#games');
  // const gamesPhoneWrapper = document.querySelector('#games-phone-wrapper ');
  // const phoneHeight = 310;

  function fadeOutAndZoomOut() {
    const topHeight = top.getBoundingClientRect().height;
    const featuresHeight = features.getBoundingClientRect().height;
    const gamesHeight = games.getBoundingClientRect().height;

    const offset = scrollY - (topHeight + featuresHeight);
    const ratio = offset / gamesHeight;
    // const ratio = (offset - gamesHeight / 2) / (gamesHeight / 2);

    //fade - out;
    if (ratio >= 0 && ratio <= 1) {
      games.style.opacity = 1 - ratio;
    } else {
      games.style.visibilisty = 'hidden';
    }

    // // zoom-out
    // const scaleRatio = 1 - (ratio + 1);
    // const scaleFactor = window.screen.height / window.devicePixelRatio / phoneHeight;

    // if (scaleRatio >= 1 / scaleFactor && scaleRatio <= 1) {
    //   gamesPhoneWrapper.style.transform = `scale(${scaleRatio * scaleFactor})`;
    // } else if (scaleRatio > 1) {
    //   gamesPhoneWrapper.style.transform = `scale(${scaleFactor})`;
    // }
  }

  function play(entries) {
    if (entries[0].isIntersecting) {
      console.log('play');
      const video = document.querySelector('#game-video');
      video.play();
      // video.playbackRate = 1.2;
    }
  }

  window.addEventListener('load', fadeOutAndZoomOut);
  window.addEventListener('scroll', fadeOutAndZoomOut);
  window.addEventListener('resize', fadeOutAndZoomOut);

  const observer = new IntersectionObserver(play, { threshold: 0.33 });
  observer.observe(games);
})();
