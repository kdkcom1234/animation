(function () {
  const section = document.querySelector('#swap-sticky');
  const main = document.querySelector('#swap-main');
  const canvas = document.querySelector('#phone canvas');
  const context = document.querySelector('#phone canvas').getContext('2d');
  const header = document.querySelector('#swap-header');

  const setAnimation = () => {
    // console.log(main.offsetTop);
    const yOffset = window.scrollY - (main.offsetTop + main.getBoundingClientRect().height);
    const sectionHeight = section.getBoundingClientRect().height;
    const subHeight = sectionHeight / 3;

    // console.log(yOffset, subHeight);
    if (yOffset >= 0 && yOffset < sectionHeight) {
      main.style.opacity = 0;
      section.style.opacity = 1;
      header.style.display = 'block';
    } else {
      main.style.opacity = 1;
      section.style.opacity = 0;
      header.style.display = 'none';
    }

    for (let index of [0, 1, 2]) {
      if (yOffset >= subHeight * index && yOffset <= subHeight * (index + 1)) {
        const ratio = (yOffset - subHeight * index) / subHeight;

        // 텍스트 효과
        let opacity = 0;
        if (ratio < 0.2) {
          opacity = ratio * 5;
        } else if (ratio >= 0.2 && ratio < 0.8) {
          opacity = 1;
        } else if (ratio >= 0.8) {
          opacity = 1 - ratio;
        }

        const elem = document.querySelector(`#swap-text > div:nth-child(${index + 1})`);
        elem.style.opacity = opacity;
        elem.style.transform = `translateY(${ratio * (-140 - 30) + 30}%)`;

        // 컨텐츠 효과
        if (ratio < 0.2) {
          canvas.style.opacity = 0;
        } else if (ratio >= 0.2 && ratio < 0.7) {
          if (canvas.style.opacity == 0) {
            canvas.style.opacity = 1;
            // 이미지 그리기
            const img = new Image();
            img.src = `img/app${index}.png`;
            img.onload = () => {
              // bufferedContext.drawImage(img, 0, 0, 375, 750);
              context.drawImage(img, 0, 0, 375, 750);
            };
          }
        } else if (ratio >= 0.7) {
          if (canvas.style.opacity == 1) {
            canvas.style.opacity = 0;
          }
        }

        // 다른 텍스트는 숨기기
        const hiddenElems = document.querySelectorAll(`#swap-text > div:not(:nth-child(${index + 1}))`);
        hiddenElems.forEach((hiddenElem) => {
          hiddenElem.style.opacity = 0;
        });
      }
    }
  };

  window.addEventListener('load', setAnimation);
  window.addEventListener('scroll', setAnimation);
  window.addEventListener('resize', setAnimation);
})();
