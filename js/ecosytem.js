(function () {
  const container = document.querySelector('.features-container.ecosystem');
  const canvas = document.querySelector('#pome-cyan-small');
  const context = canvas.getContext('2d');
  const img = new Image();
  const text = document.querySelector('#text-ecosystem');

  function play(entries) {
    entries[0].isIntersecting &&
      requestAnimationFrame(() => {
        !document.querySelector('#ecosystem-pmr') &&
          fetch('svg/ecosystem-pmr.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const pmr = document.querySelector('#ecosystem-pmr');
              drawLines(pmr, 1.2);
            });

        !document.querySelector('#ecosystem-gp') &&
          fetch('svg/ecosystem-gp.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const small = document.querySelector('#ecosystem-gp');
              drawLines(small, 1.2);
            });

        !document.querySelector('#ecosystem-dia') &&
          fetch('svg/ecosystem-dia.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const small = document.querySelector('#ecosystem-dia');
              drawLines(small, 1.2);
            });

        !document.querySelector('#gp-cyan') &&
          fetch('svg/gp-cyan.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const small = document.querySelector('#gp-cyan');
              setTimeout(() => {
                small.style.opacity = 1;
              }, 10);
            });

        if (!img.src) {
          img.src = 'img/pome-cyan.png';
          img.onload = () => {
            context.drawImage(img, 0, 0, 171, 177);
            canvas.style.opacity = 1;
          };
        }

        text.style.animation = 'text-fade-in 1s ease-in-out forwards';
      });
  }

  const observer = new IntersectionObserver(play, { threshold: 0.3 });
  observer.observe(container);
})();
