(function () {
  const containers = document.querySelectorAll('.timeline .container');

  function move(entries) {
    if (entries[0].isIntersecting) {
      // console.log(entries[0].target, entries[0].target.className, entries[0].isIntersecting);
      const container = entries[0].target;
      container.style.opacity = 1;
      container.style.transform = 'translateX(0px)';
    }
  }

  containers.forEach((container) => {
    const observer = new IntersectionObserver(move, { threshold: 0.2 });
    observer.observe(container);
  });
})();
