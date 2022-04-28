(function () {
  const container = document.querySelector('.features-container.planet');
  const canvas = document.querySelector('#pome-cyan');
  const context = document.querySelector('#pome-cyan').getContext('2d');
  const img = new Image();
  const text = document.querySelector('#text-pmr');

  function play(entries) {
    entries[0].isIntersecting &&
      requestAnimationFrame(() => {
        !document.querySelector('#planet-pmr') &&
          fetch('svg/planet-pmr.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const pmr = document.querySelector('#planet-pmr');
              drawLines(pmr, 1);
            });

        !document.querySelector('#planet-small') &&
          fetch('svg/planet-small.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const small = document.querySelector('#planet-small');
              drawLines(small, 1);
            });

        if (!img.src) {
          img.src = 'img/pome-cyan.png';
          img.onload = () => {
            context.drawImage(img, 0, 0, 284, 296);
            canvas.style.opacity = 1;
          };
        }

        text.style.animation = 'text-fade-in 1s ease-in-out forwards';
      });
  }

  const observer = new IntersectionObserver(play, { threshold: 0.3 });
  observer.observe(container);
})();
