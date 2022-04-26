(function () {
  const container = document.querySelector('.container.planet');
  const canvas = document.querySelector('#pome-cyan');
  const context = document.querySelector('#pome-cyan').getContext('2d');
  const img = new Image();
  const text = document.querySelector('#text-pmr');

  function createKeyframes() {
    let frames = '';
    const framesCount = 360;
    for (let i = 0; i < framesCount; i++) {
      const quarter = Math.floor(framesCount / 4);
      const quaterNum = Math.floor(i / quarter);
      const frameName = ((i / framesCount) * 100).toFixed(2);

      const cur = (1 * ((quarter - (i % quarter)) / quarter)).toFixed(2);
      const next = (1 * ((i % quarter) / quarter)).toFixed(2);

      switch (quaterNum) {
        case 0:
          frames += `${frameName}% {
          border-top: 5px solid rgba(0, 255, 255, ${cur});
          border-left: 5px solid rgba(0, 255, 255, ${next});
          border-bottom: 5px solid rgba(0, 255, 255, 0);
          border-right: 5px solid rgba(0, 255, 255, 0);
        } `;
          break;
        case 1:
          frames += `${frameName}% {
          border-top: 5px solid rgba(0, 255, 255, 0);
          border-left: 5px solid rgba(0, 255, 255, ${cur});
          border-bottom: 5px solid rgba(0, 255, 255, ${next});
          border-right: 5px solid rgba(0, 255, 255, 0);
        } `;
          break;
        case 2:
          frames += `${frameName}% {
          border-top: 5px solid rgba(0, 255, 255, 0);
          border-left: 5px solid rgba(0, 255, 255, 0);
          border-bottom: 5px solid rgba(0, 255, 255, ${cur});
          border-right: 5px solid rgba(0, 255, 255, ${next});               
        } `;
          break;
        case 3:
          frames += `${frameName}% {
          border-top: 5px solid rgba(0, 255, 255, ${next});   
          border-left: 5px solid rgba(0, 255, 255, 0);   
          border-bottom: 5px solid rgba(0, 255, 255, 0);
          border-right: 5px solid rgba(0, 255, 255, ${cur});
        } `;
          break;
      }
    }

    frames += `100% {
      border-top: 5px solid rgba(0, 255, 255, 1);
      border-left: 5px solid rgba(0, 255, 255, 0);    
      border-bottom: 5px solid rgba(0, 255, 255, 0);
      border-right: 5px solid rgba(0, 255, 255, 0);           
    }`;

    const keyframes = `@keyframes spin {
      ${frames}
    }`;

    const style = `<style>${keyframes}</style>`;
    document.head.insertAdjacentHTML('beforeend', style);
  }

  function play(entries) {
    entries[0].isIntersecting &&
      requestAnimationFrame(() => {
        !document.querySelector('#planet-pmr') &&
          fetch('svg/planet-pmr.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const pmr = document.querySelector('#planet-pmr');
              drawLines(pmr, '#FFB800', 1.5);
            });

        !document.querySelector('#planet-small') &&
          fetch('svg/planet-small.svg')
            .then((res) => res.text())
            .then((svg) => {
              container.insertAdjacentHTML('afterbegin', svg);
              const small = document.querySelector('#planet-small');
              drawLines(small, '#FFB800', 4.5);
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

  createKeyframes();

  const observer = new IntersectionObserver(play, { threshold: 0.3 });
  observer.observe(container);
})();
