(function () {
  const games = document.querySelector('#games-wrapper');

  function play(entries) {
    if (entries[0].isIntersecting) {
      console.log('play');
      const video = document.querySelector('#game-video');
      video.play();
    }
  }

  const observer = new IntersectionObserver(play, { threshold: 0.2 });
  observer.observe(games);
})();
