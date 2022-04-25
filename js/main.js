(function () {
  const section = document.querySelector("#sticky-content");
  const context = document.querySelector("canvas").getContext("2d");

  const setAnimation = () => {
    const yOffset = window.scrollY - section.getBoundingClientRect().top;
    const height = section.getBoundingClientRect().height;
    const subHeight = height / 3;

    // console.log(yOffset, subHeight);
    if (yOffset >= 0 && yOffset < height) {
      if (section.style.visibility !== "visible") {
        section.style.visibility = "visible";
      }
    } else {
      if (section.style.visibility !== "hidden") {
        section.style.visibility = "hidden";
      }
    }

    for (let index of [0, 1, 2]) {
      if (yOffset >= subHeight * index && yOffset <= subHeight * (index + 1)) {
        // console.log(index);
        // 이미지 그리기
        const img = new Image();
        img.src = `img/app${index}.png`;
        img.onload = () => {
          context.drawImage(img, 0, 0, 375, 812);
        };

        // 텍스트 효과
        const elem = document.querySelector(
          `#text > p:nth-child(${index + 1})`
        );

        const ratio = (yOffset - subHeight * index) / subHeight;
        // console.log(ratio);

        elem.style.opacity = ratio;
        elem.style.transform = `translateY(${ratio * -140 + 70 - 50}%)`;

        // 다른 텍스트는 숨기기
        const hiddenElems = document.querySelectorAll(
          `#text > p:not(:nth-child(${index + 1}))`
        );
        hiddenElems.forEach((hiddenElem) => {
          hiddenElem.style.opacity = 0;
        });
      }
    }
  };

  window.addEventListener("load", setAnimation);
  window.addEventListener("scroll", setAnimation);
})();
