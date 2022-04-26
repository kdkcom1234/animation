(function () {
  const container = document.querySelector('.container.spaceship');

  function play(entries) {
    // console.log(entries);

    entries[0].isIntersecting &&
      requestAnimationFrame(() => {
        console.log('animation spaceship');

        !document.querySelector('#spaceship') &&
          fetch('svg/spaceship.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const spaceship = document.querySelector('#spaceship');
              drawLines(spaceship, '#FFB800', 1.5);
            });

        !document.querySelector('#fire') &&
          fetch('svg/fire.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const fire = document.querySelector('#fire');
              drawLines(fire, '#FF3D00', 3);
            });

        !document.querySelector('#planet') &&
          fetch('svg/planet.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const planet = document.querySelector('#planet');
              drawLines(planet, '#FFB800', 4.5);
            });

        document.querySelector('#text-p2e').style.animation = 'text-fade-in 1s ease-in-out forwards';
      });
  }

  const observer = new IntersectionObserver(play, { threshold: 0.3 });
  observer.observe(container);
})();
