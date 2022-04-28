(function () {
  const container = document.querySelector('.features-container.spaceship');
  const text = document.querySelector('#text-p2e');

  function play(entries) {
    entries[0].isIntersecting &&
      requestAnimationFrame(() => {
        !document.querySelector('#spaceship') &&
          fetch('svg/spaceship.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const spaceship = document.querySelector('#spaceship');
              drawLines(spaceship, 1.2);
            });

        !document.querySelector('#fire') &&
          fetch('svg/fire.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const fire = document.querySelector('#fire');
              drawLines(fire, 1.2);
            });

        !document.querySelector('#planet') &&
          fetch('svg/planet.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const planet = document.querySelector('#planet');
              drawLines(planet, 1.2);
            });

        text.style.animation = 'text-fade-in 1s ease-in-out forwards';
      });
  }

  const observer = new IntersectionObserver(play, { threshold: 0.3 });
  observer.observe(container);
})();
